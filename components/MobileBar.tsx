import Link from "next/link";
import { content } from "@/content";
import Waterline from "@/components/Waterline";

export default function MobileBar() {
  const { contact, ui } = content;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-paper lg:hidden">
      <Waterline />
      <a
        href="https://sleads.nl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 items-center justify-center gap-2 border-b border-ink text-sm font-medium"
      >
        <span className="inline-block h-[3px] w-3 bg-lime" aria-hidden />
        Concept door Sleads
      </a>
      <div className="grid grid-cols-2">
        <a
          href={`tel:${contact.phoneE164}`}
          data-cta="bellen"
          className="btn btn-line rounded-none border-0 border-r border-ink"
        >
          {ui.call}
        </a>
        <Link href="/offerte" data-cta="offerte" className="btn btn-fill rounded-none">
          {ui.quote}
        </Link>
      </div>
    </div>
  );
}
