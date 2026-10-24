"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { interests } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const project = String(data.get("project") || "").trim();
    const companyUrl = String(data.get("companyUrl") || "");

    if (!name) nextErrors.name = "Please add your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Use a work email we can reply to.";
    }
    if (!company) nextErrors.company = "Add the organisation name.";
    if (!interest) nextErrors.interest = "Choose an area of interest.";
    if (project.length < 20) {
      nextErrors.project = "A short paragraph helps us understand the work.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          interest,
          project,
          timeline: String(data.get("timeline") || ""),
          companyUrl,
        }),
      });
      const json = (await res.json()) as { ok?: boolean; delivered?: boolean; message?: string };
      if (!res.ok) throw new Error(json.message || "Could not send.");
      if (json.delivered) {
        trackEvent("generate_lead", { form_id: "enquiry", interest, timeline: String(data.get("timeline") || "") });
      }
      setStatus("success");
      setMessage(json.message || "Received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not send.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input name="name" autoComplete="name" required />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Work email
        <input name="email" type="email" autoComplete="email" required />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" required />
        {errors.company && <span className="error">{errors.company}</span>}
      </label>
      <label>
        Area of interest
        <select name="interest" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.interest && <span className="error">{errors.interest}</span>}
      </label>
      <label>
        What are you working on?
        <textarea
          name="project"
          required
          minLength={20}
          placeholder="Systems involved, constraints, and what you want to change."
        />
        {errors.project && <span className="error">{errors.project}</span>}
      </label>
      <label>
        <span>
          Timeline <span className="muted">(optional)</span>
        </span>
        <select name="timeline" defaultValue="">
          <option value="">Not sure yet</option>
          <option value="Exploring">Exploring</option>
          <option value="Next quarter">Next quarter</option>
          <option value="Sooner">Sooner than a quarter</option>
        </select>
      </label>
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="companyUrl" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="muted" style={{ fontSize: 14, fontWeight: 400 }}>
        We use this information to understand the enquiry and reply. See the{" "}
        <a href="/privacy">privacy policy</a>. Do not send passwords, secrets, or
        regulated personal data in this form.
      </p>
      <button className="btn" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "success" && <p className="ok">{message}</p>}
      {status === "error" && <p className="error">{message}</p>}
    </form>
  );
}
