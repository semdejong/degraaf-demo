import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import HonestImage from "@/components/HonestImage";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";
import Waterline from "@/components/Waterline";

const page = content.pages.bijen;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BijenPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.bijen}
        title={page.title}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
        tone="goud"
      />
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="border-l-[3px] border-goud pl-5">
          <Blocks blocks={page.blocks} />
          <p className="mt-6">
            <a href={page.association.href} className="inline-link" target="_blank" rel="noopener noreferrer">
              {page.association.label}
            </a>
          </p>
        </div>
        <aside className="border-t-[3px] border-goud pt-4">
          <p className="font-mono text-[0.95rem]">Bij het vak</p>
          <p className="mt-3">
            Een beplantingsplan houdt rekening met bloei. Zonder bijen blijft de bevruchting uit. Daarom hoort de bijenhouderij bij De Graaf, naast ontwerp en onderhoud.
          </p>
          <p className="mt-4">
            <Link href="/particulier" className="inline-link">
              Beplantingsplan
            </Link>
          </p>
        </aside>
      </div>
      <Waterline tone="goud" />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)]">Enkele foto’s van onze bijenhouderij</h2>
        <ul className="mt-8 flex flex-wrap items-start gap-x-6 gap-y-8">
          {page.photos.map((item, index) => (
            <li key={item.src} className={index % 2 === 1 ? "md:mt-10" : ""}>
              <figure>
                <HonestImage src={item.src} alt={item.alt} width={item.width} height={item.height} className="!w-auto" />
                <figcaption className="mt-1 font-mono text-base">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <PageClose />
    </>
  );
}
