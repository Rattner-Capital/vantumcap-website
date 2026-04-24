export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  bio: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "samuel-r-rattner",
    name: "Samuel R. Rattner",
    title: "Chief Executive Officer and Managing Partner",
    intro:
      "Chief Executive Officer and Managing Partner focused on complex opportunities.",
    bio: [
      "Sam Rattner is a serial entrepreneur and investor. He founded and sold his company, Vigtory, to FuboTV (NYSE: FUBO), a transaction that contributed over $800 million in market capitalization upon announcement. Following the acquisition, he served as COO and a Board Member of Fubo Gaming, where he led the company’s expansion into regulated markets through joint-venture partnerships with Caesars Entertainment, Cordish Companies, and the Cleveland Cavaliers.",
      "Rattner also led key strategic initiatives, including the development of a 7,000-square-foot sportsbook lounge in partnership with the New York Jets and securing Fubo’s designation as an Authorized Gaming Operator of NASCAR. He played a central role in raising over $400 million of capital and launched the firm’s Chicago HQ, scaling it to more than 100 employees.",
      "Prior to founding Vantum Capital, Rattner focused on investing in complex and dislocated opportunities, including hotel-to-apartment conversions and other asset repositionings.",
      "At Vantum Capital, Rattner leads an investment strategy focused on special situations and underperforming assets, where value is created through deep research, disciplined underwriting, and hands-on execution across distressed opportunities, credit investments, buyout platforms, and asset turnarounds.",
    ],
  },
  {
    slug: "stephen-m-levine",
    name: "Stephen M. Levine",
    title: "Managing Partner",
    intro: "Managing Partner overseeing portfolio construction and execution.",
    bio: [
      "Stephen Levine is a credit and capital markets professional with deep experience across corporate liquidity and structured credit investing. He previously served as a senior fixed income trader at UBS, where he oversaw more than $50 billion in corporate liquidity for Fortune 500 clients and executed approximately $3 billion in daily trading volume across investment-grade, high-yield, and hybrid securities.",
      "Levine worked directly with CEOs and CFOs to design and implement sophisticated capital allocation and liquidity strategies, advising on portfolio construction, risk management, and market execution.",
      "He also led the development of a sub-investment-grade and long-duration credit platform, underwriting complex opportunities across capital structures through detailed structural analysis, covenant evaluation, and downside-focused risk modeling.",
    ],
  },
];
