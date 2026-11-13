import Link from "next/link";
import { content } from "@/content";
import Chambers from "@/components/Chambers";
import HonestImage from "@/components/HonestImage";
import Keurmerken from "@/components/Keurmerken";
import Peilschaal from "@/components/Peilschaal";
import PhoneLink from "@/components/PhoneLink";
import Rhythm from "@/components/Rhythm";
import RouteBlock from "@/components/RouteBlock";
import Waterline from "@/components/Waterline";

export default function Home() {
  const { hero, about, projects, pages, contact, ui } = content;
  const featured = projects.groups
    .map((group) => {
      const shot = group.photos.find((item) => item.featured) ?? group.photos[0];
      return { group, shot };
    })
    .filter((item) => item.shot);

  return (
    <>
      <section className="pb-12 md:pb-16">
        <div className="mx-auto grid max-w-[76rem] gap-8 px-5 pt-10 md:grid-cols-[9.5rem_minmax(0,1fr)] md:px-8 md:pt-14">
          <div className="hidden md:block">
            <Peilschaal />
          </div>
          <div className="max-w-3xl pt-2">
            <p className="font-mono text-[0.95rem]">{hero.kicker}</p>
            <h1 className="mt-3 font-display text-[clamp(3.4rem,9vw,6.4rem)]">{hero.title}</h1>
            <p className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] text-link">{content.company.tagline}</p>
            <p className="mt-6 max-w-xl text-[1.125rem] leading-[1.65]">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneLink className="btn btn-line">{hero.secondaryCta.label}</PhoneLink>
              <Link href={hero.primaryCta.href} data-cta="offerte" className="btn btn-fill">
                {hero.primaryCta.label}
              </Link>
            </div>
            <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {hero.highlights.map((item) => (
                <li key={item} className="font-mono text-[0.95rem]">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 md:hidden">
              <Peilschaal axis="horizontal" />
            </div>
          </div>
        </div>
        <figure className="mx-auto mt-10 max-w-[80rem] px-5 md:mt-14 md:px-8">
          <HonestImage
            src={hero.image}
            alt={hero.imageAlt}
            width={hero.imageWidth}
            height={hero.imageHeight}
            priority
          />
          <figcaption className="mt-2 font-mono text-[0.95rem]">{hero.imageCaption}</figcaption>
        </figure>
      </section>

      <section className="border-t border-ink">
        <Waterline />
        <div className="mx-auto grid max-w-[76rem] gap-8 px-5 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:px-8 md:py-24">
          <div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)]">{about.title}</h2>
            {about.text.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-4">
                {paragraph}
              </p>
            ))}
            <p className="mt-6">
              <Link href="/onze-visie" className="inline-link">
                {ui.readMore}
              </Link>
            </p>
          </div>
          <HonestImage src={about.image} alt={about.imageAlt} width={about.imageWidth} height={about.imageHeight} />
        </div>
      </section>

      <Rhythm variant="row" />

      <Chambers />

      <section className="border-t border-ink">
        <div className="mx-auto max-w-[76rem] px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)]">{projects.title}</h2>
            <Link href="/projecten" className="inline-link">
              {ui.allProjects}
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-12">
            {featured.map(({ group, shot }, index) => (
              <li key={group.id} className={index % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}>
                <Link href={`/projecten#${group.id}`} className="block">
                  <HonestImage src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
                  <span className="mt-2 block font-mono text-[0.95rem]">{shot.caption}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink bg-vlak">
        <div className="mx-auto grid max-w-[76rem] gap-8 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:px-8 md:py-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{pages.stijl.title}</h2>
            <p className="mt-4">{pages.stijl.concept}</p>
            <p className="mt-6">
              <a href={pages.stijl.tool.href} className="btn btn-line" target="_blank" rel="noopener noreferrer">
                {pages.stijl.tool.label}
              </a>
            </p>
            <p className="mt-4">
              <Link href="/stijl" className="inline-link">
                {ui.readMore}
              </Link>
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {pages.stijl.styles.map((style) => (
              <li key={style.name}>
                <HonestImage src={style.src} alt={style.alt} width={style.width} height={style.height} />
                <p className="mt-1 font-mono text-[0.85rem]">{style.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink">
        <div className="mx-auto grid max-w-[76rem] items-start gap-8 px-5 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:px-8 md:py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{pages.bijen.title}</h2>
            <p className="mt-4">{pages.bijen.blocks[0].type === "p" ? pages.bijen.blocks[0].text : null}</p>
            <p className="mt-6">
              <Link href="/bijenhouderij" className="inline-link">
                {ui.readMore}
              </Link>
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {pages.bijen.photos.slice(0, 3).map((item) => (
              <li key={item.src}>
                <HonestImage
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="!w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink bg-ink text-wit band-ink">
        <div className="mx-auto flex max-w-[76rem] flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-wit">{pages.vacatures.role}</h2>
            <p className="mt-4 text-wit">{pages.vacatures.then}</p>
          </div>
          <Link href="/vacatures" className="btn btn-wit">
            {ui.readMore}
          </Link>
        </div>
      </section>

      <section className="border-t border-ink">
        <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{contact.title}</h2>
            <p className="mt-4">{contact.text}</p>
            <address className="mt-6 not-italic">
              {contact.street}
              <br />
              {contact.postal}
            </address>
            <p className="mt-3">
              <PhoneLink className="inline-link" />
            </p>
            <p className="mt-2">
              <a className="inline-link" href={`mailto:${contact.email}`} data-cta="mailen">
                {contact.email}
              </a>
            </p>
            <p className="mt-6">
              <Link href="/contact" className="inline-link">
                Route en contact
              </Link>
            </p>
          </div>
          <RouteBlock />
        </div>
        <div className="mx-auto max-w-[76rem] px-5 pb-16 md:px-8">
          <Keurmerken />
        </div>
      </section>
    </>
  );
}
