export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact-footer" },
];

export const strategyCards = [
  {
    title: "Special Situations",
    body: "Control and non-control opportunities where complexity and transition create mispricing.",
  },
  {
    title: "Distressed Credit",
    body: "Control-oriented credit investing targeting stressed capital structures and opportunistic equity takeovers.",
  },
  {
    title: "Value Transformation",
    body: "Asset-level repositioning and capital structure optimization in operationally intensive situations.",
  },
  {
    title: "Event-Driven Opportunities",
    body: "Catalyst-based investments around restructurings, carve-outs, and strategic change.",
  },
  {
    title: "Advisory & Co-Investment",
    body: "Selective partnerships for institutional investors seeking specialized, execution-heavy opportunities.",
  },
];

export const insightPosts = [
  {
    title: "Capital Structure Stress in Transitioning Industries",
    category: "Market Commentary",
    date: "April 2026",
  },
  {
    title: "Underwriting Operational Complexity in Distressed Real Assets",
    category: "Research",
    date: "March 2026",
  },
  {
    title: "Discipline in Event-Driven Credit During Volatility",
    category: "Whitepaper",
    date: "February 2026",
  },
];
