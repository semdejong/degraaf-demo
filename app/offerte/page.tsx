import type { Metadata } from "next";
import { content } from "@/content";
import ConceptForm from "@/components/ConceptForm";
import PageIntro from "@/components/PageIntro";

const page = content.pages.offerte;
const { contact, ui } = content;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function OffertePage() {
  return (
    <>
      <PageIntro kicker={content.ui.kickers.offerte} title={page.title} lede={page.lede} />
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <ol className="flex flex-col gap-6">
          {page.steps.map((step) => (
            <li key={step.code} className="border-t-[3px] border-lime pt-3">
              <p className="font-mono text-[0.95rem]">{step.code}</p>
              <h2 className="mt-1 font-display text-2xl">{step.title}</h2>
              <p className="mt-2 text-[1.0625rem]">{step.text}</p>
            </li>
          ))}
        </ol>
        <ConceptForm
          email={contact.email}
          subject={page.subject}
          greeting={ui.greeting}
          notice={ui.concept}
          opened={ui.opened}
          errors={{ privacy: ui.privacyRequired, topics: ui.topicsRequired, required: ui.required }}
          privacyBefore="Ik heb de"
          privacyAfter="gelezen en ga ermee akkoord dat u deze gegevens gebruikt om mijn aanvraag te beantwoorden."
          submitLabel="Open mailbericht"
          phone={contact.phone}
          phoneHref={`tel:${contact.phoneE164}`}
          topics={page.topics}
          topicsLabel="Onderwerp"
          fields={[
            { name: "naam", label: "Naam", type: "text", required: true, autoComplete: "name" },
            { name: "telefoon", label: "Telefoon", type: "tel", required: true, autoComplete: "tel" },
            { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email" },
            { name: "adres", label: "Adres en plaats", type: "text", autoComplete: "street-address" },
            { name: "toelichting", label: "Toelichting", type: "textarea" },
          ]}
        />
      </div>
    </>
  );
}
