import type { Metadata } from "next";
import { content } from "@/content";
import ConceptForm from "@/components/ConceptForm";
import PageIntro from "@/components/PageIntro";
import PhoneLink from "@/components/PhoneLink";

const page = content.pages.vacatures;
const { contact, ui } = content;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function VacaturesPage() {
  return (
    <>
      <PageIntro
        kicker={content.ui.kickers.vacatures}
        title={page.title}
        lede={page.intro}
        image={page.image}
        imageAlt={page.imageAlt}
        imageWidth={page.imageWidth}
        imageHeight={page.imageHeight}
      />
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)]">{page.role}</h2>
          <p className="mt-4">{page.placeNote}</p>
          <h3 className="mt-8 font-display text-2xl">{page.youAre}</h3>
          <ul className="peil-list mt-3">
            {page.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5">{page.then}</p>
          <h3 className="mt-8 font-display text-2xl">{page.offerTitle}</h3>
          <ul className="peil-list mt-3">
            {page.offer.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6">{page.apply}</p>
          <p className="mt-4">
            {page.contactLine}{" "}
            <PhoneLink />.
          </p>
          <h2 className="mt-12 font-display text-[clamp(1.8rem,3vw,2.5rem)]">{page.openTitle}</h2>
          <p className="mt-4">{page.open}</p>
        </div>
        <ConceptForm
          email={contact.email}
          subject={page.subject}
          greeting={ui.greeting}
          notice={ui.concept}
          opened={ui.opened}
          errors={{ privacy: ui.privacyRequired, topics: ui.topicsRequired, required: ui.required }}
          privacyBefore="Ik heb de"
          privacyAfter="gelezen."
          submitLabel="Open sollicitatiemail"
          phone={contact.phone}
          phoneHref={`tel:${contact.phoneE164}`}
          fields={[
            { name: "naam", label: "Naam", type: "text", required: true, autoComplete: "name" },
            { name: "telefoon", label: "Telefoon", type: "tel", required: true, autoComplete: "tel" },
            { name: "email", label: "E-mail", type: "email", required: true, autoComplete: "email" },
            { name: "motivatie", label: "Motivatie", type: "textarea", required: true },
          ]}
        />
      </div>
    </>
  );
}
