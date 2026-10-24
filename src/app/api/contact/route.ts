import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  project?: string;
  timeline?: string;
  companyUrl?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (body.companyUrl) {
    return NextResponse.json({
      ok: true,
      delivered: false,
      message: "Thank you. If a reply is needed, we will use the work email provided.",
    });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const interest = (body.interest || "").trim();
  const project = (body.project || "").trim();

  if (!name || !email || !company || !interest || project.length < 20) {
    return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "That email does not look usable." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    company,
    interest,
    project,
    timeline: (body.timeline || "").trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json(
        { message: "The enquiry could not be delivered. Try again or write once a mailbox is published." },
        { status: 502 },
      );
    }
    return NextResponse.json({
      ok: true,
      delivered: true,
      message: "Enquiry sent. We will reply to the work email you provided.",
    });
  }

  console.info("[contact-enquiry]", JSON.stringify(payload));
  return NextResponse.json({
    ok: true,
    message:
      "Enquiry recorded on this server. A delivery mailbox is not configured yet, so follow up may require connecting CONTACT_WEBHOOK_URL before launch.",
  });
}
