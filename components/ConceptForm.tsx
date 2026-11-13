"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { conceptMailto } from "@/lib/mailto";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  autoComplete?: string;
};

type Topic = { value: string; label: string };

type Props = {
  email: string;
  subject: string;
  greeting: string;
  fields: Field[];
  topics?: Topic[];
  topicsLabel?: string;
  privacyBefore: string;
  privacyAfter: string;
  submitLabel: string;
  notice: string;
  opened: string;
  errors: { privacy: string; topics: string; required: string };
  phone: string;
  phoneHref: string;
};

export default function ConceptForm({
  email,
  subject,
  greeting,
  fields,
  topics,
  topicsLabel,
  privacyBefore,
  privacyAfter,
  submitLabel,
  notice,
  opened,
  errors,
  phone,
  phoneHref,
}: Props) {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = fields.some((field) => field.required && String(data.get(field.name) || "").trim() === "");
    if (missing) {
      setError(errors.required);
      setDone(false);
      return;
    }
    const chosen = topics ? data.getAll("onderwerp").map(String) : [];
    if (topics && chosen.length === 0) {
      setError(errors.topics);
      setDone(false);
      return;
    }
    if (data.get("privacy") !== "ja") {
      setError(errors.privacy);
      setDone(false);
      return;
    }

    const lines = [greeting, ""];
    for (const field of fields) {
      const value = String(data.get(field.name) || "").trim();
      lines.push(`${field.label}: ${value || "—"}`);
    }
    if (topics) {
      const labels = topics.filter((topic) => chosen.includes(topic.value)).map((topic) => topic.label);
      lines.push(`${topicsLabel ?? "Onderwerp"}: ${labels.join(", ")}`);
    }
    const href = conceptMailto(email, subject, lines.join("\n"));
    setError("");
    setDone(true);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <p className="border-l-[3px] border-lime pl-4 text-[1.0625rem]">{notice}</p>
      {fields.map((field) => (
        <label key={field.name} className="field">
          <span>
            {field.label}
            {field.required ? " *" : ""}
          </span>
          {field.type === "textarea" ? (
            <textarea name={field.name} required={field.required} autoComplete={field.autoComplete} rows={6} />
          ) : (
            <input name={field.name} type={field.type} required={field.required} autoComplete={field.autoComplete} />
          )}
        </label>
      ))}
      {topics ? (
        <fieldset>
          <legend className="mb-2">{topicsLabel}</legend>
          <div className="grid gap-1 sm:grid-cols-2">
            {topics.map((topic) => (
              <label key={topic.value} className="check">
                <input type="checkbox" name="onderwerp" value={topic.value} />
                <span>{topic.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}
      <label className="check">
        <input type="checkbox" name="privacy" value="ja" />
        <span>
          {privacyBefore}{" "}
          <Link href="/privacy" className="inline-link">
            privacyverklaring
          </Link>{" "}
          {privacyAfter}
        </span>
      </label>
      {error ? (
        <p role="alert" className="border border-ink bg-vlak px-3 py-2">
          {error}
        </p>
      ) : null}
      {done ? <p role="status">{opened}</p> : null}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-fill" data-cta="mailen">
          {submitLabel}
        </button>
        <a href={phoneHref} data-cta="bellen" className="inline-link">
          {phone}
        </a>
      </div>
    </form>
  );
}
