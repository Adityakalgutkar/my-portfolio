export const GOLD = "#C9A84C";
export const GOLD_LIGHT = "#E8C97A";

export type Piece = string | null;
export type Board = Piece[][];

export const WHITE_PIECES = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];
export const BLACK_PIECES = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];

export const INITIAL_BOARD: Board = [
  BLACK_PIECES,
  Array(8).fill("♟"),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill("♙"),
  WHITE_PIECES,
];

export const MOVES = [
  {
    notation: "e2 → e4",
    piece: "♙",
    label: "MOVE 01",
    name: "Pawn Advances",
    story: "The opening salvo. Control the center.",
  },
  {
    notation: "g1 → f3",
    piece: "♘",
    label: "MOVE 02",
    name: "Knight Develops",
    story: "The knight springs into action.",
  },
  {
    notation: "f1 → c4",
    piece: "♗",
    label: "MOVE 03",
    name: "Bishop Reveals",
    story: "Diagonals open. Pressure mounts.",
  },
  {
    notation: "O-O",
    piece: "♔",
    label: "MOVE 04",
    name: "Castling",
    story: "Safety secured. Position fortified.",
  },
  {
    notation: "d1 → h5",
    piece: "♕",
    label: "MOVE 05",
    name: "Queen Attacks",
    story: "The queen enters. Everything changes.",
  },
  {
    notation: "♕×f7#",
    piece: "♕",
    label: "MOVE 06",
    name: "Checkmate",
    story: "Scholar's Mate. The game is over.",
  },
] as const;

export const CHESS_PROJECTS = [
  {
    piece: "♙",
    role: "Pawn",
    type: "Creative Project",
    title: "Overstitch",
    category: "Shopify Fashion Store",
    desc: "Responsive theme customization and performance optimization for a growing fashion brand.",
    stack: ["Shopify", "Liquid", "SCSS", "JavaScript"],
    url: "https://overstitch.store",
    color: "#C9A84C",
  },
  {
    piece: "♘",
    role: "Knight",
    type: "Creative Project",
    title: "La Belle Hélène",
    category: "Luxury Resort Website",
    desc: "Premium frontend with silky GSAP animations for a boutique luxury resort.",
    stack: ["WordPress", "PHP", "GSAP", "JavaScript"],
    url: "https://bellehelene.com",
    color: "#E8C97A",
  },
  {
    piece: "♗",
    role: "Bishop",
    type: "Frontend Project",
    title: "Infoaccts",
    category: "Corporate Finance Site",
    desc: "Responsive corporate site with interactive sections for an accounting firm.",
    stack: ["Node.js", "JavaScript", "SCSS"],
    url: "https://infoaccts.com",
    color: "#A0B4C8",
  },
  {
    piece: "♜",
    role: "Rook",
    type: "Enterprise Project",
    title: "Travco Education",
    category: "Education Consultancy",
    desc: "Animated landing pages and accessibility improvements for an international consultancy.",
    stack: ["Node.js", "GSAP", "SCSS", "HTML5"],
    url: "https://travcoeducation.com",
    color: "#C8A0B4",
  },
] as const;

export type ChessProject = (typeof CHESS_PROJECTS)[number];

export const CHESS_SKILLS = [
  { name: "React & Next.js", level: 95 },
  { name: "WordPress & WooCommerce", level: 92 },
  { name: "Shopify & Liquid", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "GSAP & Motion", level: 85 },
  { name: "Performance & SEO", level: 93 },
];

export const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

export const CHESS_SERVICES = [
  {
    icon: "♙",
    title: "WordPress & WooCommerce",
    desc: "Custom themes, plugins, and stores built to perform.",
  },
  {
    icon: "♜",
    title: "Shopify Development",
    desc: "Theme customization, store setup, and conversion optimization.",
  },
  {
    icon: "♘",
    title: "React & Next.js",
    desc: "Custom applications with modern architecture and clean code.",
  },
  {
    icon: "♗",
    title: "Landing Pages",
    desc: "Speed-first, conversion-focused pages that guide visitors to act.",
  },
  {
    icon: "♕",
    title: "Performance & SEO",
    desc: "Core Web Vitals, accessibility, and technical SEO that moves metrics.",
  },
  {
    icon: "♔",
    title: "Maintenance & Support",
    desc: "Ongoing care so your site stays fast, secure, and healthy.",
  },
];
