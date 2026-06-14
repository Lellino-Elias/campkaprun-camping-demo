import type { CampsiteConfig } from "../types";

/**
 * Camping zur Mühle · Kaprun (slug: campkaprun)
 * Quelle: leads/campkaprun/raw/digest (Camping-Seiten 01/02) + contact.json.
 * Bergcamping am Fuß des Kitzsteinhorn-Gletschers, geführt von Familie Nindl
 * (Teil des Hotel-Gasthof zur Mühle). Alle Inhalte aus der eigenen Quelle abgeleitet;
 * Restaurant & Erlebnis-Freibad gehören zum Gasthof und werden Campinggästen ausdrücklich
 * angeboten. Hotel-/Wellness-/Zimmerbilder wurden bewusst NICHT verwendet (kein Camping-Bezug).
 */
const IMG = "/campsites/campkaprun";

const campkaprun: CampsiteConfig = {
  name: "Camping zur Mühle",
  shortName: "Zur Mühle",
  slug: "campkaprun",
  ort: "Kaprun",
  region: "Salzburger Land",
  brandKind: "Camping",
  regionLong: "Zell am See-Kaprun · Nationalpark Hohe Tauern · Salzburger Land",

  heroVariant: "center",

  claim: "Camping am Fuß des Kitzsteinhorn",
  claimEmphasis: "Fuß des Kitzsteinhorn",
  intro:
    "Großzügige, schattige Parzellen, die du dir selbst aussuchst — eingebettet zwischen den Gipfeln der Hohen Tauern, mit eigener Bushaltestelle zum Gletscher, zu den Stauseen und nach Zell am See.",

  statement: {
    text: "Von deinem Stellplatz bringt dich die eigene Bushaltestelle in Minuten zum Gletscher und in die Berge.",
    emphasis: "eigene Bushaltestelle",
  },

  pillars: [
    {
      title: "XL-Plätze für Reisemobile",
      text: "Eigener Wasseranschluss und Abwasserentsorgung direkt am Stellplatz — auch große Wohnmobile stehen hier bequem und eben.",
      image: { src: `${IMG}/gallery-460f38e2ba.webp`, alt: "Wohnmobil-Stellplatz mit Tisch und Stühlen am Camping zur Mühle" },
    },
    {
      title: "Persönlich geführt",
      text: "Blühende Beete, kurze Wege und eine Rezeption, an der dir Familie Nindl persönlich weiterhilft — freie Platzwahl inklusive.",
      image: { src: `${IMG}/gallery-e31f3783a8.webp`, alt: "Empfangsbereich des Camping zur Mühle mit Blumenbeeten" },
    },
    {
      title: "Sommer wie Winter",
      text: "Im Winter wird der Platz regelmäßig geräumt, im Sommer spenden alte Bäume Schatten — Bergcamping rund ums Jahr.",
      image: { src: `${IMG}/gallery-6226e93e52.webp`, alt: "Verschneite Wohnwagen am Camping zur Mühle mit Bergpanorama" },
    },
  ],

  usps: [
    "Freie Platzwahl",
    "Gratis WLAN",
    "Eigene Bushaltestelle",
    "À la carte Restaurant",
    "Hunde willkommen",
    "Brötchenservice",
  ],

  trust: {
    heading: "Mitten in der Gletscherwelt Kaprun",
    headingEmphasis: "Gletscherwelt",
    intro:
      "5 km zur Talstation des Kitzsteinhorn, 2 km zum Erlebnisberg Maiskogel, 1 km ins Ortszentrum — und die eigene Bushaltestelle bringt dich überallhin, ganz ohne Auto.",
  },

  awards: [],

  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-bb29a7e110.webp`,
      alt: "Camping zur Mühle: Stellplätze unter Bäumen mit Blick auf die Berge",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-1798e1aa23.webp`, alt: "Verschneiter Weg zwischen Tannen am Camping zur Mühle im Winter" },
    line: "Stille Wege zwischen verschneiten Tannen.",
  },

  camping: {
    heading: "Vom Stellplatz in die Berge",
    intro:
      "Warmwasser inklusive, gratis WLAN, ein Trockenraum mit Skischuhheizung und frische Brötchen am Morgen — hier passt der Rahmen, Sommer wie Winter.",
    features: [
      {
        title: "Schattige Parzellen",
        text: "Großzügige Plätze unter altem Baumbestand mit freier Platzwahl — Stromanschluss ist auf fast allen Stellplätzen vorhanden.",
        image: { src: `${IMG}/gallery-33cf61e18c.webp`, alt: "Reisemobil auf einer schattigen Parzelle am Camping zur Mühle" },
      },
      {
        title: "Erlebnis-Freibad",
        text: "Im Sommer kühlst du dich im Erlebnis-Freibad mit Liegewiese ab — gleich beim Gasthof, mit Blick ins Grüne.",
        image: { src: `${IMG}/hero-902991e719.webp`, alt: "Erlebnis-Freibad mit Pool und Liegestühlen beim Gasthof zur Mühle" },
      },
      {
        title: "Spiel & Planschen",
        text: "Spielplatz, Tischtennis und ein Kinderbecken mit Wasserspielen sorgen dafür, dass den Kleinen nie langweilig wird.",
        image: { src: `${IMG}/kids-cfd12e79e2.webp`, alt: "Kind im Kinderbecken mit Rutsche am Camping zur Mühle" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Kaprun",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauern Autobahn A10 bis Bischofshofen, weiter auf der B311 ins Pinzgau nach Kaprun — der Platz liegt an der Umfahrungsstraße.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Zell am See, von dort mit dem Bus 660 in rund 20 Minuten nach Kaprun — die Haltestelle liegt direkt beim Gasthof zur Mühle.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Salzburg rund 100 km entfernt — über die A10 in gut einer Stunde bequem erreichbar.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Gasthof",
    headingEmphasis: "Eindrücke",
    intro: "Abends erwartet dich das à la carte Restaurant im Gasthof zur Mühle.",
    tag: "Gasthof zur Mühle",
    images: [
      { src: `${IMG}/amenity-2071446153.webp`, alt: "Traditionelle Stube im à la carte Restaurant des Gasthof zur Mühle" },
      { src: `${IMG}/amenity-22a59e6414.webp`, alt: "Festlich gedeckter Tisch im Gasthof zur Mühle" },
    ],
  },

  booking: {
    heading: "Komm vorbei — einen Platz findest du immer",
    headingEmphasis: "einen Platz findest du immer",
    intro:
      "Reservieren musst du nicht — frag einfach deine Wunschtermine an, den Stellplatz suchst du dir bei der Anreise selbst aus.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis für 2 Erwachsene/Nacht inkl. Nächtigungsabgabe (€ 2,55 p. P.), ohne Strom (€ 1,00/kWh) · Kinder 3–14 J. € 8 · Hund € 5 · Stand: ab Juli 2025.",
    highlight: {
      title: "Ohne Reservierung",
      text: "Keine Buchung nötig — bei zeitiger Anreise ist fast immer ein Platz frei.",
    },
    categories: [
      { id: "stellplatz-a", label: "Stellplatz A · Wohnwagen & Wohnmobil", perNight: 49.1, perExtraGuest: 15.05 },
      { id: "stellplatz-b", label: "Stellplatz B · Auto, Mini-Van & Dachzelt", perNight: 45.1, perExtraGuest: 15.05 },
      { id: "zelt", label: "Zeltplatz", perNight: 37.1, perExtraGuest: 15.05 },
    ],
  },

  kontakt: {
    coords: { lat: 47.264946, lng: 12.747081 },
    tel: "+43 6547 825487",
    telHref: "tel:+436547825487",
    mail: "office@campkaprun.at",
    adresse: "Umfahrungsstraße 5 · 5710 Kaprun · Salzburger Land",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Lage", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campkaprun;
