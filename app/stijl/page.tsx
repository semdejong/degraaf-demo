import type { Metadata } from "next";
import { content } from "@/content";
import HonestImage from "@/components/HonestImage";
import PageClose from "@/components/PageClose";
import PageIntro from "@/components/PageIntro";

const page = content.pages.stijl;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function StijlPage() {
  return (
    <>
      <PageIntro kicker={content.ui.kickers.stijl} title={page.title} lede={page.intro} />
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-16">
        <p className="max-w-2xl border-l-[3px] border-lime pl-4">{page.concept}</p>
        <p className="mt-6">
          <a href={page.tool.href} className="btn btn-fill" target="_blank" rel="noopener noreferrer">
            {page.tool.label}
          </a>
        </p>

        <h2 className="mt-16 font-display text-[clamp(1.8rem,3vw,2.6rem)]">Zes stijlen</h2>
        <ol className="mt-8 border-t border-ink">
          {page.styles.map((style, index) => (
            <li
              key={style.name}
              className="grid items-center gap-6 border-b border-ink py-8 md:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] md:gap-12"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <HonestImage src={style.src} alt={style.alt} width={style.width} height={style.height} />
              </div>
              <div>
                <p className="font-mono text-[0.95rem]">
                  <span className="mr-2 inline-block h-[3px] w-3 bg-lime align-middle" aria-hidden="true" />
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-[clamp(2rem,4vw,3.2rem)]">{style.name}</h3>
                <p className="mt-3 max-w-md">{style.alt}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-display text-[clamp(1.8rem,3vw,2.6rem)]">Acht vragen</h2>
        <p className="mt-4 max-w-2xl">
          Op de huidige website kiest u per vraag ja of nee, vinkt u de onderdelen aan en kunt u een opmerking of een eigen verzameling toevoegen, bijvoorbeeld een Pinterest-bord. Hier staan de vragen alleen om te lezen.
        </p>
        <ol className="mt-8">
          {page.questions.map((question) => (
            <li key={question.n} className="grid border-t border-ink py-6 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-6">
              <p className="font-mono text-[0.95rem]">{question.n}</p>
              <div>
                <h3 className="font-display text-[clamp(1.45rem,2vw,2rem)]">{question.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {question.options.map((option) => (
                    <li key={option} className="border border-ink bg-wit px-3 py-2 text-[1rem] leading-snug">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <PageClose />
    </>
  );
}
