import Link from "next/link";
import { content } from "@/content";

export default function Rhythm({ variant = "stack" }: { variant?: "stack" | "row" }) {
  const { rhythm } = content;
  if (variant === "row") {
    return (
      <section aria-labelledby="ritme-title" className="border-t border-ink">
        <div className="mx-auto max-w-[76rem] px-5 pt-14 md:px-8 md:pt-20">
          <h2 id="ritme-title" className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)]">
            {rhythm.title}
          </h2>
          <p className="mt-4 max-w-2xl">{rhythm.lede}</p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-[76rem] border-t border-ink md:grid-cols-4">
          {rhythm.steps.map((step) => (
            <li key={step.code} className="grid grid-cols-[12px_minmax(0,1fr)] border-b border-ink md:border-r md:border-b-0 md:last:border-r-0">
              <div className="relative min-h-52 bg-vlak">
                <div className="chamber-water" style={{ height: step.level }} />
              </div>
              <div className="px-5 py-6 md:px-6">
                <p className="font-mono text-[0.95rem]">{step.code}</p>
                <h3 className="mt-6 font-display text-[2rem]">{step.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed">{step.short}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto max-w-[76rem] px-5 py-6 md:px-8">
          <Link href="/diensten" className="inline-link">
            {content.ui.readMore}
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="ritme-lang" className="border-t border-ink">
      <div className="mx-auto max-w-[76rem] px-5 py-14 md:px-8 md:py-20">
        <h2 id="ritme-lang" className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)]">
          {rhythm.title}
        </h2>
        <p className="mt-4 max-w-2xl">{rhythm.lede}</p>
      </div>
      <ol>
        {rhythm.steps.map((step) => (
          <li key={step.code} className="grid border-t border-ink md:grid-cols-[9rem_minmax(0,1fr)]">
            <div className="relative min-h-24 bg-vlak">
              <div className="chamber-water" style={{ height: step.level }} />
              <p className="relative px-5 py-6 font-mono text-[0.95rem] md:px-6">{step.code}</p>
            </div>
            <div className="px-5 py-8 md:px-10 md:py-10">
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.7rem)]">{step.title}</h3>
              <p className="mt-3 max-w-2xl">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
