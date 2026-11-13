import Link from "next/link";
import { content } from "@/content";
import HonestImage from "@/components/HonestImage";
import Keurmerken from "@/components/Keurmerken";
import PhoneLink from "@/components/PhoneLink";
import Waterline from "@/components/Waterline";

export default function Footer() {
  const { company, contact, footer, nav } = content;
  return (
    <footer className="border-t border-ink bg-paper pb-36 lg:pb-16">
      <Waterline />
      <div className="mx-auto grid max-w-[72rem] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <HonestImage
            src={company.logo}
            alt=""
            width={390}
            height={350}
            className="!h-14 !w-auto"
          />
          <p className="mt-4 font-display text-3xl leading-none">{company.name}</p>
          <p className="mt-2 text-[1.0625rem]">{company.tagline}</p>
          <p className="mt-4 max-w-xs">
            {contact.street}
            <br />
            {contact.postal}
          </p>
          <p className="mt-2 font-mono text-[0.95rem]">{footer.kvk}</p>
        </div>
        <div>
          <p className="font-mono text-[0.95rem] tracking-wide">CONTACT</p>
          <p className="mt-3">
            <PhoneLink className="inline-link" />
          </p>
          <p className="mt-2">
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="inline-link">
              {contact.email}
            </a>
          </p>
          <p className="mt-4">
            <a href={contact.maps} className="inline-link" target="_blank" rel="noopener noreferrer">
              {contact.mapsLabel}
            </a>
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.95rem] tracking-wide">PAGINA’S</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/offerte" data-cta="offerte" className="inline-link">
                Afspraak of offerte
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="inline-link">
                Privacyverklaring
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[72rem] px-5 pb-6 md:px-8">
        <Keurmerken />
      </div>
      <div className="mx-auto flex max-w-[72rem] flex-col gap-3 border-t border-ink/15 px-5 py-6 text-base md:flex-row md:flex-wrap md:items-center md:justify-between md:px-8">
        <p>{company.name}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
          {footer.socials.map((item) => (
            <a key={item.href} href={item.href} className="inline-link" target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
          <a href={footer.voorwaarden.href} className="inline-link" target="_blank" rel="noopener noreferrer">
            {footer.voorwaarden.label}
          </a>
          <a href="https://sleads.nl" className="inline-link" target="_blank" rel="noopener noreferrer">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
