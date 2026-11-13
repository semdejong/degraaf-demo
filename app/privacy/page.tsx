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
      <PageIntro title={page.title} />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
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
    </>
  );
}
