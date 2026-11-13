import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageIntro from "@/components/PageIntro";

const page = content.pages.ontwerp;
const group = content.projects.groups.find((item) => item.id === "ontwerp");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OntwerpPage() {
  return (
    <>
      <PageIntro title={page.title} lede="Eigen ontwerpen en realisatie, ook voor tuin- en landschapsarchitecten. Eén aanspreekpunt, een vrijblijvend advies en een gespecificeerde offerte." />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <Blocks blocks={page.blocks} />
      </div>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
    </>
  );
}
