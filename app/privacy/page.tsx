import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import PageIntro from "@/components/PageIntro";

const page = content.pages.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro kicker={content.ui.kickers.privacy} title={page.title} />
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav aria-label="Onderdelen" className="lg:sticky lg:top-24 lg:self-start">
          <ol className="border-t border-ink">
            {page.blocks
              .filter((block) => block.type === "h2")
              .map((block) => (
                <li key={block.text} className="border-b border-ink py-2 font-mono text-[0.95rem]">
                  {block.text}
                </li>
              ))}
          </ol>
        </nav>
        <div>
        <Blocks blocks={page.blocks} />
        <ul className="mt-8 flex flex-col gap-2">
          {page.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="inline-link" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
}
