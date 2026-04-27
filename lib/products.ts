
export type Product = {
  id: string;
  /** URL slug. Same as id for simplicity. */
  slug: string;
  title: string;
  intro: string;
  /** If true, this product has Pflichtinformationen that must be displayed. */
  pflichtInfo?: boolean;
  bullets: string[];
  image: string;
  imageAlt: string;
  /** Longer detail paragraph shown on the /produkte/[slug] detail page. */
  detail?: string;
};

export const products: Product[] = [
  {
    id: "peha-soft",
    slug: "peha-soft",
    title: "Einmalhandschuhe: Peha-soft® puderfrei",
    intro:
      "Einmalhandschuhe sind für alltägliche Pflegesituationen geeignet und helfen, Infektionen zu vermeiden.",
    bullets: [
      "Nicht-sterile Handschuhe zum Selbstschutz und zum Schutz anderer",
      "Reißfest und puderfrei",
      "Ideal für: Wechseln von Inkontinenzprodukten und Verbänden, Körper- und Mundpflege",
    ],
    image: "/products/peha-soft-vinyl.png",
    imageAlt: "Peha-soft vinyl Einmalhandschuhe Verpackung",
    detail:
      "Peha-soft® puderfreie Einmalhandschuhe bieten zuverlässigen Schutz bei allen Tätigkeiten der täglichen Pflege. Durch das puderfreie Material werden Hautirritationen minimiert. Die Handschuhe sind latexfrei erhältlich und damit auch für Pflegepersonen mit Latexallergie geeignet.",
  },
  {
    id: "sterillium",
    slug: "sterillium",
    title: "Händedesinfektionsmittel: Sterillium®",
    intro:
      "Sterillium® – das klassische alkoholische Händedesinfektionsmittel mit Hautpflegekomplex.",
    pflichtInfo: true,
    bullets: [
      "Flüssiges Produkt mit sehr guter Hautverträglichkeit",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Ideal für: Händedesinfektion vor dem Wechseln von Inkontinenzprodukten oder Verbänden, während der Katheterpflege",
    ],
    image: "/products/sterillium-bottle.png",
    imageAlt: "Sterillium Händedesinfektionsmittel 500 ml Flasche",
    detail:
      "Sterillium® ist Deutschlands bekanntestes Händedesinfektionsmittel und wird in Krankenhäusern, Arztpraxen und in der häuslichen Pflege eingesetzt. Der eingearbeitete Hautpflegekomplex macht das Produkt auch bei häufiger Anwendung sehr gut verträglich.",
  },
  {
    id: "sterillium-home",
    slug: "sterillium-home",
    title: "Oberflächen-Desinfektionstücher: Sterillium® home",
    intro:
      "Sterillium® plastikfreie Tücher für die schnelle Oberflächendesinfektion.",
    pflichtInfo: true,
    bullets: [
      "Einfach und schnell zu verwenden.",
      "Geeignet für empfindliche Oberflächen",
      "Desinfiziert und reinigt",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Ideal für: Desinfizieren von Oberflächen, z. B. Toilettensitzen und Bettgestellen",
    ],
    image: "/products/sterillium-home-wipes.png",
    imageAlt: "Sterillium home Desinfektionstücher Packung",
    detail:
      "Sterillium® home Desinfektionstücher sind speziell für den häuslichen Gebrauch entwickelt. Sie kombinieren Reinigung und Desinfektion in einem Schritt und sind besonders schonend zu empfindlichen Oberflächen wie Lack, Kunststoff oder lackiertem Holz.",
  },
  {
    id: "bacillol",
    slug: "bacillol",
    title: "Flächendesinfektion: Bacillol® Sensitive",
    intro:
      "Flüssiges Bacillol® Produkt zur schnellen Desinfektion von Oberflächen.",
    pflichtInfo: true,
    bullets: [
      "Gebrauchsfertige Lösung, kann ohne Handschuhe aufgetragen werden",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Aldehyd-, farbstoff- und parfümfrei",
      "Ideal für: Desinfizieren von Oberflächen, z. B. im Badezimmer",
    ],
    image: "/products/bacillol-sensitive.png",
    imageAlt: "Bacillol Sensitive Tissues Desinfektionstücher Packung",
    detail:
      "Bacillol® Sensitive ist die schonende Alternative für die alkoholische Flächendesinfektion. Ideal für alle empfindlichen, alkoholbeständigen Oberflächen im häuslichen Pflegebereich.",
  },
  {
    id: "molicare-bed-mat",
    slug: "molicare-bed-mat",
    title: "Bettschutzeinlagen: MoliCare® Premium Bed Mat",
    intro:
      "MoliCare® Bettschutzeinlagen schützen Matratze und Bettwäsche zuverlässig vor Flüssigkeiten.",
    pflichtInfo: true,
    bullets: [
      "Saugstarke Bettschutzeinlagen für die Matratze",
      "Schützen zuverlässig vor Durchnässung",
      "Hautfreundliche Oberfläche",
      "Ideal für: Die nächtliche Pflege und zum Schutz der Matratze bei Inkontinenz",
    ],
    image: "/products/molicare-bed-mat.png",
    imageAlt: "MoliCare Premium Bed Mat Bettschutzeinlagen Packung",
    detail:
      "MoliCare® Premium Bed Mat Bettschutzeinlagen bieten eine saugfähige Schutzschicht für Matratze und Bettwäsche. Sie sind besonders hautfreundlich und lassen sich einfach entsorgen.",
  },
  {
    id: "foliodress-mask",
    slug: "foliodress-mask",
    title: "Medizinische Gesichtsmasken: Foliodress® Mundschutz",
    intro:
      "Gesichtsmasken („chirurgische Masken\u201c) aus dünnen Schichten von Vliesstoff helfen, andere vor Infektionen zu schützen.",
    bullets: [
      "Gesichtsmasken aus hypoallergenem Vliesstoff",
      "Mit Nasenbügel und elastischen Ohrschlaufen",
      "Helfen, Infektionen zu verhindern, die durch Tröpfchen übertragen werden",
      "Ideal für: Wundversorgung",
    ],
    image: "/products/foliodress-mask.png",
    imageAlt: "Foliodress Mask Loop Type IIR Mundschutz Verpackung",
    detail:
      "Foliodress® medizinische Gesichtsmasken entsprechen der Norm EN 14683 Typ IIR und schützen sowohl die pflegende als auch die pflegebedürftige Person vor der Übertragung von Tröpfcheninfektionen.",
  },
  {
    id: "ffp2",
    slug: "ffp2",
    title: "FFP2-Masken: Foliodress® Maske FFP2",
    intro:
      "FFP2-Masken aus mehrlagigem Vliesstoff helfen, Sie und andere vor Infektionen zu schützen.",
    bullets: [
      "Partikelfiltrierende Halbmaske aus mehrlagigem, dicht gewebtem Vliesstoff",
      "Mit Nasenbügel und elastischen Ohrschlaufen",
      "Helfen, Infektionen zu verhindern, die durch Tröpfchen und Aerosole übertragen werden.",
      "Besonders geeignet, wenn die zu pflegende Person beispielsweise erkältet ist.",
    ],
    image: "/products/foliodress-ffp2.png",
    imageAlt: "Foliodress Mask Loop FFP2 Atemschutz-Maske Verpackung",
    detail:
      "Foliodress® FFP2-Masken sind nach EN 149 zertifiziert und filtern mindestens 94 % der Aerosole aus der Atemluft. Sie werden in der häuslichen Pflege insbesondere bei Infektionsrisiko empfohlen.",
  },
  {
    id: "vala-comfort",
    slug: "vala-comfort",
    title: "Einmal-Schutzschürzen: Vala®Comfort Einwegschürze",
    intro:
      "Wasserdichte Schürzen halten die Kleidung des Pflegepersonals sauber und trocken.",
    bullets: [
      "Einwegschürzen aus reißfestem, wasserdichtem Material (135 x 57 cm)",
      "Schützen die Kleidung vor Feuchtigkeit und Schmutz",
      "Mit Bändern im Rücken zum Schließen",
      "Ideal für: Wechseln von Inkontinenzprodukten und Verbänden, Körper- und Intimpflege",
    ],
    image: "/products/valacomfort-apron.png",
    imageAlt: "ValaComfort Einwegschürzen Packung",
    detail:
      "Vala®Comfort Einwegschürzen sind robust, reißfest und komplett wasserdicht. Sie lassen sich einfach über den Kopf ziehen und im Rücken binden.",
  },
  {
    id: "vala-fit",
    slug: "vala-fit",
    title: "Einmal-Schutzlätzchen: Vala®Fit haftende Schutzlätzchen",
    intro:
      "Schutzlätzchen schützen die Kleidung der zu pflegenden Person, z. B. während der Mahlzeiten.",
    bullets: [
      "Einweg-Lätzchen mit Auffangtasche (37 x 65 cm)",
      "Schnell dank des selbstklebenden Streifens anzubringen",
      "Fangen Essensreste und Flüssigkeiten auf",
      "Können auch als Mundlätzchen verwendet werden",
      "Ideal für: Essen und Trinken am Tisch oder im Krankenhausbett",
    ],
    image: "/products/valafit-bib.png",
    imageAlt: "Vala Fit haftende Schutzlätzchen Packung",
    detail:
      "Vala®Fit Schutzlätzchen mit Auffangtasche verhindern, dass Essensreste oder Flüssigkeiten auf die Kleidung gelangen. Der selbstklebende Streifen macht das Anbringen besonders einfach.",
  },
  {
    id: "bettauflage",
    slug: "bettauflage",
    title: "Waschbare Bettauflagen",
    intro:
      "Wiederverwendbare rutschfeste Bettauflagen aus weichem Stoff – bis zu 300 Waschgänge bei 95 °C. Bis zu vier Stück pro Jahr zusätzlich zur FairPflegeBox kostenfrei über die Pflegekasse.",
    bullets: [
      "Rutschfest, weich und besonders saugstark",
      "Waschbar bis 95 °C, bis zu 300 Waschgänge",
      "Maße: 75 x 85 cm",
      "Bis zu vier Stück pro Jahr zusätzlich zur FairPflegeBox – kostenfrei über die Pflegekasse",
    ],
    image: "/products/washable-bedpad.png",
    imageAlt: "Waschbare Bettauflage in Blau und Türkis",
    detail:
      "Unabhängig von den in Ihrer FairPflegeBox enthaltenen Produkten können Sie wiederverwendbare Bettauflagen anfordern. Diese rutschfesten Bettauflagen aus weichem Stoff (75 x 85 cm) nehmen Flüssigkeit besonders zuverlässig auf und können bis zu 300 Mal bei 95 °C gewaschen werden – das reduziert Abfall. Je nach Pflegeversicherung können Sie bis zu vier waschbare Bettauflagen pro Jahr zusätzlich zu Ihrer FairPflegeBox-Pflege kostenlos erhalten.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
