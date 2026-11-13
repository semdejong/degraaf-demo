import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";
import WithStaff from "@/components/WithStaff";

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
      <WithStaff>
        <Blocks blocks={page.blocks} />
      </WithStaff>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
      <PageClose />
    </>
  );
}
