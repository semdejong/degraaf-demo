import type { Metadata } from "next";
import { content } from "@/content";
import ConceptForm from "@/components/ConceptForm";
import PageIntro from "@/components/PageIntro";
import PhoneLink from "@/components/PhoneLink";
import RouteBlock from "@/components/RouteBlock";

const { contact, ui } = content;

export const metadata: Metadata = {
  title: contact.title,
  description: contact.text,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.contact}
        title={contact.title}
        lede={contact.text}
        image={contact.image}
        imageAlt={contact.imageAlt}
        imageWidth={contact.imageWidth}
        imageHeight={contact.imageHeight}
      />
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">{content.company.name}</h2>
          <p>{content.company.logoMark}</p>
          <address className="mt-4 not-italic">
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
          <p className="mt-3 font-mono text-[0.95rem]">KvK {contact.kvk}</p>
          <p className="mt-6 max-w-md border-l-[3px] border-lime pl-4">
            Liever langskomen? Het bedrijf ligt net buiten de bebouwde kom. De koffie staat klaar — of de thee.
          </p>
          <h2 className="mt-10 font-display text-3xl">Route</h2>
          <div className="mt-4">
            <RouteBlock />
          </div>
        </div>
        <ConceptForm
          email={contact.email}
          subject="Bericht via de website"
          greeting={ui.greeting}
          notice={ui.concept}
          opened={ui.opened}
          errors={{ privacy: ui.privacyRequired, topics: ui.topicsRequired, required: ui.required }}
          privacyBefore="Ik heb de"
          privacyAfter="gelezen en ga ermee akkoord dat u deze gegevens gebruikt om mijn bericht te beantwoorden."
          submitLabel="Open mailbericht"
          phone={contact.phone}
          phoneHref={`tel:${contact.phoneE164}`}
          fields={[
            { name: "naam", label: "Naam", type: "text", required: true, autoComplete: "name" },
            { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email" },
            { name: "bericht", label: "Uw bericht", type: "textarea", required: true },
          ]}
        />
      </div>
    </>
  );
}
