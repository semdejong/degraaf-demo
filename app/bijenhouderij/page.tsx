import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import HonestImage from "@/components/HonestImage";
import PageIntro from "@/components/PageIntro";

const page = content.pages.bijen;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BijenPage() {
  return (
    <>
      <PageIntro
        title={page.title}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
        tone="goud"
      />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <div className="border-l-[3px] border-goud pl-5">
          <Blocks blocks={page.blocks} />
          <p className="mt-6">
            <a href={page.association.href} className="inline-link" target="_blank" rel="noopener noreferrer">
              {page.association.label}
            </a>
          </p>
        </div>
        <h2 className="mt-14 font-display text-[clamp(1.8rem,3vw,2.5rem)]">Enkele foto’s van onze bijenhouderij</h2>
        <ul className="mt-6 flex flex-wrap gap-4">
          {page.photos.map((item) => (
            <li key={item.src}>
              <figure>
                <HonestImage src={item.src} alt={item.alt} width={item.width} height={item.height} className="!w-auto" />
                <figcaption className="mt-1 font-mono text-base">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
