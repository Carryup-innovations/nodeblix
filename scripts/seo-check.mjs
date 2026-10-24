#!/usr/bin/env node
// Crawl-based SEO check. Usage:
//   node scripts/seo-check.mjs [baseUrl] [--canonical-host=https://nodeblix.com]
// Exits non-zero when an error-level issue is found.

const args = process.argv.slice(2);
const base = (args.find((a) => !a.startsWith("--")) || "http://localhost:3000").replace(/\/$/, "");
const canonicalHost = (
  args.find((a) => a.startsWith("--canonical-host="))?.split("=")[1] || "https://nodeblix.com"
).replace(/\/$/, "");

const errors = [];
const warnings = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const decode = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const pick = (html, re) => decode((html.match(re) || [])[1]);
const toLocal = (url) => url.replace(canonicalHost, base);

const robots = await (await fetch(`${base}/robots.txt`)).text();
if (/Disallow:\s*\/\s*$/m.test(robots)) err("/robots.txt", "blocks the whole site");
if (!robots.includes(`${canonicalHost}/sitemap.xml`)) err("/robots.txt", "missing sitemap reference");

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) err("/sitemap.xml", "no URLs");
for (const u of urls) if (!u.startsWith(canonicalHost)) err("/sitemap.xml", `non-canonical host ${u}`);

const titles = new Map();
const descriptions = new Map();
const inbound = new Map(urls.map((u) => [new URL(u).pathname, 0]));
const linkTargets = new Set();
const rows = [];

for (const url of urls) {
  const path = new URL(url).pathname;
  const res = await fetch(toLocal(url), { redirect: "manual" });
  const html = await res.text();
  if (res.status !== 200) {
    err(path, `status ${res.status}`);
    continue;
  }
  const head = html.slice(0, html.indexOf("</head>"));
  const title = pick(head, /<title>(.*?)<\/title>/);
  const description = pick(head, /<meta name="description" content="(.*?)"/);
  const canonical = pick(head, /<link rel="canonical" href="(.*?)"/);
  const ogImage = pick(head, /<meta property="og:image" content="(.*?)"/);
  const ogTitle = pick(head, /<meta property="og:title" content="(.*?)"/);
  const robotsMeta = pick(head, /<meta name="robots" content="(.*?)"/);

  if (!title) err(path, "missing <title> in <head>");
  else if (title.length > 65) warn(path, `title ${title.length} chars: ${title}`);
  if (!description) err(path, "missing meta description");
  else if (description.length < 70 || description.length > 170)
    warn(path, `description ${description.length} chars`);
  if (canonical !== url) err(path, `canonical ${canonical} != ${url}`);
  if (!ogImage) err(path, "missing og:image");
  if (!ogTitle) err(path, "missing og:title");
  if (robotsMeta && /noindex/.test(robotsMeta)) err(path, `robots meta ${robotsMeta}`);
  titles.set(title, [...(titles.get(title) || []), path]);
  descriptions.set(description, [...(descriptions.get(description) || []), path]);

  const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
  const h1 = [...body.matchAll(/<h1[\s>]/g)].length;
  if (h1 !== 1) err(path, `${h1} h1 elements`);
  const levels = [...body.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      warn(path, `heading jump h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

  const ldTypes = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(m[1]);
      for (const node of json["@graph"] || [json]) ldTypes.push(node["@type"]);
    } catch {
      err(path, "invalid JSON-LD");
    }
  }
  if (path !== "/" && !ldTypes.includes("BreadcrumbList")) warn(path, "no BreadcrumbList");

  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) err(path, "img without alt attribute");
  }

  const main = body.slice(body.indexOf('<main'), body.lastIndexOf("</main>"));
  for (const m of body.matchAll(/<a\b[^>]*href="([^"#?]*)[^"]*"/g)) {
    const href = m[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    linkTargets.add(href);
  }
  for (const m of main.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) {
    const target = m[1] === "" ? "/" : m[1];
    if (target !== path && inbound.has(target)) inbound.set(target, inbound.get(target) + 1);
  }

  const words = body
    .slice(body.indexOf("<main"), body.lastIndexOf("</main>"))
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  rows.push({ path, title, words, ld: [...new Set(ldTypes)].join(",") });
}

for (const [t, paths] of titles) if (paths.length > 1) err(paths.join(", "), `duplicate title "${t}"`);
for (const [d, paths] of descriptions)
  if (paths.length > 1) err(paths.join(", "), `duplicate description "${d.slice(0, 50)}…"`);

for (const href of linkTargets) {
  const res = await fetch(`${base}${href}`, { redirect: "manual" });
  if (res.status >= 400) err(href, `internal link returns ${res.status}`);
  else if (res.status >= 300) warn(href, `internal link redirects (${res.status})`);
}
for (const [path, count] of inbound)
  if (path !== "/" && count === 0) warn(path, "no in-content links (only nav/footer)");

const missing = await fetch(`${base}/this-page-does-not-exist`);
if (missing.status !== 404) err("/this-page-does-not-exist", `returns ${missing.status}, expected 404`);
const api = await fetch(`${base}/api/contact`);
if (api.status === 200) warn("/api/contact", "GET returns 200");

console.log(`Checked ${urls.length} URLs and ${linkTargets.size} internal link targets on ${base}\n`);
for (const r of rows) console.log(`${String(r.words).padStart(5)}w  ${r.path.padEnd(48)} ${r.ld}`);
console.log(`\n${errors.length} errors, ${warnings.length} warnings`);
for (const e of errors) console.log(`ERROR  ${e}`);
for (const w of warnings) console.log(`WARN   ${w}`);
process.exit(errors.length ? 1 : 0);
