/**
 * De Graaf Hoveniers — seed voor de Sleads-demo.
 * slug "degraaf-demo" is ook data-demo van de analytics-tracker. Niet wijzigen.
 * Geen 60/100 jaar, geen verzonnen eigenaar, geen sterren, niets deployen.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "video"; id: string; title: string };

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  featured?: boolean;
};

const MAIL = "info@tdegraaf.nl";

function photo(
  src: string,
  width: number,
  height: number,
  caption: string,
  alt: string,
  featured = false,
): Photo {
  return { src, alt, caption, width, height, featured };
}

export const content = {
  slug: "degraaf-demo",

  company: {
    name: "De Graaf Hoveniers",
    tagline: "groencreaties & onderhoud",
    logoMark: "Groencreaties & Onderhoud",
    description:
      "Allround hoveniersbedrijf in Diepenheim voor advies, ontwerp, aanleg en onderhoud van tuinen en groenvoorziening — voor particulieren, bedrijven en overheid. Alles in één hand. Ervaring telt.",
    logo: "/logo.png",
    city: "Diepenheim",
    legalNote: "T. de Graaf tuinontwerpbureau bv",
    mapsName: "T. de Graaf Tuincentrum B.V.",
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

  peil: [
    { code: "01", label: "ADVIES" },
    { code: "02", label: "ONTWERP" },
    { code: "03", label: "AANLEG" },
    { code: "04", label: "ONDERHOUD" },
  ],

  nav: [
    { label: "Visie", href: "/onze-visie" },
    { label: "Diensten", href: "/diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Bijenhouderij", href: "/bijenhouderij" },
    { label: "Stijl", href: "/stijl" },
    { label: "Vacatures", href: "/vacatures" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Ervaring telt",
    kicker: "Diepenheim · Hof van Twente",
    subtitle:
      "Advies, ontwerp, aanleg en onderhoud van tuinen en groenvoorziening, vanuit Diepenheim. Voor particulieren, bedrijven en overheid — alles in één paar handen.",
    primaryCta: { label: "Afspraak", href: "/offerte" },
    secondaryCta: { label: "Bel 0547 351 354", href: "tel:+31547351354" },
    image: "/img/headers/werk-waar-we-trots-op-zijn.jpg",
    imageAlt: "Aangelegde tuin met paarse borders, gazon en terras",
    imageWidth: 1638,
    imageHeight: 493,
    imageCaption: "Werk waar we trots op zijn",
    highlights: ["VHG-erkend", "VCA-gecertificeerd", "Alles in één hand"],
  },

  rhythm: {
    title: "Alles in één paar handen",
    lede: "Advies, ontwerp, aanleg en onderhoud lopen bij ons in elkaar over. Hetzelfde aanspreekpunt, van het eerste gesprek tot het groen dat daarna bijgehouden wordt.",
    steps: [
      {
        code: "01",
        title: "Advies",
        level: "28%",
        short: "Een oriënterend gesprek bij ons of bij u, vrijblijvend.",
        text: "Wij heten u welkom aan de Oude Sluisweg, of komen bij u langs. De koffie staat klaar, thee mag ook. U krijgt de ruimte om wensen, eisen en budget te noemen. Het advies en de offerte daarna zijn vrijblijvend.",
      },
      {
        code: "02",
        title: "Ontwerp",
        level: "48%",
        short: "Een tuin op maat, desgewenst met beplantingsplan.",
        text: "Het ontwerp volgt het huis, de omgeving en het budget. Helder, met een evenwichtige verdeling van de ruimte. Wilt u een beplantingsplan, dan hoort daar een namenlijst bij en een indruk van vorm, kleur en geur. Wij ontwerpen zelf, en realiseren ook tekeningen van tuin- en landschapsarchitecten.",
      },
      {
        code: "03",
        title: "Aanleg",
        level: "70%",
        short: "Van schets tot tuin of dakterras, nieuw of gerenoveerd.",
        text: "Wij verzorgen het hele proces: van het eerste schetsontwerp tot de complete realisatie. Dat kan een nieuwe tuin zijn, een dakterras, of de renovatie van wat er al ligt. Beplanting, bestrating en water komen erin waar het ontwerp daarom vraagt.",
      },
      {
        code: "04",
        title: "Onderhoud",
        level: "90%",
        short: "Het hele jaar op contract, of een afgesproken periode.",
        text: "Met een onderhoudscontract blijft het groen het jaar rond verzorgd. Het kan ook korter: een vooraf vastgestelde periode. Eén vast aanspreekpunt, en een vriendelijke, duidelijke afspraak is afspraak.",
      },
    ],
  },

  close: {
    title: "Een gesprek of een offerte",
    text: "Bel, of open een bericht in uw eigen mailprogramma. Vanaf deze conceptsite wordt niets automatisch verstuurd. Het advies en de offerte zijn vrijblijvend.",
  },

  services: {
    title: "Ons vakmanschap voor particulier, bedrijven en overheid",
    intro:
      "Wij bieden u een totaalpakket aan diensten, van advisering en uitvoering bij onderhoudsvraagstukken voor gemeenten en instellingen tot en met het ontwerp, de complete aanleg én het onderhoud van tuinen voor zowel bedrijfsmatige als particuliere opdrachtgevers. Alles in één hand bovendien.",
    promise:
      "Twentse degelijkheid en nuchterheid gaan bij ons hand in hand met een vriendelijke en duidelijke «afspraak is afspraak».",
    items: [
      {
        title: "Particulier",
        text: "Advies, ontwerp, aanleg en onderhoud van uw tuin, met één vast aanspreekpunt en een vrijblijvende offerte. De koffie staat klaar — of de thee, als u dat liever heeft.",
        href: "/particulier",
        level: "38%",
        image: "/img/diensten/particulier.jpg",
        imageAlt: "Tuin met pergola, gazon en een rechthoekige vijver",
        imageWidth: 232,
        imageHeight: 210,
      },
      {
        title: "Bedrijven",
        text: "Een verzorgde bedrijfstuin als visitekaartje: nieuwe aanleg, renovatie of onderhoud op contract. Partner voor facilitaire diensten, woningstichtingen, ziekenhuizen en VvE’s.",
        href: "/bedrijven",
        level: "55%",
        image: "/img/diensten/bedrijven.jpg",
        imageAlt: "Voorbeeld van een bedrijfstuin",
        imageWidth: 233,
        imageHeight: 210,
      },
      {
        title: "Overheid",
        text: "Aanleg en beheer van groene buitenruimtes. Kwaliteit, functionaliteit en kostenbeheersing wegen mee — visuele aantrekkelijkheid alleen is niet genoeg.",
        href: "/overheid",
        level: "72%",
        image: "/img/diensten/overheid.jpg",
        imageAlt: "Voorbeeld van openbaar groen",
        imageWidth: 233,
        imageHeight: 210,
      },
      {
        title: "Ontwerp",
        text: "Eigen ontwerpen en realisatie, ook in opdracht van tuin- en landschapsarchitecten. Vrijblijvend advies en een gespecificeerde offerte, met één aanspreekpunt.",
        href: "/ontwerp",
        level: "88%",
        image: "/img/diensten/ontwerp.jpg",
        imageAlt: "Hand bij een ingekleurde ontwerptekening van een tuin",
        imageWidth: 233,
        imageHeight: 210,
      },
    ],
  },

  about: {
    title: "Onze visie",
    lede: "Groen is onmisbaar in een optimaal leef- en woonklimaat. Ervaring telt — en dat laten we al jaren zien met onze VHG-erkenning.",
    text: [
      "Voor een juiste inrichting of beheer is kennis van zaken en ervaring nodig. Kennis en ervaring die de ontwerpers en hoveniers van De Graaf Hoveniers u vanuit Diepenheim, gemeente Hof van Twente, leveren. Ervaring telt.",
      "Twentse degelijkheid en nuchterheid gaan bij ons hand in hand met een vriendelijke en duidelijke «afspraak is afspraak».",
    ],
    image: "/img/headers/header-2.jpg",
    imageAlt: "Tuin met pergola, bloemen en uitzicht op het landschap",
    imageWidth: 1642,
    imageHeight: 456,
  },

  contact: {
    title: "Contact opnemen",
    text: "Wilt u meer over ons weten, of wilt u een persoonlijk gesprek of een offerte? Bel, mail, of vraag een afspraak aan via uw eigen mailprogramma. Alle verstrekte gegevens beschouwen wij als strikt vertrouwelijk. Er wordt vanaf deze conceptsite niets automatisch verstuurd.",
    phone: "0547 351 354",
    phoneE164: "+31547351354",
    email: MAIL,
    address: "Oude Sluisweg 5, 7478 RJ Diepenheim",
    street: "Oude Sluisweg 5",
    postal: "7478 RJ Diepenheim",
    kvk: "06034865",
    maps: "https://www.google.nl/maps/place/T.+de+Graaf+Tuincentrum+B.V./@52.1818138,6.5584353,15z/data=!4m5!3m4!1s0x0:0xcb7385868398c35b!8m2!3d52.1818138!4d6.5584353",
    mapsLabel: "Vind ons",
    place:
      "Ons bedrijf is te vinden net buiten de bebouwde kom van het kunst- en kastelenstadje Diepenheim.",
    directions: [
      {
        from: "Vanuit Diepenheim richting Neede en Haaksbergen",
        text: "Diepenheim uit richting Neede, de 1e weg rechts de Reeenkampweg, deze helemaal uit. Aan het eind links-voor het bedrijf.",
      },
      {
        from: "Vanuit Neede en Haaksbergen richting Diepenheim",
        text: "Direct na de Schipbeek (over de brug) links. De weg gaat over in een viersprong. Afslag Oude Sluisweg. Vervolgens aan de linkerzijde.",
      },
    ],
    image: "/img/headers/contact.jpg",
    imageAlt: "Hovenier op een compacttractor tussen jonge aanplant",
    imageWidth: 1642,
    imageHeight: 456,
  },

  keurmerken: [
    {
      name: "VHG",
      label: "Erkend lid VHG",
      text: "VHG-erkend",
      href: "http://www.vhg.org/",
      src: "/img/keurmerken/vhg.png",
      width: 136,
      height: 54,
    },
    {
      name: "VCA",
      label: "Erkend lid VCA",
      text: "VCA-gecertificeerd",
      href: "https://www.vca.nl/",
      src: "/img/keurmerken/vca.png",
      width: 136,
      height: 75,
    },
  ],

  footer: {
    kvk: "KvK 06034865",
    voorwaarden: {
      label: "Algemene voorwaarden op de huidige website",
      href: "https://tdegraaf.nl/algemene-voorwaarden.php",
    },
    socials: [
      {
        label: "Foto’s op Facebook",
        href: "https://www.facebook.com/pg/De-Graaf-Hoveniers-399224220113655/photos/",
      },
    ],
  },

  ui: {
    menu: "Menu",
    close: "Sluiten",
    call: "Bellen",
    quote: "Offerte",
    readMore: "Lees verder",
    allProjects: "Alle voorbeelden",
    examples: "Enkele voorbeelden van groenvoorziening",
    enlarge: "Vergroot",
    previous: "Vorige",
    next: "Volgende",
    skip: "Naar inhoud",
    concept:
      "Dit is een concept; uw eigen mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd.",
    kickers: {
      visie: "Ervaring telt",
      diensten: "Alles in één hand",
      particulier: "Uw tuin",
      bedrijven: "Visitekaartje",
      overheid: "Openbare ruimte",
      ontwerp: "Op maat",
      projecten: "Werk waar we trots op zijn",
      bijen: "Bevruchting",
      stijl: "Moodboard",
      vacatures: "Diepenheim",
      contact: "Oude Sluisweg",
      offerte: "Vrijblijvend",
      privacy: "Uw gegevens",
    },
    opened:
      "Uw mailprogramma zou nu moeten openen met het bericht. Er is niets automatisch verstuurd.",
    privacyRequired: "Vink de privacyverklaring aan om verder te gaan.",
    topicsRequired: "Kies minstens één onderwerp.",
    required: "Vul de verplichte velden in.",
    greeting: "Goedendag,",
  },

  projects: {
    title: "Projecten",
    lede: "Enkele voorbeelden van groenvoorziening, op deze site gegroepeerd per soort werk. Bij de foto’s staat geen projectnaam, straat of jaar: die gegevens staan ook op de huidige website niet bij deze beelden.",
    facebookNote: "Een aanvullende reeks foto’s staat op Facebook. De galerij hierboven is de verzameling op deze conceptsite.",
    groups: [
      {
        id: "particulier",
        title: "Particulier",
        lede: "Tuinen bij woonhuizen. Geen projectnaam of plaats bij deze foto’s.",
        href: "/particulier",
        photos: [
          ["particulier-1516894241.jpg", true],
          ["particulier-1516894854.jpg", false],
          ["particulier-1516895318.jpg", false],
          ["particulier-1516895327.jpg", false],
          ["particulier-1516895331.jpg", false],
          ["particulier-1516895337.jpg", false],
          ["particulier-1516895349.jpg", false],
          ["particulier-1516895354.jpg", false],
        ].map(([file, featured]) =>
          photo(
            `/img/projecten/particulier/${file}`,
            1280,
            960,
            "Particuliere tuin",
            "Particuliere tuin",
            featured === true,
          ),
        ),
      },
      {
        id: "bedrijven",
        title: "Bedrijven",
        lede: "Groen rond kantoren en bedrijfsruimten.",
        href: "/bedrijven",
        photos: [
          photo(
            "/img/projecten/bedrijven/bedrijven-1516971252.jpg",
            1280,
            960,
            "Bedrijfstuin",
            "Bedrijfstuin",
            true,
          ),
          photo(
            "/img/projecten/bedrijven/bedrijven-1515502322.jpg",
            1200,
            1600,
            "Bedrijfstuin",
            "Bedrijfstuin",
          ),
        ],
      },
      {
        id: "overheid",
        title: "Overheid",
        lede: "Openbaar groen en het beheer van buitenruimte.",
        href: "/overheid",
        photos: [
          "overheid-1516895481.jpg",
          "overheid-1516966784.jpg",
          "overheid-1516966788.jpg",
          "overheid-1516966792.jpg",
          "overheid-1516969165.jpg",
          "overheid-1516969170.jpg",
          "overheid-1516969175.jpg",
          "overheid-1516969180.jpg",
        ].map((file, i) =>
          photo(
            `/img/projecten/overheid/${file}`,
            1280,
            960,
            "Openbaar groen",
            "Openbaar groen",
            i === 0,
          ),
        ),
      },
      {
        id: "ontwerp",
        title: "Ontwerp",
        lede: "Ontwerptekeningen en een foto uit het eigen werk.",
        href: "/ontwerp",
        photos: [
          photo(
            "/img/projecten/ontwerp/ontwerp-1516981462.jpg",
            705,
            960,
            "Tuinontwerp",
            "Foto bij een tuinontwerp",
          ),
          ...[
            ["ontwerp-1520455624.png", 1280, 905],
            ["ontwerp-1520456479.png", 1273, 900],
            ["ontwerp-1520456486.png", 1273, 900],
            ["ontwerp-1520456493.png", 1273, 900],
            ["ontwerp-1520456502.png", 1273, 900],
            ["ontwerp-1520456509.png", 1272, 900],
            ["ontwerp-1520456517.png", 1273, 900],
            ["ontwerp-1520456526.png", 1273, 900],
            ["ontwerp-1520456531.png", 1273, 900],
            ["ontwerp-1520456536.png", 1273, 900],
            ["ontwerp-1520456543.png", 1273, 900],
            ["ontwerp-1520456549.png", 1273, 900],
            ["ontwerp-1520456558.png", 1273, 900],
            ["ontwerp-1520456565.png", 1273, 900],
          ].map(([file, w, h], i) =>
            photo(
              `/img/projecten/ontwerp/${file}`,
              w as number,
              h as number,
              "Tuinontwerp",
              "Ontwerptekening van een tuin",
              i === 0,
            ),
          ),
        ],
      },
    ],
  },

  pages: {
    visie: {
      title: "Onze visie",
      description:
        "Visie van De Graaf Hoveniers in Diepenheim: groen voor elk jaargetijde, een tuinontwerp op maat en een droomtuin voor elk budget.",
      image: "/img/headers/header-2.jpg",
      imageAlt: "Tuin met pergola, bloemen en uitzicht op het landschap",
      imageWidth: 1642,
      imageHeight: 456,
      blocks: [
        {
          type: "p",
          text: "Groen is onmisbaar in een optimaal leef- en woonklimaat. Voor een juiste inrichting of beheer is kennis van zaken en ervaring nodig. Kennis en ervaring die de ontwerpers en hoveniers van De Graaf Hoveniers – groencreaties & onderhoud – u vanuit Diepenheim, gemeente Hof van Twente, leveren en die garant staan voor kwaliteit: ervaring télt. En dat bewijzen we al jarenlang door onze VHG-erkenning. Een zekerheid die staat voor betrokkenheid, passie en vakmanschap.",
        },
        { type: "h2", text: "Boeiend in elk jaargetijde" },
        {
          type: "p",
          text: "Een tuin moet u telkens weer kunnen boeien. En niet alléén gedurende de vier jaargetijden, maar ook nog na vijf of tien jaar. Met een gevoel voor sfeer en oog voor detail leggen wij de basis voor vele jaren tuinplezier, waarmee u blijvend kunt genieten van een alsmaar mooier wordende tuin. Onze heldere ontwerpen kenmerken zich door harmonie en een evenwichtige verdeling van de beschikbare ruimte. Niet alleen met planten en andere materialen, zoals bestratingen en waterpartijen, maar ook met vluchtiger elementen zoals licht, schaduw en ruimte wordt in het creatieve proces een origineel resultaat als doel gesteld.",
        },
        {
          type: "p",
          text: "Al deze factoren maken het ontwerpproces zowel spannend als uitdagend. Uitgangspunt daarbij is de wisselwerking met u als opdrachtgever. Nadat we uw wensen, eisen en budget hebben geïnventariseerd, creëren we een uitgebalanceerde tuin. Uiteraard aangepast aan uw wensen, de stijl van het huis en de omgeving.",
        },
        { type: "h2", text: "Uw tuin is een afspiegeling van uw ziel" },
        {
          type: "p",
          text: "Een tuin is een afspiegeling van uw ziel: het laat wat van uw persoonlijkheid zien. Vaak is het een verlengstuk van de sfeer die u binnenshuis heeft gecreëerd. Of het is een passend en gewenst totaal in uw woonomgeving. Modern, klassiek of een mengeling van passende stijlen.",
        },
        {
          type: "p",
          text: "Maar hoe u uw tuin ook in wilt richten: voor een aansluiting van uw binnen- en buitenbeleving kunt u gebruik maken van onze expertise en jarenlange ervaring. We hebben ons ontwikkeld tot een allround hoveniersbedrijf dat uw persoonlijke wensen omzet in verrassende tuinontwerpen. Onze ontwerpers hebben ruime ervaring in het maken van passende ontwerpen voor elk budget, terwijl ons vakkundig personeel zorgt voor een vlotte realisatie. En met een onderhoudscontract bent u verder verzekerd van jarenlang tuinplezier.",
        },
        { type: "h2", text: "Een droomtuin voor elk budget" },
        {
          type: "p",
          text: "Bent u als tuinbezitter op zoek naar een originele inrichting van uw tuin of dakterras? De Graaf realiseert uw droomtuin. Voor iedere situatie en elk budget zijn er mogelijkheden. Wij verzorgen het gehele proces: van het eerste schetsontwerp tot en met de complete realisatie. Onze heldere tuinontwerpen kenmerken zich door eenvoud en doordachte duurzaamheid. En natuurlijk kunt u ook bij ons terecht voor renovatie of onderhoud van uw bestaande tuin.",
        },
        { type: "h2", text: "Een tuinontwerp op maat" },
        {
          type: "p",
          text: "Onze tuinarchitecten vertalen uw ideeën naar een tuinontwerp op maat. De Graaf streeft naar ontwerpen waarbij u zich prettig voelt en die een krachtige en logische verbinding hebben tussen tuin, woonhuis en omgeving, zodat deze elkaar aanvullen en versterken.",
        },
        {
          type: "p",
          text: "Hieronder vindt u een korte filmische impressie van dertig seconden. De film start niet vanzelf.",
        },
        {
          type: "video",
          id: "P11r7dzVClc",
          title: "Filmische impressie van De Graaf Hoveniers, dertig seconden",
        },
        { type: "h2", text: "Alles in één paar handen" },
        {
          type: "p",
          text: "De Graaf Hoveniers – groencreaties & onderhoud – is een allround hoveniersbedrijf waar u terecht kunt voor advies, ontwerp, aanleg én onderhoud van tuinen en alle soorten groenvoorziening.",
        },
        {
          type: "p",
          text: "Vanuit Diepenheim staan wij garant voor kwaliteit. Dat bewijzen we al jarenlang door onze VHG-erkenning. Een zekerheid die staat voor betrokkenheid, passie en vakmanschap. Bovendien zijn wij VCA-gecertificeerd.",
        },
      ] as Block[],
    },

    diensten: {
      title: "Diensten",
      description:
        "Totaalpakket van De Graaf Hoveniers: advies, ontwerp, aanleg en onderhoud voor particulieren, bedrijven en overheid.",
      image: "/img/headers/header-3.jpg",
      imageAlt: "Twee hoveniers leggen een groendak aan",
      imageWidth: 1642,
      imageHeight: 456,
    },

    particulier: {
      title: "Particulier",
      documentTitle: "Particulier | T. de Graaf tuinontwerpbureau bv",
      description:
        "Tuinontwerp, beplantingsplan, aanleg en onderhoud voor particulieren. Eén aanspreekpunt en een vrijblijvende offerte.",
      image: "/img/headers/werk-waar-we-trots-op-zijn2.jpg",
      imageAlt: "Hovenier plant een boom in een plantgat",
      imageWidth: 1638,
      imageHeight: 496,
      blocks: [
        {
          type: "p",
          text: "Groen is onmisbaar in een optimaal leef- en woonklimaat. Voor een juiste inrichting of beheer is kennis van zaken en ervaring nodig. De Graaf Hoveniers – groencreaties & onderhoud – is een allround hoveniersbedrijf waar u terecht kunt voor advies, ontwerp, aanleg én onderhoud van uw tuin en andere groenvoorzieningen. Door onze expertise, kennis en jarenlange ervaring zijn we uw partner voor groenaanleg en groenonderhoud. Naast particuliere opdrachtgevers werken wij onder meer voor bedrijven, instellingen en facilitaire diensten.",
        },
        { type: "h2", text: "De ontwerpfase" },
        {
          type: "p",
          text: "De tuin is een verlengstuk van uw woonhuis en hangt sterk af van uw persoonlijke behoeften en wensen. U wilt hierin tot rust komen en van uw eigen stuk natuur genieten. Een geslaagd tuinontwerp heeft alles te maken met het inrichten en verdelen van de beschikbare ruimte, met inachtneming van uw wensen. Uitgangspunt is de wisselwerking met u als opdrachtgever. Om die ruimte krachtig en logisch in te richten houden wij onder andere rekening met:",
        },
        {
          type: "ul",
          items: [
            "de gewenste stijl, structuur en inhoud",
            "grondtechnische problemen en passende oplossingen",
            "de omgeving",
            "trends en ontwikkelingen",
            "uw eisen en wensen, inclusief verlichtings- en beregeningsadvies",
            "onderhoud en nazorg",
          ],
        },
        { type: "h2", text: "Het beplantingsplan" },
        {
          type: "p",
          text: "U kunt in combinatie met een ontwerptekening of apart een beplantingsplan laten maken. Naast een tekening krijgt u dan een namenlijst van alle planten en een impressie van vorm, kleur en geur. Door verschillende plantencombinaties arrangeren wij de tuin tot de gewenste stijl. Hierbij houden we rekening met de bodemgesteldheid, de gewenste kleurstellingen en uw wensen over de mate van onderhoud. Met een overzichtelijk beplantingsplan zorgen wij ervoor dat de beplanting zich jarenlang kan ontwikkelen en in de gewenste stijl en vorm kan uitgroeien.",
        },
        { type: "h2", text: "Vrijblijvend advies" },
        {
          type: "p",
          text: "De koffie staat klaar. Of heeft u liever thee? Wij heten u graag welkom op ons bedrijf voor een oriënterend gesprek of komen, op verzoek, bij u aan huis. Tijdens dit gesprek krijgt u alle ruimte om uw wensen kenbaar te maken, zodat wij u daarna goed en geheel vrijblijvend kunnen adviseren. U ontvangt een duidelijke, vrijblijvende offerte met de kosten voor het tuinontwerp, de daaropvolgende tuinaanleg en eventueel terugkerend onderhoud.",
        },
        { type: "h2", text: "Persoonlijk contact" },
        {
          type: "p",
          text: "Bij De Graaf Hoveniers zijn de communicatielijnen kort. U heeft als klant steeds één en dezelfde contactpersoon als vast aanspreekpunt: dat bevordert een duidelijke communicatie en een goede samenwerking. Wij kiezen voor maatwerk. Elk project staat op zich. Vakmanschap, passie voor groen en zorg tot in detail staan daarbij centraal.",
        },
        {
          type: "p",
          text: "De Graaf Hoveniers staat garant voor kwaliteit: ervaring telt. Dat bewijzen we al jaren door onze VHG-erkenning, een zekerheid die staat voor betrokkenheid, passie en vakmanschap. Daarnaast zijn wij VCA-gecertificeerd.",
        },
        { type: "h2", text: "Handig voor het gesprek" },
        {
          type: "p",
          text: "U hoeft niets voor te bereiden. Het helpt wel als u alvast weet wat u belangrijk vindt. Dezelfde punten nemen wij mee in het ontwerp:",
        },
        {
          type: "ul",
          items: [
            "hoe u de tuin wilt gebruiken: zitten, spelen, eten, opbergen",
            "de stijl die bij het huis past, of een mengeling",
            "hoeveel onderhoud u zelf wilt doen",
            "of verlichting, water of een dakterras meedoet",
            "het budget waar de offerte binnen moet blijven",
          ],
        },
      ] as Block[],
    },

    bedrijven: {
      title: "Bedrijven",
      description:
        "Bedrijfstuinen als visitekaartje: aanleg, renovatie en onderhoudscontracten voor bedrijven, VvE’s en instellingen.",
      image: "/img/headers/header-1.jpg",
      imageAlt: "Twee hoveniers werken aan beplanting bij de entree van een gebouw",
      imageWidth: 1642,
      imageHeight: 456,
      blocks: [
        { type: "h2", text: "Een bedrijfstuin is ook een visitekaartje" },
        {
          type: "p",
          text: "De ruimte rond een kantoor of bedrijfsruimte is ook een visitekaartje voor uw bedrijf. Een eerste indruk maakt u maar één keer. Een verzorgde buitenruimte geeft uw bedrijf allure en heeft een positieve invloed op bezoekers en medewerkers. Wij bieden u een totaalconcept bij de inrichting en het onderhoud van uw bedrijfstuin.",
        },
        {
          type: "p",
          text: "Of het nu gaat om de volledig nieuwe aanleg of de renovatie van een bestaande bedrijfstuin: De Graaf is uw groene partner. Op basis van een onderhoudscontract zorgen wij voor het onderhoud, zodat u het hele jaar verzekerd bent van verzorgd groen. Ook voor uw onderneming kan in overleg een toegesneden pakket worden samengesteld.",
        },
        { type: "h2", text: "Aanspreekpunt voor facilitaire diensten en instellingen" },
        {
          type: "p",
          text: "Voor woningstichtingen, ziekenhuizen en verenigingen van eigenaren is De Graaf een ervaren partner voor het beheer van de groene buitenruimte. Wij kunnen het complete groenonderhoud op basis van een meerjarig contract verzorgen, of uw facilitaire dienst adviseren over efficiënt beheer en kostenbeheersing. Deze werkzaamheden kunnen in een meerjarig contract of in een kortstondige, vooraf vastgestelde periode worden vastgelegd.",
        },
        { type: "h2", text: "Kortstondig of op contract" },
        {
          type: "p",
          text: "Naast kortstondige groenwerkzaamheden is alles ook op contractbasis te realiseren. Onze jarenlange ervaring komt tot uiting in vakkundige en correcte aanbevelingen, in de particuliere én de bedrijfsmatige markt: bij architectenbureaus, bouwondernemingen, gemeenten, facilitaire instellingen, makelaars, projectontwikkelaars en parkbeheer.",
        },
        {
          type: "p",
          text: "Wij bieden u een totaalpakket: van advisering en uitvoering bij onderhoudsvraagstukken voor gemeenten en instellingen tot en met de complete aanleg én het onderhoud van bedrijfstuinen en andere groenvoorzieningen. Voor het groen van gemeenten en openbare ruimte verwijzen wij u ook naar de pagina Overheid.",
        },
        { type: "h2", text: "Voor wie" },
        {
          type: "p",
          text: "De opdrachtgevers in de bedrijfsmatige markt zijn onder meer:",
        },
        {
          type: "ul",
          items: [
            "facilitaire diensten en instellingen",
            "woningstichtingen en verenigingen van eigenaren",
            "ziekenhuizen",
            "architectenbureaus en bouwondernemingen",
            "makelaars en projectontwikkelaars",
            "gemeenten en parkbeheer",
          ],
        },
      ] as Block[],
    },

    overheid: {
      title: "Overheid",
      description:
        "Aanleg en beheer van openbaar groen voor gemeenten en bedrijventerreinen, met aandacht voor kwaliteit, functionaliteit en kosten.",
      image: "/img/headers/header-4.jpg",
      imageAlt: "Hovenier maait gras met een compacttractor",
      imageWidth: 1642,
      imageHeight: 456,
      blocks: [
        {
          type: "p",
          text: "Het groen in gemeenten en op bedrijventerreinen is steeds vaker beeldbepalend. Voor een goed totaalbeeld is het belangrijk om hier efficiënte zorg aan te besteden.",
        },
        {
          type: "quote",
          text: "Visuele aantrekkelijkheid is vandaag de dag niet meer voldoende",
        },
        {
          type: "p",
          text: "Kwaliteit, functionaliteit en kostenbeheersing zijn belangrijke kernpunten bij de aanleg en het beheer van buitenruimtes. Niet alleen wat betreft beheer en onderhoud, maar ook op planmatig en aanlegniveau is De Graaf uw ervaren en ter zake kundige partner. Wij adviseren u graag over uw mogelijkheden.",
        },
        {
          type: "ul",
          items: [
            "aanleg van groene buitenruimtes, van plan tot uitvoering",
            "beheer en onderhoud, kort of in een meerjarig contract",
            "advies aan facilitaire diensten over efficiëntie en kosten",
            "één aanspreekpunt voor de hele opdracht",
          ],
        },
        {
          type: "p",
          text: "De Graaf Hoveniers is VHG-erkend en VCA-gecertificeerd. Afspraak is afspraak: een heldere opdracht, één aanspreekpunt en uitvoering waar u op kunt rekenen. Het groen van een gemeente of bedrijventerrein vraagt dezelfde zorg als een tuin, alleen het peil ligt anders: beeld, gebruik en kosten tegelijk.",
        },
      ] as Block[],
    },

    ontwerp: {
      title: "Ontwerp",
      description:
        "Tuinontwerp en realisatie door De Graaf Hoveniers, ook voor tuin- en landschapsarchitecten. Vrijblijvend advies en een gespecificeerde offerte.",
      blocks: [
        { type: "h2", text: "Samenwerking met architecten, makelaars en projectontwikkelaars" },
        {
          type: "p",
          text: "Naast eigen ontwerpen realiseert De Graaf ook in opdracht van tuin- en landschapsarchitecten (bedrijfs)tuinen en groenvoorzieningen. Door samenwerking met onze, uw eigen of extern ingehuurde specialisten bent u verzekerd van een originele, vakkundige én kostenbewuste inrichting van uw groene buitenruimte. Wij adviseren u graag over uw mogelijkheden.",
        },
        { type: "h2", text: "Vrijblijvend advies" },
        {
          type: "p",
          text: "Wij heten u graag welkom op ons bedrijf voor een oriënterend gesprek, of komen bij u langs. U krijgt alle ruimte om uw wensen kenbaar te maken, zodat wij u daarna goed en geheel vrijblijvend kunnen adviseren. U ontvangt een duidelijke, geheel vrijblijvende offerte met een volledig gespecificeerd en transparant kostenoverzicht.",
        },
        { type: "h2", text: "Eén vast aanspreekpunt" },
        {
          type: "p",
          text: "Bij De Graaf zijn de communicatielijnen kort. U heeft steeds één en dezelfde contactpersoon als vast aanspreekpunt. Dat bevordert een duidelijke communicatie en een goede samenwerking. Wij kiezen voor maatwerk. Elk project staat op zich. Vakmanschap, passie voor groen en zorg tot in detail staan daarbij centraal.",
        },
        { type: "h2", text: "Gepassioneerde hoveniers" },
        {
          type: "p",
          text: "De Graaf is een allround hoveniersbedrijf waar u terecht kunt voor advies, ontwerp, aanleg én onderhoud van bedrijfstuinen en andere groenvoorzieningen. Door onze expertise, kennis en jarenlange ervaring zijn we uw partner voor groenaanleg en groenonderhoud. Onze opdrachtgevers zijn bedrijven, instellingen, facilitaire diensten en particulieren.",
        },
        {
          type: "p",
          text: "Hieronder staan ontwerptekeningen en een foto uit het eigen werk. Het zijn voorbeelden, zonder projectnaam of plaatsaanduiding. De tekeningen blijven tekeningen: ze zijn het werk, niet de vormgeving van deze site.",
        },
        { type: "h2", text: "Wat u ontvangt" },
        {
          type: "ul",
          items: [
            "een oriënterend gesprek, bij ons of bij u",
            "een ontwerp dat tuin, woonhuis en omgeving met elkaar verbindt",
            "desgewenst een beplantingsplan met namenlijst",
            "een vrijblijvende offerte met een gespecificeerd kostenoverzicht",
            "tijdens de aanleg steeds dezelfde contactpersoon",
          ],
        },
      ] as Block[],
    },

    bijen: {
      title: "Bijenhouderij",
      description:
        "De Graaf Hoveniers heeft een bijenhouderij. Bloemen en planten kunnen niet zonder bijen die voor bevruchting zorgen.",
      image: "/img/headers/header-5.jpg",
      imageAlt: "Honingbij op witte bloemen",
      imageWidth: 1624,
      imageHeight: 465,
      blocks: [
        {
          type: "p",
          text: "Bloemen en planten kunnen niet zonder bijen die voor bevruchting zorgen. Ons bedrijf heeft dan ook een bijenhouderij.",
        },
        {
          type: "p",
          text: "Bent u geïnteresseerd in de bijenhouderij? Kijk dan ook op de website van de Nederlandse Bijenhouders Vereniging.",
        },
        {
          type: "p",
          text: "De bijen horen bij het bedrijf, net buiten de bebouwde kom van Diepenheim. De foto’s staan hier op de grootte van het bestand, niet opgeblazen tot een vlak. Het zijn beelden van de bijenhouderij, zonder verdere benaming.",
        },
      ] as Block[],
      association: {
        label: "Nederlandse Bijenhouders Vereniging",
        href: "http://www.bijenhouders.nl/",
      },
      photos: [
        photo("/img/bijen/bijen-1515492232.png", 240, 320, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515492242.png", 240, 320, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515492307.png", 240, 320, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515492333.png", 240, 320, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515496942.png", 240, 240, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515497031.jpg", 240, 240, "Bijenhouderij", "Foto van de bijenhouderij"),
        photo("/img/bijen/bijen-1515500742.jpg", 240, 320, "Bijenhouderij", "Foto van de bijenhouderij"),
      ],
    },

    stijl: {
      title: "Kies je eigen stijl",
      description:
        "De acht vragen en zes stijlen van de moodboardgenerator van De Graaf Hoveniers. De generator zelf staat op hun huidige website.",
      intro:
        "Op de huidige website van De Graaf Hoveniers staat een moodboardgenerator onder de naam «Kies je eigen stijl». U beantwoordt daar acht vragen, kiest onderdelen en kunt een opmerking of een link naar een eigen verzameling toevoegen, bijvoorbeeld Pinterest. De generator stuurt die keuze naar het bedrijf; zij nemen daarna contact op.",
      concept:
        "Deze pagina is een concept. De generator wordt hier niet nagebouwd en er wordt vanaf deze pagina niets opgestuurd. Voor de echte stijlkeuze gebruikt u de generator op de huidige website.",
      tool: {
        label: "Open de generator op tdegraaf.nl",
        href: "https://tdegraaf.nl/moodboard.php",
      },
      styles: [
        {
          name: "Landelijk",
          ...photo(
            "/img/stijl/antwoord-2-1500981785.jpg",
            406,
            406,
            "Landelijk",
            "Landelijke tuin bij een boerderij met rieten dak",
          ),
        },
        {
          name: "Strak of recht",
          ...photo(
            "/img/stijl/antwoord-3-1500981826.jpg",
            406,
            406,
            "Strak of recht",
            "Strakke tuin met een witte wand, water en lavendel",
          ),
        },
        {
          name: "Modern",
          ...photo(
            "/img/stijl/antwoord-1-1500981808.jpg",
            406,
            406,
            "Modern",
            "Moderne tuin met gazon, leivormen en een terras",
          ),
        },
        {
          name: "Ronde vormen",
          ...photo(
            "/img/stijl/antwoord-9-1500981837.jpg",
            406,
            406,
            "Ronde vormen",
            "Bestrating van gebakken klinkers met een ronde lijn",
          ),
        },
        {
          name: "Oosters",
          ...photo(
            "/img/stijl/antwoord-10-1500981858.jpg",
            406,
            407,
            "Oosters",
            "Oosterse tuin met lantaarn, grind en rotsen",
          ),
        },
        {
          name: "Natuurlijk",
          ...photo(
            "/img/stijl/antwoord-11-1500981886.jpg",
            406,
            407,
            "Natuurlijk",
            "Natuurlijke vijver met oeverplanten en waterlelies",
          ),
        },
      ],
      questions: [
        {
          n: "01",
          title: "Heeft u een voorkeur voor een bepaalde stijl?",
          options: ["Landelijk", "Strak of recht", "Modern", "Ronde vormen", "Oosters", "Natuurlijk"],
        },
        {
          n: "02",
          title: "Wat voor soort verharding wilt u in de tuin?",
          options: [
            "Betonklinkers",
            "Betontegels",
            "Geosteen",
            "Grind of split",
            "Gebakken klinkers",
            "Keramische tegels",
            "Natuursteen",
            "Houten vlonder",
          ],
        },
        {
          n: "03",
          title: "Wilt u groen in de tuin?",
          options: [
            "Bomen",
            "Hagen",
            "Klimplanten",
            "Vaste planten",
            "Bodembedekkers",
            "Fruit en kruiden",
            "Leibomen",
            "Siergrassen",
            "Gazon",
            "Kunstgras",
          ],
        },
        {
          n: "04",
          title: "Wilt u water in de tuin?",
          options: [
            "Natuurlijke vijver",
            "Waterbak met brievenbus",
            "Zwemvijver",
            "Waterspiegel",
            "Waterelement",
            "Watergoot",
            "Zwembad",
            "Jacuzzi of hot tub",
          ],
        },
        {
          n: "05",
          title: "Wilt u graag hoogte-elementen in de tuin?",
          options: [
            "Verhoogde borders",
            "Trappen",
            "Plantenbakken",
            "Potten",
            "Pergola",
            "Muren en wanden",
            "Bomen",
            "Hagen",
          ],
        },
        {
          n: "06",
          title: "Wilt u een overdekt terras?",
          options: ["Veranda", "Schaduwdoek", "Dakbomen", "Parasol", "Open berging", "Dichte berging"],
        },
        {
          n: "07",
          title: "Wilt u verlichting in de tuin?",
          options: ["Spots", "Grondspots", "Wandlampen", "Staande lampen", "Maatwerk", "Hangend"],
        },
        {
          n: "08",
          title: "Wilt u extra sfeer toevoegen?",
          options: [
            "Openhaard",
            "BBQ of buitenkeuken",
            "Bankjes",
            "Sokkels en kunst",
            "Potten",
            "Fakkels",
            "Decoratie",
            "Sprekende kleuren",
          ],
        },
      ],
    },

    vacatures: {
      title: "Vacatures",
      description:
        "De Graaf Hoveniers in Diepenheim zoekt een hovenier met passie. Fulltime, marktconform salaris. Open sollicitatie welkom.",
      image: "/img/headers/header-1.jpg",
      imageAlt: "Twee hoveniers werken aan beplanting bij de entree van een gebouw",
      imageWidth: 1642,
      imageHeight: 456,
      intro:
        "De Graaf Hoveniers – groencreaties & onderhoud – in Diepenheim is een allround hoveniersbedrijf dat een totaalpakket aan diensten biedt. Van advisering en uitvoering bij onderhoudsvraagstukken voor gemeenten en instellingen tot het ontwerp, de complete aanleg en het onderhoud van tuinen voor zowel bedrijfsmatige als particuliere opdrachtgevers. We staan garant voor kwaliteit, betrokkenheid, passie en vakmanschap.",
      role: "Hovenier met passie",
      youAre: "Ben jij diegene die:",
      requirements: [
        "een vakbekwaam hovenier is (of de ambitie hebt om dit te worden)",
        "een mbo-diploma heeft in het groen (niveau 3)",
        "een VCA-certificaat heeft",
        "in het bezit is van een rijbewijs (rijbewijs BE is een pré)",
        "klantgericht, betrokken, enthousiast en gemotiveerd is",
        "zowel zelfstandig als in teamverband kan werken",
        "een flexibele werkhouding heeft",
        "passie heeft voor het hoveniersvak",
      ],
      then: "Dan zijn we op zoek naar jou.",
      offerTitle: "Wat bieden wij",
      offer: [
        "een leuk team van hoveniers",
        "afwisselend werk",
        "een dienstverband op basis van fulltime",
        "een marktconform salaris",
        "een mogelijkheid tot het behalen van certificaten",
      ],
      apply:
        "Interesse? Stuur dan je cv en motivatie naar info@tdegraaf.nl. Voeg het cv toe als bijlage in je eigen mailprogramma; vanaf deze conceptpagina kunnen wij geen bestand meesturen.",
      contactLine: "Wil je meer informatie, bel dan naar Sas Haan,",
      contactName: "Sas Haan",
      openTitle: "Open sollicitatie",
      open: "Je kunt ons altijd per mail een open sollicitatie sturen. Vertel ons wat jij bij ons wilt gaan doen en motiveer waarom wij jou nodig hebben. Wij staan altijd open voor een gesprek.",
      subject: "Sollicitatie hovenier met passie",
      placeNote:
        "Je werkt vanuit Diepenheim, aan de Oude Sluisweg, in de gemeente Hof van Twente. Het werk wisselt: particuliere tuinen, bedrijventerreinen en openbaar groen, van advies tot onderhoud.",
    },

    offerte: {
      title: "Afspraak of offerte",
      description:
        "Vraag een afspraak of offerte aan bij De Graaf Hoveniers. Uw mailprogramma opent met het bericht; er wordt niets automatisch verstuurd.",
      subject: "Afspraak of offerte via website",
      lede: "Goedendag. Vertel kort waar het over gaat. Daarna opent uw mailprogramma; u verstuurt het bericht zelf. Wij bellen of mailen terug voor een oriënterend gesprek.",
      steps: [
        {
          code: "01",
          title: "Uw bericht",
          text: "Het formulier zet een leesbare samenvatting klaar. Er gaat niets naar een server.",
        },
        {
          code: "02",
          title: "Het gesprek",
          text: "Bij ons aan de Oude Sluisweg, of bij u thuis. Koffie of thee, en de ruimte voor uw wensen.",
        },
        {
          code: "03",
          title: "De offerte",
          text: "Duidelijk en vrijblijvend. Bij ontwerp en aanleg met een gespecificeerd kostenoverzicht.",
        },
      ],
      topics: [
        { value: "particulier", label: "Particulier" },
        { value: "bedrijven", label: "Bedrijven" },
        { value: "overheid", label: "Overheid" },
        { value: "ontwerp", label: "Ontwerp" },
        { value: "onderhoud", label: "Onderhoud" },
        { value: "bijenhouderij", label: "Bijenhouderij" },
        { value: "vacature", label: "Vacature" },
        { value: "anders", label: "Anders" },
      ],
    },

    privacy: {
      title: "Privacyverklaring",
      description:
        "Privacyverklaring van De Graaf Hoveniers: welke gegevens worden verwerkt, cookies op de huidige website, en uw rechten.",
      blocks: [
        {
          type: "p",
          text: "De Graaf Hoveniers, gevestigd aan de Oude Sluisweg 5, 7478 RJ Diepenheim, is verantwoordelijk voor de verwerking van persoonsgegevens zoals in deze verklaring beschreven. Contact: 0547 351 354, info@tdegraaf.nl, tdegraaf.nl.",
        },
        { type: "h2", text: "Welke gegevens" },
        {
          type: "p",
          text: "De Graaf Hoveniers verwerkt persoonsgegevens doordat u gebruik maakt van de diensten of doordat u die zelf verstrekt. Het gaat om naam, adres, telefoonnummer en e-mailadres, en — op de huidige website — om een anoniem IP-adres, anonieme gegevens over websitebezoek en het type browser en apparaat.",
        },
        {
          type: "p",
          text: "De website en de dienst zijn er niet op gericht gegevens te verzamelen van bezoekers jonger dan 16 jaar, tenzij ouders of voogd toestemming geven. Denkt u dat er toch gegevens van een minderjarige zijn verzameld, neem dan contact op via info@tdegraaf.nl of 0547 351 354. Die informatie wordt dan verwijderd.",
        },
        { type: "h2", text: "Doel" },
        {
          type: "ul",
          items: [
            "het afhandelen van betaling en facturen",
            "contact per telefoon of e-mail wanneer dat nodig is om de dienst uit te voeren",
            "het leveren van goederen en diensten",
            "anonieme analyse van het websitebezoek, om de site te verbeteren",
            "wettelijke plichten, zoals de belastingaangifte",
          ],
        },
        {
          type: "p",
          text: "Er is geen geautomatiseerde besluitvorming. Gegevens worden niet langer bewaard dan nodig is voor de gevraagde dienst, tenzij een wet een langere termijn verplicht. Alleen noodzakelijke personen hebben toegang, en de beveiliging wordt regelmatig gecontroleerd.",
        },
        { type: "h2", text: "Derden" },
        {
          type: "p",
          text: "Gegevens gaan alleen naar derden als dat nodig is voor de overeenkomst of voor een wettelijke plicht. Met bedrijven die in opdracht gegevens verwerken, wordt een verwerkersovereenkomst gesloten.",
        },
        { type: "h2", text: "Cookies" },
        {
          type: "p",
          text: "Op de huidige website van De Graaf Hoveniers worden cookies gebruikt voor Google Analytics, zodat aantallen bezoekers, bezochte pagina’s en verkeersbronnen anoniem inzichtelijk zijn. Gegevens uit het contactformulier worden daar niet in verwerkt. Daarnaast gebruikt die website technische cookies om de site te laten werken. U kunt cookies weigeren of verwijderen via uw browser. Uitleg staat bij Veiliginternetten.nl.",
        },
        {
          type: "p",
          text: "Deze conceptsite verstuurt geen formulier naar een server. Kiest u voor afspraak, offerte of sollicitatie, dan opent uw eigen mailprogramma met de tekst. Er wordt niets automatisch opgeslagen.",
        },
        { type: "h2", text: "Uw rechten" },
        {
          type: "p",
          text: "U kunt uw persoonsgegevens inzien, laten corrigeren of laten verwijderen. U kunt toestemming intrekken, bezwaar maken en vragen om overdracht van uw gegevens. Stuur dat verzoek naar info@tdegraaf.nl. Om zeker te weten dat het verzoek van u komt, kan om een identiteitsbewijs worden gevraagd; maak daarop pasfoto, de strook onderaan het document, het documentnummer en het burgerservicenummer onleesbaar. Er wordt zo snel mogelijk, en binnen vier weken, gereageerd.",
        },
        {
          type: "p",
          text: "U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
        },
      ] as Block[],
      links: [
        {
          label: "Veiliginternetten.nl over cookies",
          href: "https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/",
        },
        {
          label: "Klacht bij de Autoriteit Persoonsgegevens",
          href: "https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons",
        },
      ],
    },
  },
};

export type Content = typeof content;
