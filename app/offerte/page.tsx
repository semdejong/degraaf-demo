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
      <PageIntro
        title={page.title}
        lede="Goedendag. Vertel kort waar het over gaat. Wij bellen of mailen u terug. U kunt ook direct bellen."
      />
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-16">
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
