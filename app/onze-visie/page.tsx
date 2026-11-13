import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Keurmerken from "@/components/Keurmerken";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";

const page = content.pages.visie;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VisiePage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.visie}
        title={page.title}
        lede={content.about.lede}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <Blocks blocks={page.blocks} />
        <div className="mt-12">
          <Keurmerken />
        </div>
      </div>
      <PageClose />
    </>
  );
}
