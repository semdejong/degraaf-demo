import type { ReactNode } from "react";
import { content } from "@/content";

export default function PhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { contact, company } = content;
  return (
    <a
      href={`tel:${contact.phoneE164}`}
      data-cta="bellen"
      className={className}
      aria-label={`Bel ${company.name}, ${contact.phone}`}
    >
      {children ?? contact.phone}
    </a>
  );
}
