import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/content/articles";
import { getServicesBySlugs, inSentence } from "@/content/services";
import { articleSchema, graph } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) return {};
  return pageMeta({
    title: item.seoTitle ?? item.title,
    description: item.description,
    path: `/insights/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    section: item.category,
  });
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) notFound();
  const relatedServices = getServicesBySlugs(item.relatedServices);
  const primaryService = relatedServices[0];
  const relatedArticles = item.relatedArticles
    .map((s) => getArticle(s))
    .filter(Boolean);

  return (
    <main id="main">
      <JsonLd
        data={graph(
          articleSchema({
            path: `/insights/${item.slug}`,
            headline: item.title,
            description: item.description,
            image: item.image,
            datePublished: item.date,
            dateModified: item.updated,
            section: item.category,
          }),
        )}
      />
      <article>
        <PageHero
          image={item.image}
          alt={item.imageAlt}
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/insights", label: "Insights" },
            { label: item.category },
          ]}
          kicker={item.category}
          title={item.title}
          lede={item.summary}
        >
          <p className="hero-meta">
            Published <time dateTime={item.date}>{formatDate(item.date)}</time>
            {item.updated && (
              <>
                {" "}
                · Updated <time dateTime={item.updated}>{formatDate(item.updated)}</time>
              </>
            )}{" "}
            · Nodeblix engineering
          </p>
        </PageHero>
        <div className="section">
          <div className="wrap">
            <div className="prose">
              <aside className="takeaways" aria-labelledby="takeaways">
                <h2 id="takeaways">Key takeaways</h2>
                <ul>
                  {item.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </aside>
            </div>
            <ArticleBody blocks={item.body} />
            <div className="prose">
              <h2>Common questions</h2>
              {item.faqs.map((f) => (
                <div key={f.q} className="qa">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
              {primaryService && (
                <p className="article-service">
                  This article supports our{" "}
                  <Link href={`/services/${primaryService.slug}`}>
                    {inSentence(primaryService.name)} services
                  </Link>
                  . If the situation it describes is familiar,{" "}
                  <Link href="/contact">tell us about the systems involved</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
      <section className="section section-wash">
        <div className="wrap">
          <p className="kicker">Keep reading</p>
          <h2 style={{ margin: "12px 0 36px" }}>Related insights and services</h2>
          <CardGrid
            items={[
              ...relatedArticles.flatMap((a) =>
                a
                  ? [
                      {
                        href: `/insights/${a.slug}`,
                        image: a.image,
                        alt: a.imageAlt,
                        tag: `Insight · ${a.category}`,
                        title: a.title,
                        more: "Read article",
                      },
                    ]
                  : [],
              ),
              ...relatedServices.map((s) => ({
                href: `/services/${s.slug}`,
                image: s.image,
                alt: s.imageAlt,
                tag: "Service",
                title: s.name,
                copy: s.short,
                more: "Explore the service",
              })),
            ].slice(0, 6)}
          />
        </div>
      </section>
      <CtaBand title="Ask a technical question" />
    </main>
  );
}
