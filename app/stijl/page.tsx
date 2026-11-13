import type { Metadata } from "next";
import { content } from "@/content";
import HonestImage from "@/components/HonestImage";
import PageIntro from "@/components/PageIntro";

const page = content.pages.stijl;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function StijlPage() {
  return (
    <>
      <PageIntro title={page.title} lede={page.intro} />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <p className="max-w-2xl border-l-[3px] border-lime pl-4">{page.concept}</p>
        <p className="mt-6">
          <a href={page.tool.href} className="btn btn-fill" target="_blank" rel="noopener noreferrer">
            {page.tool.label}
          </a>
        </p>

        <h2 className="mt-16 font-display text-[clamp(1.8rem,3vw,2.6rem)]">Zes stijlen</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {page.styles.map((style) => (
            <li key={style.name}>
              <HonestImage src={style.src} alt={style.alt} width={style.width} height={style.height} />
              <p className="mt-2 font-display text-2xl">{style.name}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-[clamp(1.8rem,3vw,2.6rem)]">Acht vragen</h2>
        <p className="mt-4 max-w-2xl">
          Op de huidige website kiest u per vraag ja of nee, vinkt u de onderdelen aan en kunt u een opmerking toevoegen.
        </p>
        <ol className="mt-8 flex flex-col gap-8">
          {page.questions.map((question) => (
            <li key={question.n} className="border-t border-ink pt-5">
              <p className="font-mono text-[0.95rem]">{question.n}</p>
              <h3 className="mt-1 font-display text-[clamp(1.4rem,2vw,1.9rem)]">{question.title}</h3>
              <ul className="peil-list mt-3">
                {question.options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
