// Central content store for the Northlight site.
// Copy reflects the firm-approved website brief (Sean / May 2026 deck).

export const firm = {
  name: "Northlight Group",
  legalName: "Northlight Group LLP",
  address: ["33 Glasshouse Street", "London W1B 5DG", "United Kingdom"],
  tel: "+44 (0)20 7518 9235",
  email: "IR@northlight.co.uk",
  mapsQuery: "33 Glasshouse Street, London W1B 5DG",
  regulatory:
    "Northlight Group LLP is authorised and regulated by the Financial Conduct Authority (FCA) in the UK as a full-scope AIFM and is registered as an Exempt Reporting Adviser with the US Securities and Exchange Commission (SEC).",
};

export const mainNav = [
  { href: "/about", label: "About Us" },
  { href: "/strategies", label: "Strategies" },
  { href: "/process", label: "Process" },
  { href: "/team", label: "Team" },
  // { href: "/news", label: "News" }, // removed per chef feedback 2026-07-30 — kept for easy restore (page archived at app/_news)
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/legal/uk-stewardship-code", label: "UK Stewardship Code" },
  { href: "/legal/sfdr-disclosure", label: "SFDR Disclosure" },
  { href: "/legal/mifidpru-8-disclosure", label: "MIFIDPRU 8 Disclosure" },
  { href: "/legal/privacy-policy", label: "Privacy Notice" },
  { href: "/legal/financial-promotions-disclaimer", label: "Financial Promotions Disclaimer" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export const firmFacts = [
  { value: "2009", label: "Founded in London" },
  { value: "16yr", label: "Flagship track record" },
  { value: "90+", label: "Years of combined credit experience" },
];

export type ProcessStep = {
  n: string;
  title: string;
  short: string;
  body: string;
  detail: string[];
};

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Research",
    short: "Fundamental, bottom-up credit analysis.",
    body: "Fundamental, bottom-up analysis of issuers across the European credit spectrum, focused on identifying clear catalysts and asymmetric, often event-driven opportunities.",
    detail: [
      "Free-cash-flow generation modelled with revenue and cost sensitivity analysis.",
      "Peer comparables, transaction multiples, loan-to-value and recovery analysis.",
      "Security-level work on covenants, capital structure and country-specific legal points.",
      "Direct dialogue with management to understand strategy and the objectives of primary shareholders.",
      "Market analysis of relative value, dealer positioning and liquidity to gauge opportunity cost.",
    ],
  },
  {
    n: "02",
    title: "Portfolio Construction",
    short: "Conviction-weighted, sized to liquidity.",
    body: "Conviction-weighted positions — balanced long and short — sized to liquidity and the asymmetry of expected return.",
    detail: [
      "Every position must be compelling on both a standalone and a portfolio basis.",
      "Typically around two-thirds long and one-third short.",
      "Five return drivers — long, short, relative value, event and trading — for flexibility across conditions.",
      "Quantified downside and upside scenarios with explicit probability analysis.",
    ],
  },
  {
    n: "03",
    title: "Risk Management",
    short: "Liquidity-led, with a macro-overlay.",
    body: "Liquidity-led risk control with a systematic macro-overlay to preserve capital and protect the downside in all market conditions.",
    detail: [
      "The overlay is expressed through CDS and index or equity options as a portfolio hedge.",
      "Gross and net exposure actively managed to the prevailing market environment.",
      "Position sizing constrained by liquidity and expected time-to-exit.",
      "Positioning stress-tested against historical drawdown scenarios.",
    ],
  },
  {
    n: "04",
    title: "Monitoring",
    short: "Actively traded around catalysts.",
    body: "Active surveillance and trading of positions around catalysts and changing conditions through the cycle.",
    detail: [
      "Positions revisited as catalysts play out or the original thesis changes.",
      "Continuous reassessment as valuations, conditions and liquidity move.",
      "Actively traded through the cycle rather than held passively.",
    ],
  },
];

// Risk-management summary for the public Process & Risk page.
// Sources: firm's May 2026 deck (macro-overlay, exposure/liquidity sizing, stress-testing)
// + Nicolas's approved public-content list (independent oversight, daily monitoring, limits/drawdown controls).
export const riskManagement = {
  intro:
    "Risk management is integral to the strategy, not a separate step. The approach is liquidity-led, with a systematic macro-overlay designed to preserve capital and protect the downside through all market conditions.",
  points: [
    "Independent risk oversight of the portfolio",
    "Daily monitoring of exposures and liquidity",
    "Gross and net exposure actively managed to the prevailing market environment",
    "Position sizing constrained by liquidity and expected time-to-exit",
    "A systematic macro-overlay expressed through CDS and index or equity options",
    "Positioning stress-tested against historical drawdown scenarios",
    "Defined position limits and drawdown controls",
  ],
};

// Circular process for the Process page — five connected stages, kept concise.
// Monitoring feeds back into idea generation (hence the cycle). Risk detail folded in here.
export const processCycle = [
  {
    n: "01",
    title: "Idea Generation",
    summary: "Sourcing opportunities across European corporate credit.",
    detail: [
      "Screening the European high-yield and broader credit universe",
      "Catalyst- and event-driven idea sourcing",
      "Relative-value and market-driven leads",
    ],
  },
  {
    n: "02",
    title: "Research",
    summary: "Fundamental, bottom-up credit analysis.",
    detail: [
      "Free-cash-flow and downside modelling",
      "Capital structure, covenants and recovery analysis",
      "Direct dialogue with company management",
    ],
  },
  {
    n: "03",
    title: "Portfolio Construction",
    summary: "Conviction-weighted, sized to liquidity.",
    detail: [
      "Balanced long and short — roughly two-thirds long",
      "Positions sized to liquidity and the asymmetry of return",
      "Five return drivers for flexibility across conditions",
    ],
  },
  {
    n: "04",
    title: "Risk Management",
    summary: "Liquidity-led, capital-preservation first.",
    detail: [
      "Independent risk oversight with daily monitoring of exposures and liquidity",
      "Systematic macro-overlay via CDS and index or equity options",
      "Gross and net exposure actively managed to the market environment",
      "Stress-tested against historical drawdowns, with defined position and drawdown limits",
    ],
  },
  {
    n: "05",
    title: "Monitoring",
    summary: "Active surveillance through the cycle.",
    detail: [
      "Positions revisited as catalysts play out or the thesis changes",
      "Continuous reassessment of valuation, conditions and liquidity",
      "Actively traded, not held passively — feeding the next ideas",
    ],
  },
];

export type ShareClass = {
  investorType: "Institutional" | "Retail";
  currency: string;
  isin: string;
  bbg?: string;
};

export type Strategy = {
  slug: string;
  tag: string;
  short: string;
  name: string;
  structure: string;
  summary: string;
  headline: { label: string; value: string };
  meta: { label: string; value: string }[];
  points: string[];
  footnote?: string;
  shareClasses?: ShareClass[];
};

export const strategies: Strategy[] = [
  {
    slug: "european-fundamental-credit",
    tag: "Flagship · Cayman",
    short: "Flagship",
    name: "Northlight European Fundamental Credit Fund",
    structure: "Long / short",
    summary:
      "A long/short European credit strategy seeking consistent returns across market cycles, with capital preservation at the core of the investment approach.",
    headline: { label: "Focus", value: "Consistent returns across market cycles" },
    meta: [
      { label: "Structure", value: "Cayman" },
      { label: "Track record", value: "16-year" },
      { label: "Liquidity", value: "Monthly" },
    ],
    points: [
      "Invests across European high-yield bonds, loans and credit derivatives",
      "Idiosyncratic, catalyst-driven opportunities sourced bottom-up",
      "Systematic macro-overlay intended to preserve capital",
      "Balanced long and short — roughly two-thirds long, one-third short",
      "Positive performance* in 15 of the 16 years since inception",
      "Low correlation to broader credit markets",
      "Historically lower drawdowns than the European High Yield market",
    ],
    footnote: "* USD I share class.",
  },
  {
    slug: "european-credit-opportunities",
    tag: "UCITS",
    short: "UCITS",
    name: "MFM Northlight European Credit Opportunities Fund",
    structure: "Long / short",
    summary:
      "The flagship investment philosophy in a regulated, onshore UCITS wrapper — the same fundamental, event-driven approach, more widely accessible.",
    headline: { label: "Target", value: "Medium to high single-digit returns" },
    meta: [
      { label: "Structure", value: "UCITS" },
      { label: "Track record", value: "Since 2019" },
      { label: "Liquidity", value: "Weekly" },
      { label: "Target", value: "Medium to high single-digit returns" },
    ],
    points: [
      "The same fundamental, event-driven approach, in a more diversified and more liquid corporate bond portfolio with a higher average rating",
      "Daily position transparency",
      "Suitable for investors requiring a regulated European vehicle",
    ],
    // Share classes per the MFM Funds (Lux) DDQ (Sept 2025).
    // All classes are accumulating (Acc) and fully currency-hedged.
    shareClasses: [
      { investorType: "Institutional", currency: "EUR", isin: "LU1340030060", bbg: "MFMECIE LX" },
      { investorType: "Retail", currency: "EUR", isin: "LU1340031464", bbg: "JAEUCRE LX" },
      { investorType: "Institutional", currency: "CHF", isin: "LU1989157695", bbg: "MFMECIC LX" },
      { investorType: "Retail", currency: "CHF", isin: "LU1340031548", bbg: "MFMECRC LX" },
      { investorType: "Institutional", currency: "GBP", isin: "LU1989157778", bbg: "MFMECIG LX" },
      { investorType: "Institutional", currency: "USD", isin: "LU1340030144", bbg: "MFMECIU LX" },
      { investorType: "Retail", currency: "USD", isin: "LU1340031209", bbg: "JAECRUH LX" },
      { investorType: "Institutional", currency: "JPY", isin: "LU3058829923", bbg: "MFMNECI LX" },
      { investorType: "Retail", currency: "JPY", isin: "LU3058830004" },
    ],
  },
  {
    slug: "insurance-long-only",
    tag: "Bespoke · Insurance",
    short: "Insurance",
    name: "Insurance Long-Only Mandates",
    structure: "Segregated mandates",
    summary:
      "A portfolio built for insurance capital, drawing on income and short duration to work capital efficiently.",
    headline: { label: "Style", value: "Long-only" },
    meta: [
      { label: "Style", value: "Long-only" },
      { label: "Format", value: "Segregated mandates" },
      { label: "Focus", value: "Income · short duration" },
    ],
    points: [
      "Designed for regulated insurance capital",
      "Income generation with a short-duration profile",
      "Customised reporting and governance",
      "Aligned with each mandate's capital constraints",
    ],
  },
  {
    slug: "co-investments",
    tag: "Bespoke",
    short: "Co-Investments",
    name: "Co-Investments",
    structure: "By invitation",
    summary:
      "Selective access to high-conviction opportunities arising from Northlight’s investment strategy, offered alongside its core funds.",
    headline: { label: "Approach", value: "Concentrated & high-conviction" },
    meta: [
      { label: "Horizon", value: "Multi-year" },
      { label: "Selection", value: "Highest conviction" },
    ],
    points: [
      "Concentrated exposure across a small number of positions",
      "Structured around specific catalysts and events",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Cyril Armleder",
    role: "Partner & Portfolio Manager",
    photo: "/team/cyril-armleder.jpg",
    bio: "Cyril is a Partner of Northlight Group and a member of the Investment and Management Committees for the Northlight funds. He was previously a Partner at GLG Partners (2005–2009), where he co-managed the GLG Credit Fund and advised on credit strategies across other GLG funds. At Goldman Sachs (2001–2005) he established and headed the iTraxx credit index and derivatives trading desk, having co-run the European TMT credit sectors and helped set up the European Credit Trading Desk. He began his career at Commerzbank (1993–2001) as a credit derivatives trader during the emergence of the CDS market. Cyril holds an MSc in Mathematical Finance from Birkbeck College, University of London, and a degree in Macroeconomics from HEC Lausanne.",
  },
  {
    name: "Shahar Zer",
    role: "Partner & Portfolio Manager",
    photo: "/team/shahar-zer.jpg",
    bio: "Shahar is a Partner of Northlight Group and a member of the Investment and Management Committees for the Northlight funds. He was previously at JP Morgan Private Bank (2008–2009), where he led the establishment of the European Global Sales Trading desk. At Lehman Brothers Europe (1998–2008) he ran the Leveraged Loan Trading Desk, managed Syndicate Desk risk (2007–2008) and built out the European high-yield trading desk, after earlier working as a high-yield and distressed credit analyst. He began his Lehman Brothers career in the M&A group of the Investment Bank. Shahar holds a BA in Economics and Political Science from the University of Rochester and an MSc in Finance and Accounting from the London School of Economics.",
  },
];

// The wider investment (research) team — shown below the founding partners.
// Bios taken from the firm's Biographies deck, with the opening "X is a Senior
// Research Analyst at Northlight Group" sentence dropped (languages included).
export type Analyst = {
  name: string;
  role: string;
  focus?: string;
  bio: string;
  photo?: string;
};

// Business development, investor relations, risk and operations — from the
// Biographies page (p.40) of the Northlight Presentation (May 2026), bios verbatim.
export const businessTeam: Analyst[] = [
  {
    name: "Nicolas Mueller",
    role: "Partner, Head of Business Development and Chief Compliance Officer",
    bio: "Nicolas is a Partner and member of the Management Committee for Northlight Group. Prior to joining Northlight in 2012, he was a Partner, co-founder and Chief Operating Officer of Merian Capital Partners LLP (2008-2011), a European Equity Long Short Fund. Nicolas also held various senior positions within Man Group Plc. (2002-2007) where he was Head of Managers’ Transactions at Man Global Strategies (MGS), responsible for the structuring and implementation of MGS’s USD 10 billion new affiliation initiatives, and a member of MGS’s Management Committee (2004-2007), in addition to serving as Head of International Offices & Joint Ventures at RMF Investment Group (2002-2004). In addition, Nicolas was a Senior Associate at Wiederkehr Forster in Zürich (1999-2002), with Mayer, Brown and Platt in New York (1998-1999), Crédit Lyonnais (1996-1997), EY (1993-1995) and De Pfyffer & Ass. (1990-1992) in Geneva. Nicolas is also co-founder of the Make-A-Wish Foundation of Switzerland. Nicolas holds a J.D. from the University of Geneva, an LL.M. from New York University and has been admitted to the New York, Zürich and Geneva bars. He is fluent in French, English and German.",
  },
  {
    name: "Sean Callahan",
    role: "Head of Distribution",
    bio: "Sean is Head of Distribution and a member of the Management Committee for Northlight Group. Prior to joining Northlight in 2023, Sean was a senior member of the Business Development and Investor Relations team at Mudrick Capital, an event-driven distressed credit fund based in New York, where he was responsible for raising capital across client channels in North America (2020-2022). Prior to Mudrick Capital, Sean spent over ten years at BlackRock, Inc. where he was responsible for business development and investor relations for some of the firm’s largest institutional clients. Sean holds a degree in Economics from Boston College.",
  },
  {
    name: "Brian O’Callaghan",
    role: "Chief Risk Officer",
    bio: "Brian O’Callaghan is Chief Risk Officer at Northlight Group and has been involved in various capacities with the firm since 2019. Brian has extensive experience as a CRO or equivalent for investment managers running funds across a variety of strategies, including HY Credit Long/Short, ABS Credit, Equity Long/Short, Commodities, Global Macro and Private Equity. Brian has also served and continues to serve as a Non-executive Director for a range of financial services companies, including hedge or private equity fund managers and hedge funds. Prior to focusing on financial risk management and governance in 2012, Brian spent more than a decade as a CEO or COO of investment management firms. He was previously CEO of Compass Asset Management (2010-2012), which was based in Almaty, Kazakhstan. Compass focused on investing in Central Asia through hybrid funds whose mandates included both public markets and private equity. Before joining Compass, Brian was CEO of Renaissance Investment Management (UK) Ltd, part of the emerging markets-focused Renaissance Group. Prior to his appointment as CEO, Brian served as the company’s COO. Before joining Renaissance (2008-2010), Brian co-founded and spent five years as the COO of Holte Capital (2002-2006), a London based, market neutral, special situations hedge fund that focused on Western Europe. Brian began his career in strategy consulting with SJH & Co, initially in Boston, USA, and then later in Warsaw, Poland. Brian is a Canadian and Irish dual national and resident of Portugal. He holds current approvals from the Malta Financial Services Authority (MFSA) and has previously held approvals for a variety of control functions from the UK’s Financial Conduct Authority (FCA) and Dubai Financial Services Authority (DFSA). Brian holds a Bachelor of Arts degree in economics from Harvard University and is a Certified Professional Risk Manager (PRM) with the Professional Risk Managers’ International Association (PRMIA).",
  },
  {
    name: "Shane Quinn",
    role: "Head of Operations",
    bio: "Shane is the Head of Operations at Northlight Group, a role he has held since joining the firm in 2020. Prior to this, he was with Oceanwood Capital Management from 2019 to 2020. From 2013 to 2019, Shane was part of the Middle Office team at Fideuram Asset Management. Earlier in his career, he held roles in Trade Support at Bank of America and Merrill Lynch, as well as in Settlements at Scotia Capital. Shane holds a Bachelor of Commerce degree from the National University of Ireland, Galway.",
  },
];

export const investmentTeam: Analyst[] = [
  {
    name: "Antonio Casari",
    role: "Senior Research Analyst",
    focus: "European High Yield Credit",
    bio: "Prior to joining Northlight in 2013, Antonio worked at Investindustrial (2009–2013), one of Southern Europe's leading investment groups, where he was responsible for capital markets and financing and raised in excess of €1.5bn across high yield and leveraged loans. At Magnetar Capital (2007–2009), Antonio co-promoted and ran the European fundamental credit strategy, focusing on credit analysis and monitoring of investments. He has also worked with Lehman Brothers (1998–2007) as a member of the leveraged finance and M&A teams. Antonio holds a degree in Economics from the University of Bologna. He is fluent in English and Italian.",
  },
  {
    name: "Elizabeth Rasskazova",
    role: "Senior Research Analyst",
    focus: "European High Yield Credit",
    bio: "Prior to joining Northlight in 2020, Elizabeth was a Portfolio Manager with Polygon Partners (2013–2019), focusing on distressed and event-driven credit investing. Elizabeth started her career at Goldman Sachs European Special Situations Group in 2005. She holds graduate degrees in Economics and Finance from the University of Cambridge and the London School of Economics. A native Russian speaker, Elizabeth is fluent in English and German and also speaks French and Italian.",
  },
  {
    name: "Katerina Tchakalski",
    role: "Senior Research Analyst",
    focus: "European High Yield Credit",
    bio: "Prior to joining Northlight in 2024, Katerina was a Senior Research Analyst at BlackRock (2018–2024), focusing on leveraged credit investments in the healthcare, paper-packaging and utilities sectors. Prior to that, Katerina spent a decade working in investment banking. The positions she held included restructuring banker at Houlihan Lokey, leveraged finance banker at Barclays and Bank of America Merrill Lynch, and M&A banker at Société Générale. She holds an undergraduate degree in Economics from the University of Chicago and an MBA from The Wharton School at the University of Pennsylvania. Katerina is fluent in English and French and speaks basic Italian.",
  },
];

export const teamStats = [
  { value: "90+", label: "Years of combined credit experience" },
  { value: "7", label: "Languages spoken across the team" },
  { value: "2009", label: "Investing together since" },
];

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
};

// Placeholder entries — structure ready to populate with approved announcements.
export const news: NewsItem[] = [
  {
    date: "2026",
    tag: "Firm",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
  {
    date: "2026",
    tag: "Funds",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
  {
    date: "2025",
    tag: "Recognition",
    title: "[News headline placeholder]",
    excerpt: "A short summary of the announcement or update will appear here once published.",
  },
];
