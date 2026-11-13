import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";

const page = content.pages.overheid;
const group = content.projects.groups.find((item) => item.id === "overheid");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OverheidPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.overheid}
        title={page.title}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <Blocks blocks={page.blocks} />
      </div>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
      <PageClose />
    </>
  );
}
