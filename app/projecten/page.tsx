import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";
import ProjectGallery from "@/components/ProjectGallery";

const page = content.projects;

export const metadata: Metadata = {
  title: page.title,
  description: page.lede,
};

export default function ProjectenPage() {
  const { ui, footer, pages } = content;
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.projecten}
        title={page.title}
        lede={page.lede}
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
        imageWidth={content.hero.imageWidth}
        imageHeight={content.hero.imageHeight}
      />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <nav aria-label="Onderdelen van de galerij">
          <ol className="grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {page.groups.map((group) => (
              <li key={group.id} className="bg-paper">
                <a href={`#${group.id}`} className="block min-h-11 px-4 py-4">
                  <span className="block font-display text-3xl">{group.title}</span>
                  <span className="mt-1 block text-[1rem] leading-snug">{group.lede}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-12">
        <ProjectGallery
          groups={page.groups}
          labels={{ enlarge: ui.enlarge, previous: ui.previous, next: ui.next, close: ui.close }}
        />
        </div>
        <p className="mt-12 max-w-2xl">
          <Link href="/bijenhouderij" className="inline-link">
            {pages.bijen.title}
          </Link>
          <span> — foto’s van de bijenhouderij staan op een eigen pagina, op hun ware grootte.</span>
        </p>
        <p className="mt-4 max-w-2xl text-[1.0625rem]">
          {page.facebookNote}{" "}
          <a href={footer.socials[0].href} className="inline-link" target="_blank" rel="noopener noreferrer">
            {footer.socials[0].label}
          </a>
        </p>
      </div>
      <PageClose />
    </>
  );
}
