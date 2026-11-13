import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";
import WithStaff from "@/components/WithStaff";

const page = content.pages.bedrijven;
const group = content.projects.groups.find((item) => item.id === "bedrijven");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function BedrijvenPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.bedrijven}
        title={page.title}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <WithStaff>
        <Blocks blocks={page.blocks} />
        <p className="mt-8">
          <Link href="/overheid" className="inline-link">
            Overheid
          </Link>
        </p>
      </WithStaff>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
      <PageClose />
    </>
  );
}
