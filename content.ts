/**
 * De Graaf Hoveniers — seed voor de Sleads-demo.
 * slug "degraaf-demo" is ook data-demo van de analytics-tracker. Niet wijzigen.
 * Geen 60/100 jaar, geen verzonnen eigenaar, geen sterren, niets deployen.
 */
export const content = {
  slug: "degraaf-demo",

  company: {
    name: "De Graaf Hoveniers",
    tagline: "Groencreaties & Onderhoud",
    description:
      "Allround hoveniersbedrijf in Diepenheim voor advies, ontwerp, aanleg en onderhoud van tuinen en groenvoorziening — voor particulieren, bedrijven en overheid. Alles in één hand. Ervaring telt.",
    logo: "/logo.png",
    city: "Diepenheim",
  },

  colors: {
    primary: "#6BCAC1",
    primaryForeground: "#ffffff",
    accent: "#BCDB54",
    background: "#F4F5F1",
    foreground: "#0C0B0C",
    muted: "#E7ECE6",
    ink: "#0C0B0C",
    paper: "#F4F5F1",
    vlak: "#E7ECE6",
    teal: "#6BCAC1",
    tealText: "#1A6E68",
    lime: "#BCDB54",
    bijenGoud: "#A47A17",
  },

  seo: {
    title: "De Graaf Hoveniers | Groencreaties & Onderhoud in Diepenheim",
    description:
      "Conceptwebsite voor De Graaf Hoveniers in Diepenheim: advies, ontwerp, aanleg en onderhoud van tuinen en groenvoorziening. VHG-erkend, VCA-gecertificeerd.",
    lang: "nl",
  },

  nav: [
    { label: "Onze visie", href: "/onze-visie" },
    { label: "Diensten", href: "/diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Bijenhouderij", href: "/bijenhouderij" },
    { label: "Stijl", href: "/stijl" },
    { label: "Vacatures", href: "/vacatures" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Ervaring telt",
    subtitle:
      "Advies, ontwerp, aanleg en onderhoud van tuinen en groenvoorziening, vanuit Diepenheim. Voor particulieren, bedrijven en overheid — alles in één paar handen.",
    primaryCta: { label: "Afspraak of offerte", href: "/offerte" },
    secondaryCta: { label: "Bel 0547 351 354", href: "tel:+31547351354" },
    image: "/img/headers/werk-waar-we-trots-op-zijn.jpg",
    highlights: ["VHG-erkend", "VCA-gecertificeerd", "Alles in één hand"],
  },

  services: {
    title: "Ons vakmanschap voor particulier, bedrijven en overheid",
    intro:
      "Wij bieden u een totaalpakket aan diensten, van advisering en uitvoering bij onderhoudsvraagstukken voor gemeenten en instellingen tot en met het ontwerp, complete aanleg én onderhoud van tuinen voor zowel bedrijfsmatige als particuliere opdrachtgevers. Alles in één hand bovendien.",
    items: [
      { icon: "", title: "Particulier", text: "Advies, ontwerp, aanleg en onderhoud van uw tuin, met één vast aanspreekpunt en een vrijblijvende offerte.", href: "/particulier" },
      { icon: "", title: "Bedrijven", text: "Een verzorgde bedrijfstuin als visitekaartje: nieuwe aanleg, renovatie of onderhoud op contract.", href: "/bedrijven" },
      { icon: "", title: "Overheid", text: "Aanleg en beheer van groene buitenruimtes, met aandacht voor kwaliteit, functionaliteit en kostenbeheersing.", href: "/overheid" },
      { icon: "", title: "Ontwerp", text: "Eigen ontwerpen en realisatie, ook in opdracht van tuin- en landschapsarchitecten. Vrijblijvend advies, transparante offerte.", href: "/ontwerp" },
    ],
  },

  about: {
    title: "Onze visie",
    text: [
      "Groen is onmisbaar in een optimaal leef- en woonklimaat. Voor een juiste inrichting of beheer is kennis van zaken en ervaring nodig — kennis en ervaring die de ontwerpers en hoveniers van De Graaf Hoveniers u vanuit Diepenheim, gemeente Hof van Twente, leveren. Ervaring telt.",
      "En dat bewijzen we al jarenlang door onze vhg-erkenning. Een zekerheid die staat voor betrokkenheid, passie en vakmanschap. Bovendien zijn wij vca-gecertificeerd.",
      "Twentse degelijkheid en nuchterheid gaan bij ons hand in hand met een vriendelijke en duidelijke «afspraak is afspraak».",
    ],
    image: "/img/headers/header-2.jpg",
    stats: [
      { value: "VHG", label: "erkend lid" },
      { value: "VCA", label: "gecertificeerd" },
      { value: "Eén", label: "vast aanspreekpunt" },
    ],
  },

  reviews: {
    title: "",
    items: [] as { name: string; text: string; rating: number }[],
  },

  contact: {
    title: "Contact opnemen",
    text: "Wilt u meer over ons weten, of wilt u een persoonlijk gesprek of een offerte? Bel, mail, of vraag een afspraak aan via uw eigen mailprogramma. Alle verstrekte gegevens beschouwen wij als strikt vertrouwelijk.",
    phone: "0547 351 354",
    phoneE164: "+31547351354",
    email: "info@tdegraaf.nl",
    address: "Oude Sluisweg 5, 7478 RJ Diepenheim",
    openingHours: [] as string[],
    whatsapp: "",
    cta: { label: "Bel 0547 351 354", href: "tel:+31547351354" },
    maps:
      "https://www.google.nl/maps/place/T.+de+Graaf+Tuincentrum+B.V./@52.1818138,6.5584353,15z",
    route: [
      "Ons bedrijf is te vinden net buiten de bebouwde kom van het kunst- en kastelenstadje Diepenheim.",
      "Vanuit Diepenheim richting Neede en Haaksbergen: u rijdt Diepenheim uit richting Neede, neemt de 1e weg rechts, de Reeenkampweg, en rijdt deze helemaal uit. Aan het eind van deze weg ziet u links-voor ons bedrijf.",
      "Vanuit Neede en Haaksbergen richting Diepenheim: ga direct na de Schipbeek (over de brug) links. Deze weg gaat over in een viersprong. Hier neemt u de afslag Oude Sluisweg. Vervolgens vindt u ons aan de linkerzijde.",
    ],
  },

  footer: {
    kvk: "KvK 06034865",
    socials: [
      {
        label: "Foto's op Facebook",
        href: "https://www.facebook.com/pg/De-Graaf-Hoveniers-399224220113655/photos/",
      },
    ] as { label: string; href: string }[],
  },
};

export type Content = typeof content;
