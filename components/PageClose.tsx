import Link from "next/link";
import { content } from "@/content";
import PhoneLink from "@/components/PhoneLink";

export default function PageClose() {
  const { close, contact } = content;
  return (
    <section className="band-ink border-t border-ink bg-ink text-wit">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-wit">{close.title}</h2>
          <p className="mt-4">{close.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PhoneLink className="btn btn-wit">{contact.phone}</PhoneLink>
          <Link href="/offerte" data-cta="offerte" className="btn btn-fill">
            Afspraak of offerte
          </Link>
        </div>
      </div>
    </section>
  );
}
