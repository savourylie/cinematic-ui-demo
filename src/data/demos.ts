export interface Demo {
  slug: string;
  filmTitle: string;
  director: string;
  year: number;
  siteType: string;
  siteName: string;
  tagline: string;
  description: string;
  palette: {
    bg: string;
    accent: string;
    text: string;
  };
  mood: string;
  pages: { label: string; file: string }[];
  techniques: string[];
}

export const demos: Demo[] = [
  {
    slug: "eternity-and-a-day",
    filmTitle: "Eternity and a Day",
    director: "Theo Angelopoulos",
    year: 1998,
    siteType: "Literary Journal",
    siteName: "Eternity & a Day",
    tagline: "A journal of time, memory, and the words we carry",
    description:
      "A contemplative literary journal inspired by Angelopoulos's fog-shrouded long takes. Fog-clearing parallax, asymmetric compositions, and slow tracking reveals create a meditative reading experience rooted in Thessaloniki.",
    palette: { bg: "#1a1e24", accent: "#c4a46a", text: "#e8e4de" },
    mood: "Contemplative",
    pages: [
      { label: "Home", file: "index.html" },
      { label: "Article", file: "article.html" },
      { label: "About", file: "about.html" },
    ],
    techniques: [
      "Fog-clearing parallax",
      "Rack-focus blur",
      "Tracking lateral drift",
    ],
  },
  {
    slug: "life-is-beautiful",
    filmTitle: "Life is Beautiful",
    director: "Roberto Benigni",
    year: 1997,
    siteType: "Creative Studio",
    siteName: "Vita Studio",
    tagline: "Where beauty meets strategy",
    description:
      "A warm, theatrical creative studio site channeling Benigni's golden Italian optimism. Iris-in clip-path entrances, Ken Burns drift, and proscenium bracket framing create a luxurious, inviting atmosphere.",
    palette: { bg: "#F5EDE0", accent: "#D4A35F", text: "#2A1F14" },
    mood: "Warm Theatrical",
    pages: [
      { label: "Home", file: "index.html" },
      { label: "Work", file: "work.html" },
      { label: "About", file: "about.html" },
    ],
    techniques: [
      "Iris-in clip-path entrance",
      "Ken Burns drift",
      "Proscenium bracket framing",
    ],
  },
  {
    slug: "before-sunrise",
    filmTitle: "Before Sunrise",
    director: "Richard Linklater",
    year: 1995,
    siteType: "Designer Portfolio",
    siteName: "Before Sunrise",
    tagline: "Experiences that feel like quiet conversations",
    description:
      "An intimate portfolio inspired by Linklater's wandering, conversational cinema. Evening light layers, parallax text float, and staggered split-line reveals echo the film's quiet, unhurried pace through Vienna.",
    palette: { bg: "#1E1B17", accent: "#C4956A", text: "#E8D5B0" },
    mood: "Intimate",
    pages: [
      { label: "Home", file: "index.html" },
      { label: "About", file: "about.html" },
      { label: "Work", file: "work.html" },
    ],
    techniques: [
      "Evening light layers",
      "Parallax text float",
      "Split-line stagger reveal",
    ],
  },
  {
    slug: "cloud-atlas",
    filmTitle: "Cloud Atlas",
    director: "Wachowskis / Tykwer",
    year: 2012,
    siteType: "Editorial Magazine",
    siteName: "Cloud Atlas Editorial",
    tagline: "All stories are connected",
    description:
      "An editorial magazine spanning six interconnected eras, each with its own color palette and identity. A scroll-tracking comet trail, era-based theme switching, and bento card tilt effects bring the narrative's interconnectedness to life.",
    palette: { bg: "#0a0f1a", accent: "#00d4ff", text: "#e0e8f0" },
    mood: "Epic",
    pages: [
      { label: "Home", file: "index.html" },
      { label: "Article", file: "article.html" },
      { label: "Archive", file: "category.html" },
    ],
    techniques: [
      "Era-based theme switching",
      "Comet trail scroll tracking",
      "Bento card tilt",
    ],
  },
  {
    slug: "pulp-fiction",
    filmTitle: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    siteType: "Editorial Magazine",
    siteName: "PULP",
    tagline: "An editorial for the restless mind",
    description:
      "A bold editorial magazine dripping with Tarantino's high-contrast noir aesthetic. Iris-in hero animations, curtain-wipe entrances, whip-pan transitions, and venetian blind reveals capture the film's kinetic, irreverent energy.",
    palette: { bg: "#1A1A1A", accent: "#D4A017", text: "#F0E8D8" },
    mood: "Bold Noir",
    pages: [
      { label: "Home", file: "index.html" },
      { label: "About", file: "about.html" },
      { label: "Article", file: "article.html" },
    ],
    techniques: [
      "Iris-in hero animation",
      "Curtain-wipe entrance",
      "Whip-pan transitions",
    ],
  },
  {
    slug: "shine",
    filmTitle: "Shine",
    director: "Scott Hicks",
    year: 1996,
    siteType: "Coffee Brand",
    siteName: "Shine Coffee",
    tagline: "Warmth in every detail",
    description:
      "A warm, contemplative coffee brand site inspired by intimate cinematic portraiture. Rack-focus reveals, steadicam float entrances, and a rich amber palette create a sensory experience that mirrors the warmth of a perfect cup.",
    palette: { bg: "#1A120D", accent: "#D4A35F", text: "#E8DCC8" },
    mood: "Warm Minimal",
    pages: [{ label: "Home", file: "index.html" }],
    techniques: [
      "Rack-focus reveal",
      "Steadicam float entrance",
      "Ken Burns drift",
    ],
  },
];
