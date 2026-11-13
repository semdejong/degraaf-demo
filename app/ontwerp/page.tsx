import type { Metadata } from "next";
import { content } from "@/content";
import Blocks from "@/components/Blocks";
import Examples from "@/components/Examples";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";
import WithStaff from "@/components/WithStaff";

const page = content.pages.ontwerp;
const group = content.projects.groups.find((item) => item.id === "ontwerp");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OntwerpPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.ontwerp}
        title={page.title}
        lede="Eigen ontwerpen en realisatie, ook voor tuin- en landschapsarchitecten. Eén aanspreekpunt, een vrijblijvend advies en een gespecificeerde offerte."
      />
      <WithStaff>
        <Blocks blocks={page.blocks} />
      </WithStaff>
      {group ? <Examples id={group.id} title={content.ui.examples} photos={group.photos} /> : null}
      <PageClose />
    </>
  );
}
