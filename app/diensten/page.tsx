import type { Metadata } from "next";
import { content } from "@/content";
import Chambers from "@/components/Chambers";
import Keurmerken from "@/components/Keurmerken";
import PageIntro from "@/components/PageIntro";

const page = content.pages.diensten;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function DienstenPage() {
  return (
    <>
      <PageIntro
        title={page.title}
        lede={content.services.intro}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <Chambers intro={false} />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8">
        <p className="max-w-2xl">{content.services.promise}</p>
        <div className="mt-10">
          <Keurmerken />
        </div>
      </div>
    </>
  );
}
