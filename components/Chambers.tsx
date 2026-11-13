import Link from "next/link";
import { content } from "@/content";
import HonestImage from "@/components/HonestImage";

export default function Chambers({ intro = true }: { intro?: boolean }) {
  const { services, ui } = content;
  return (
    <section aria-labelledby="kamers-title" className="border-t border-ink">
      {intro ? (
        <div className="mx-auto max-w-[72rem] px-5 py-14 md:px-8 md:py-20">
          <h2 id="kamers-title" className="max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)]">
            {services.title}
          </h2>
          <p className="mt-5 max-w-2xl">{services.intro}</p>
          <p className="mt-4 max-w-2xl">{services.promise}</p>
        </div>
      ) : (
        <h2 id="kamers-title" className="sr-only">
          {services.title}
        </h2>
      )}
      <ol>
        {services.items.map((item) => (
          <li key={item.href} className="border-t border-ink">
            <Link
              href={item.href}
              className="group grid md:grid-cols-[7.5rem_minmax(0,1fr)]"
            >
              <div className="chamber-col md:min-h-full" style={{ ["--peil" as string]: item.level }}>
                <div className="chamber-water" />
              </div>
              <div className="flex flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:gap-10 md:px-8 md:py-10">
                <div className="max-w-xl">
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)]">{item.title}</h3>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed">{item.text}</p>
                  <span className="mt-4 inline-block text-link underline decoration-1 underline-offset-[3px]">
                    {ui.readMore}
                  </span>
                </div>
                <HonestImage
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="!w-auto shrink-0"
                />
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
