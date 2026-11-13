import type { Metadata } from "next";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
};

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[76rem] px-5 py-16 md:px-8 md:py-24">
      <p className="font-mono text-[0.95rem]">404</p>
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(2.7rem,7vw,5rem)]">
        Pagina niet gevonden
      </h1>
      <p className="mt-5 max-w-xl text-[1.0625rem]">
        Dit pad hoort niet bij deze site. Ga terug naar de homepage, of bel ons.
      </p>
      <p className="mt-8 flex flex-wrap items-center gap-3">
        <Link href="/" className="btn btn-fill">
          Naar de homepage
        </Link>
        <PhoneLink className="btn btn-line" />
      </p>
    </article>
  );
}
