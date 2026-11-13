import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageIntro from "@/components/PageIntro";

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
        title={page.title}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <Blocks blocks={page.blocks} />
        <p className="mt-8">
          <Link href="/overheid" className="inline-link">
            Overheid
          </Link>
        </p>
      </div>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
    </>
  );
}
