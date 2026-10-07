// Regulatory / compliance documents, transcribed from the firm's approved texts.
// Rendered by app/legal/[slug]/page.tsx. Edit the copy here only.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string; level?: 3 }
  | { type: "ul"; items: string[] }
  | { type: "dl"; rows: { term: string; def: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; total?: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  subtitle?: string;
  updated?: string;
  blocks: Block[];
};

const ukStewardshipCode: LegalDoc = {
  slug: "uk-stewardship-code",
  title: "UK Stewardship Code",
  blocks: [
    { type: "p", text: "This statement sets out the position of Northlight Group LLP (the “**Firm**”) with respect to the UK Stewardship Code (the “**Code**”), published by the Financial Reporting Council (“**FRC**”) in July 2010 and revised in 2012, 2020 and 2026. Under COBS 2.2.3R, the Firm, as an FCA-authorised firm managing investments for professional clients, must disclose publicly the nature of its commitment to the Code or, where it does not commit to the Code, its alternative investment strategy." },
    { type: "h", text: "1. About the Code" },
    { type: "p", text: "The Code is a voluntary framework that promotes the responsible allocation, management and oversight of capital to create long-term sustainable value for clients and beneficiaries. It aims to enhance the quality of engagement between investors and the entities in which they invest, and encourages investors to consider long-term risks and opportunities, including impacts on the economy, environment and society on which beneficiaries’ interests depend. It is applied on an “apply and explain” basis." },
    { type: "p", text: "The FRC recognises that capital is invested in a range of asset classes (for example, fixed income, private equity, real estate and infrastructure) over which investors have different terms and investment periods, rights and levels of influence. The Code therefore does not apply solely to equity investments. The FRC also recognises that not all parts of the Code will be relevant to all institutional investors, and that smaller institutions may judge some of the principles and guidance to be disproportionate." },
    { type: "h", text: "2. The Principles" },
    {
      type: "table",
      head: ["Principle", "Summary"],
      rows: [
        ["1", "Signatories integrate stewardship and investment to deliver long-term sustainable value for their clients and beneficiaries."],
        ["2", "Signatories identify and respond to market-wide and systemic risks to promote well-functioning financial markets."],
        ["3", "Signatories engage to maintain or enhance the value of assets."],
        ["4", "Signatories actively exercise their rights and responsibilities."],
        ["5", "Signatories integrate stewardship considerations into their selection and oversight of external managers."],
        ["6", "Signatories monitor and hold to account stewardship service providers."],
      ],
    },
    { type: "h", text: "3. The Firm’s position on the Code" },
    { type: "p", text: "The Firm is a London-based investment manager specialising in European corporate debt. The funds managed by the Firm do not invest in listed equities as a core strategy, although they may hold equity interests from time to time, for example as a result of a restructuring." },
    { type: "p", text: "The Firm has chosen not to formally commit to the Code. The Firm’s approach to engagement with issuers and their management is determined on a pan-European basis and applied consistently across all of the jurisdictions in which the Firm invests. Consequently, the Firm does not consider it appropriate to commit to a voluntary code of practice relating to an individual jurisdiction. In addition, having regard to the nature, scale and complexity of its business, the Firm does not consider the reporting requirements associated with becoming a signatory to the Code to be proportionate at this time." },
    { type: "p", text: "However, the Firm is supportive of the spirit and aims of good stewardship as contained within the Code, and its alternative investment strategy, set out in section 4 below, takes into consideration the principles of the Code." },
    { type: "h", text: "4. Alternative investment strategy" },
    { type: "p", text: "As an investor in corporate debt, the Firm’s approach to stewardship focuses on protecting and enhancing the value of its funds’ credit investments over the life of each investment. In particular, the Firm’s approach includes:" },
    {
      type: "ul",
      items: [
        "**Due diligence:** undertaking credit research and due diligence on issuers before investing, including consideration of governance and other material environmental, social and governance (“ESG”) risks.",
        "**Documentation:** reviewing bond and loan documentation, including covenant and other creditor protections, and seeking to improve terms in primary issuance where the opportunity arises.",
        "**Monitoring:** monitoring issuers’ financial performance, credit quality and disclosures on an ongoing basis.",
        "**Engagement:** engaging with issuer management, sponsors and their advisers where appropriate, for example in relation to refinancings, amendments, covenant waivers or other material events.",
        "**Creditor rights:** participating in creditor groups and restructurings, and exercising the funds’ rights as creditors (including in relation to consents, waivers and amendments), in the best interests of the funds and their investors.",
        "**Equity interests:** where equity interests are received, for example following a restructuring, exercising any rights attached to them in the best interests of the funds and their investors.",
      ],
    },
    { type: "p", text: "Any conflicts of interest arising in the course of these activities are identified and managed in accordance with the Firm’s Conflicts of Interest Policy." },
    { type: "h", text: "5. Shareholder Rights Directive" },
    { type: "p", text: "Under COBS 2.2B, which implements the requirements of the revised Shareholder Rights Directive in the UK, the Firm must either publicly disclose an engagement policy, together with an annual statement on how that policy has been implemented, or publicly disclose a clear and reasoned explanation of why it has chosen not to do so." },
    { type: "p", text: "The Firm does not invest in shares traded on a regulated market or comparable market as a core strategy. Such holdings are expected to arise only occasionally, for example as a result of a restructuring, and are not an integral component of the Firm’s investment strategy. The Firm has therefore elected not to publish an engagement policy. Where the funds do hold such shares, the Firm will exercise the associated rights in the best interests of the funds and their investors, as described in section 4 above." },
    { type: "h", text: "6. Review" },
    { type: "p", text: "This statement is reviewed at least annually and updated where necessary to reflect changes in circumstances and actual practice. Should the Firm’s position change, it will review its commitment to the Code and its approach under COBS 2.2B and make appropriate disclosure at that time." },
    { type: "p", text: "Last reviewed: October 2026. For further details, contact Compliance: compliance@northlight.co.uk" },
  ],
};

const sfdrDisclosure: LegalDoc = {
  slug: "sfdr-disclosure",
  title: "SFDR Disclosure",
  blocks: [
    {
      type: "p",
      text: "All funds of Northlight Group are managed taking environmental, social, and governance (“ESG”) factors into account as the Portfolio Manager considers that ESG issues can influence investment risk and return. Unless otherwise specified in a fund’s documentation, our funds do not promote environmental or social characteristics or have specific sustainable investment objectives. This means that whilst ESG risks and factors are considered, they may or may not impact the portfolio construction and investment decisions of the different investment teams.",
    },
  ],
};

const mifidpru8Disclosure: LegalDoc = {
  slug: "mifidpru-8-disclosure",
  title: "MIFIDPRU 8 Disclosure",
  subtitle: "Covering the remuneration period 01/01/2025 to 31/12/2025 (“Remuneration Period”) – Published 03/09/2026",
  blocks: [
    { type: "p", text: "Northlight Group LLP is authorised and regulated by the Financial Conduct Authority (the “FCA”). The Firm is a UK domiciled discretionary investment manager to professional clients, regulated and unregulated collective investment schemes. The Firm conducts agency business and does not operate a trading book or hold client money or assets. Northlight is dual-regulated by the FCA under the ‘Markets in Financial Instruments Directive’ (“MiFID”) and the ‘Alternative Investment Fund Managers Directive’ (“AIFMD”) as a Collective Portfolio Management Investment Firm (“CPMI Firm”) and so it is subject to FCA Rules on remuneration. The Firm is classified as a “Small and Non-Interconnected Investment Firm” (“SNI Firm”) and so makes this disclosure in accordance with the requirements contained within MIFIDPRU 8.6. The relevant rules and guidance for the Firm’s remuneration code is contained within the FCA’s SYSC Sourcebook of the FCA’s Handbook." },
    { type: "p", text: "CPMI firms are required to make a remuneration disclosure in respect of the whole of their business, i.e. MiFID and AIFMD. As a CPMI Firm, Northlight is subject to the Remuneration Code contained at SYSC 19B for the AIFM business and those sections of SYSC 19G relevant to an SNI Firm for the non-AIFM business. The disclosure requirements have been prepared in line with both remuneration codes under SYSC 19B and SYSC 19G. The remuneration policy includes the most stringent requirements of each Remuneration Code." },
    { type: "h", text: "Proportionality" },
    { type: "p", text: "The Firm has determined the Remuneration policy’s compliance with the principles scheduled in SYSC 19B.1.5 to 19B.1.24 inclusive and in accordance with the relevant requirements in SYSC 19G in a way which is appropriate to its size, internal organisation and the nature, scope and complexity of its business model and activities." },
    { type: "h", text: "Application of the Requirements" },
    { type: "p", text: "This disclosure is made annually on the date the Firm publishes its annual financial statements. As appropriate, this disclosure is made more frequently, for example if there is a major change to the Firm’s business model." },
    { type: "h", text: "Remuneration Policies and Practices" },
    { type: "p", text: "The Remuneration Code (the “Code”) covers an individual’s total remuneration — fixed and variable. The Firm incentivises staff through a combination of the two." },
    { type: "p", text: "This disclosure sets out qualitative and quantitative information on the Firm’s remuneration processes and practices." },
    { type: "h", text: "A. Qualitative Information", level: 3 },
    { type: "p", text: "The Firm must establish, implement and maintain remuneration policies, procedures and practices that are consistent with and promote effective risk management and do not encourage excessive risk taking." },
    { type: "p", text: "The Firm ensures that the remuneration policy and its practical application are consistent with the Firm’s business strategy, objectives and long-term interests." },
    { type: "p", text: "Given the nature and small size of our business, remuneration for all employees is set by the Senior Management of the Firm. Staff receive a salary which reflects their market value, responsibilities and experience. All staff may also receive variable remuneration, such as an annual bonus, where the individual operates within the risk appetite of the company and has demonstrated appropriate behaviour." },
    { type: "p", text: "Variable remuneration is intended to reflect contribution to the Firm’s overall success. Staff are assessed throughout the year and rated based on company and individual performance. The performance assessment considers both financial measures and non-financial measures such as productivity/efficiency and quality, risk management, people and culture, customer focus and growth and innovation." },
    { type: "p", text: "The Firm’s linkage between variable remuneration and performance is based upon the following tenets:" },
    {
      type: "ul",
      items: [
        "Attraction and retention of staff members",
        "Link a proportion of a staff member’s total compensation to the Firm’s performance",
        "Discourage excessive risk-taking",
        "Ensure client interests are not negatively impacted",
      ],
    },
    { type: "p", text: "Aligning the interest of senior staff members via long-term incentive awards does not currently apply." },
    { type: "h", text: "B. Quantitative Information", level: 3 },
    { type: "p", text: "With respect to the financial year ending 31st December 2025 the total amount of remuneration awarded to all staff, including the split of fixed and variable remuneration, was as follows:" },
    {
      type: "table",
      head: ["", "GBP"],
      rows: [
        ["Fixed remuneration", "900,508"],
        ["Variable remuneration", "1,325,353"],
      ],
      total: ["Total", "2,225,861"],
    },
  ],
};

const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Notice",
  blocks: [
    { type: "h", text: "1. Who we are and how to contact us" },
    { type: "p", text: "Northlight Group LLP (“Northlight”, “we”, “us” or “our”) is the controller of your personal data. This means we decide how and why it is used." },
    {
      type: "ul",
      items: [
        "**Registered in England and Wales:** No. OC348379",
        "**Address:** 33 Glasshouse Street, London W1B 5DG",
        "**Regulated by:** the Financial Conduct Authority 506925",
        "**ICO registration number:** ZA439748",
        "**Privacy contact:** compliance@northlight.co.uk or +44 (0)20 7518 9235",
        "**Data Protection Officer:** Nicolas Mueller",
      ],
    },
    { type: "p", text: "If you have any question about this notice or how we handle your data, please contact us using the details above." },
    { type: "h", text: "2. Who this notice applies to" },
    { type: "p", text: "This notice explains how we use personal data about people outside Northlight with whom we deal. That includes:" },
    {
      type: "ul",
      items: [
        "prospective and existing investors and clients, and where they are companies or other entities, their directors, officers, employees, owners and other representatives;",
        "visitors to our website and users of our investor portal;",
        "staff of our service providers, suppliers and other business contacts; and",
        "anyone else who contacts us by email, phone, post or through our website.",
      ],
    },
    { type: "p", text: "If you give us personal data about another person, such as a colleague or a beneficial owner, please share this notice with them." },
    { type: "p", text: "We may give you a separate, more specific notice when you invest in one of our funds or enter into an agreement with us. That notice should be read together with this one. This notice does not cover Northlight’s own staff or job applicants, who receive their own notices." },
    { type: "h", text: "3. What personal data we collect" },
    {
      type: "table",
      head: ["Type of data", "Examples"],
      rows: [
        ["Identity", "Name, title, job title, signature, date of birth"],
        ["Contact", "Business and home address, email address, phone numbers"],
        ["Professional", "Employer, role, employment history, regulatory status"],
        ["Due diligence", "Copies of passports or ID, proof of address, source of wealth or funds, tax residence, sanctions and politically exposed person checks"],
        ["Investment", "Investment activity, holdings, preferences and eligibility"],
        ["Communications", "Emails, letters, call notes and meeting records; recorded calls where the law requires it"],
        ["Marketing", "Your marketing preferences and how you respond to our messages"],
        ["Technical", "IP address, browser type and version, device information, time zone, location and how you use our website"],
      ],
    },
    { type: "h", text: "4. How we collect it" },
    { type: "p", text: "Most of the data we hold comes from you, when you contact us, request information, fill in forms, invest or use our website." },
    { type: "p", text: "We also receive data from other sources:" },
    {
      type: "ul",
      items: [
        "your employer or the entity you represent;",
        "introducers, placement agents, distributors and other intermediaries;",
        "fund administrators and other service providers acting for our funds;",
        "identity verification, sanctions screening and due diligence providers; and",
        "public sources such as Companies House, regulators’ registers, news media and professional networking sites.",
      ],
    },
    { type: "p", text: "**Our website.** When you visit our website, we collect technical data automatically using cookies and similar technologies. We only set non-essential cookies, such as analytics cookies, where the law allows." },
    { type: "h", text: "5. Why we use it and our lawful bases" },
    { type: "p", text: "The law only lets us use personal data where we have a “lawful basis”. The table sets out what we use your data for and the basis we rely on." },
    {
      type: "table",
      head: ["What we use it for", "Lawful basis"],
      rows: [
        ["Checking whether you are eligible to invest, and carrying out anti-money laundering, know-your-client and sanctions checks", "Legal obligation; steps before entering into a contract with you; our legitimate interest in managing financial crime risk"],
        ["Managing your investment and providing our services", "Performance of a contract; legal obligation"],
        ["Corresponding with you and dealing with your enquiries", "Our legitimate interest in running our business and responding to people who contact us"],
        ["Sending you information about our funds, services and events, including by email", "Our legitimate interest in promoting our business; your consent where the law requires it for electronic marketing"],
        ["Running, securing and improving our website", "Our legitimate interest in providing a secure, working website; your consent for non-essential cookies where required"],
        ["Meeting our regulatory, tax and reporting obligations, including to the FCA and HMRC", "Legal obligation"],
        ["Keeping business records and dealing with professional advisers and auditors", "Our legitimate interest in running our business properly; legal obligation"],
        ["Establishing, exercising or defending legal claims", "Our legitimate interest in protecting our rights"],
      ],
    },
    { type: "p", text: "You can opt out of marketing at any time using the link in our emails or by contacting IR@northlight.co.uk." },
    { type: "p", text: "Where we rely on legitimate interests, we have weighed our interests against your rights. You can ask us for more information about that assessment." },
    { type: "p", text: "We will only use your data for a new purpose if it is compatible with the original one, or if the law otherwise allows it. Otherwise we will tell you first." },
    { type: "p", text: "**If you do not provide data.** You do not have to give us personal data to browse our website or contact us. If you want to invest, we need the information required for legal and regulatory checks; without it we cannot accept your investment." },
    { type: "h", text: "6. Special category and criminal offence data" },
    { type: "p", text: "We do not set out to collect special category data, such as information about health, ethnic origin, political opinions or religious beliefs. We may hold it incidentally, for example if you include it in an email, or if a due diligence check shows that you hold a political position." },
    { type: "p", text: "Our anti-money laundering and sanctions checks may reveal information about criminal convictions or allegations. We only use this data where the law permits, mainly to prevent and detect financial crime and meet our regulatory obligations." },
    { type: "h", text: "7. Who we share it with" },
    { type: "p", text: "We do not sell your personal data. We share it only where needed for the purposes in section 5, with:" },
    {
      type: "ul",
      items: [
        "other companies in the Northlight group, for reporting, administration and business development;",
        "the funds we manage and their administrators, depositaries and other service providers;",
        "introducers, placement agents and distributors involved in your relationship with us;",
        "professional advisers, including lawyers, auditors, bankers and insurers;",
        "IT, cloud hosting, email, CRM and identity verification providers;",
        "trading counterparties, where relevant to your investment;",
        "regulators, tax authorities, law enforcement and courts, including the FCA and HMRC, where the law requires or permits it; and",
        "a buyer or successor if we sell or restructure all or part of our business.",
      ],
    },
    { type: "p", text: "Our service providers may only use your data on our instructions and must keep it secure." },
    { type: "h", text: "8. International transfers" },
    { type: "p", text: "Some of the people we share data with are outside the UK, including in the Cayman Islands, Switzerland and the European Economic Area." },
    { type: "p", text: "When we transfer your data outside the UK, we make sure it stays protected in one of these ways:" },
    {
      type: "ul",
      items: [
        "**Adequacy:** the UK government has recognised the country as providing adequate protection. This currently includes the EEA countries and Switzerland.",
        "**Contractual safeguards:** we use the ICO’s International Data Transfer Agreement, or the UK Addendum to the EU standard contractual clauses. We use these for transfers to the Cayman Islands and other countries without UK adequacy.",
      ],
    },
    { type: "p", text: "You can ask us for more information about these safeguards, or for a copy of them, by contacting compliance@northlight.co.uk." },
    { type: "h", text: "9. How long we keep it" },
    { type: "p", text: "We generally keep personal data about our dealings with you for 7 years after our last contact or transaction with you. Some records must be kept longer by law or regulation, for example anti-money laundering records or records relevant to a legal claim." },
    { type: "p", text: "Website analytics and technical data are kept for 12 months. Marketing contact details are kept until you opt out or we stop dealing with you, after which we keep a short suppression record so we do not contact you again." },
    { type: "p", text: "When we no longer need your data, we securely delete it or anonymise it so it can no longer identify you." },
    { type: "h", text: "10. How we keep it secure" },
    { type: "p", text: "We use technical and organisational measures to protect your data, including access controls, encryption where appropriate, staff training and due diligence on our service providers. Only people who need your data for their work can access it." },
    { type: "p", text: "If a data breach is likely to put you at high risk, we will tell you without undue delay." },
    { type: "h", text: "11. Automated decision-making" },
    { type: "p", text: "We do not make decisions about you based solely on automated processing that have legal or similarly significant effects. Our screening tools may flag matters for review, but a member of our compliance team always makes the final decision." },
    { type: "h", text: "12. Your rights" },
    { type: "p", text: "Under UK data protection law you have the right to:" },
    {
      type: "ul",
      items: [
        "**access** your personal data and receive a copy of it;",
        "**correct** data that is inaccurate or incomplete;",
        "**erase** your data in certain circumstances;",
        "**restrict** how we use your data in certain circumstances;",
        "**object** to our use of your data where we rely on legitimate interests, and to stop direct marketing at any time;",
        "**transfer** data you gave us to another organisation, where we process it by automated means on the basis of consent or a contract; and",
        "**withdraw consent** at any time, where we rely on consent. This does not affect anything we did before you withdrew it.",
      ],
    },
    { type: "p", text: "To use any of these rights, contact compliance@northlight.co.uk. We may ask you to confirm your identity first." },
    { type: "p", text: "We will respond without undue delay and normally within one month of receiving your request, or of receiving any information we need to confirm your identity or clarify it. For complex or numerous requests we may extend this by up to two further months and will tell you why. We will make reasonable and proportionate searches for your data." },
    { type: "p", text: "There is normally no fee. We may charge a reasonable fee, or refuse, where a request is manifestly unfounded or excessive. Some rights have exceptions, for example where we must keep data to meet a legal obligation." },
    { type: "h", text: "13. Complaints" },
    { type: "p", text: "If you are unhappy with how we have handled your personal data, please complain to us first so we can try to put it right. Email compliance@northlight.co.uk with “Data protection complaint” in the subject line, or write to us at the address in section 1." },
    { type: "p", text: "We will acknowledge your complaint within 30 days. We will look into it and tell you the outcome without undue delay." },
    { type: "p", text: "You also have the right to complain to the Information Commissioner’s Office (ICO), the UK regulator for data protection:" },
    {
      type: "ul",
      items: [
        "**Website:** https://ico.org.uk/make-a-complaint/",
        "**Phone:** 0303 123 1113",
        "**Post:** Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF",
      ],
    },
    { type: "p", text: "The ICO will usually expect you to have raised your complaint with us first." },
    { type: "h", text: "14. Changes to this notice" },
    { type: "p", text: "We review this notice regularly and will post any changes on this page. If we make significant changes, we will tell you directly where we have your contact details." },
    {
      type: "table",
      head: ["Version", "Date", "Summary"],
      rows: [
        ["2.0", "October 2026", "Updated for UK GDPR, the Data (Use and Access) Act 2025 and current UK transfer rules"],
      ],
    },
  ],
};

const financialPromotions: LegalDoc = {
  slug: "financial-promotions-disclaimer",
  title: "Financial Promotions Disclaimer",
  updated: "Q2 2024",
  blocks: [
    {
      type: "p",
      text: "This document is issued by Northlight Group LLP (the “Investment Manager”) which is authorised and regulated by the Financial Conduct Authority in the United Kingdom with firm reference number 506925 and provides information about the Northlight European Fundamental Credit Fund, the MFM Northlight European Credit Opportunities Fund (the “Funds” or individually the “Fund”) and the Investment Manager. The Investment Manager is registered as an Exempt Reporting Adviser with the US Securities and Exchange Commission.",
    },
    {
      type: "p",
      text: "The distribution of this document is restricted by law. It has been made available only to a selected group of recipients. The information contained in this document is also confidential. You must not copy this document or pass it to anyone else. If you (or the legal person you represent) did not receive this document directly from the Investment Manager, please return it to the Investment Manager.",
    },
    {
      type: "p",
      text: "The Investment Manager will not act for you (or any other investor) and will not be responsible to you for providing protections afforded to the clients of the Investment Manager’s investment services. Without prejudice to the generality of the foregoing, the Investment Manager does not provide any investment service to you (including, without limitation, the provision of investment advice, or the reception and transmission of orders).",
    },
    {
      type: "p",
      text: "This document is not, and must not be treated as, investment advice, investment recommendations, or investment research. Recipients of this document must not take (or refrain from taking) any investment decision on the basis of the information set out in this document. Before making any investment decision, you should seek independent investment, legal, tax, accounting or other professional advice as appropriate, none of which is offered to you by the Investment Manager. The Investment Manager accepts no duty of care to you in relation to investments.",
    },
    {
      type: "p",
      text: "This document is for information purposes only. This document is not intended to constitute an offering or placement, or the solicitation of an offer to subscribe for, units or shares in the Funds, in any jurisdiction. Any such offering or placement, if made, would be made only by way of a prospectus (or other formal offering document) for the Funds and only in jurisdictions in which such an offering or placement would be lawful. The offering document for the Funds will contain important information concerning risk factors and other material information concerning the Funds. An investment into the Funds may expose a person accepted as an investor in the Funds to a significant risk of losing some or all of the amount invested.",
    },
    {
      type: "p",
      text: "The information contained in this document should not be construed as either projections or predictions. The Investment Manager makes no representation or warranty, express or implied, except as required by law or in the case of fraud, regarding the accuracy, completeness or adequacy of the information. Past performance cannot be relied on as a guide to future performance.",
    },
    { type: "p", text: "In addition, the following restrictions apply to the distribution of this document." },

    { type: "h", text: "Persons in the European Economic Area and the United Kingdom" },
    {
      type: "p",
      text: "In relation to each member state of the EEA and the United Kingdom (each a “Relevant State”), this document may only be distributed to the extent that: (1) the Fund is permitted to be marketed to professional investors in the Relevant State in accordance with the Alternative Investment Fund Managers Directive (2011/61/EU) (as implemented into the local law/regulation of the Relevant State); or (2) this document may otherwise be lawfully distributed in that Relevant State (including at the initiative of the investor). No key information document will be prepared in respect of the Fund in accordance with Regulation (EU) No 1286/2014 (as implemented into the local law/regulation of the Relevant State). Accordingly, investment in the Funds will not be available to, and no person may currently advise on, offer or sell investments in the Funds for or to, any retail client (as defined in the EU’s re-cast Markets in Financial Instruments Directive (2014/65/EU)) as implemented into the local law/regulation of any Relevant State.",
    },

    { type: "h", text: "Persons in the United Kingdom" },
    {
      type: "p",
      text: "This document is being issued in the United Kingdom by the Investment Manager to and/or is directed only at persons who are professional investors for the purposes of the Alternative Investment Fund Managers Regulations 2013, as amended and is accordingly exempt from the financial promotion restriction in Section 21 of the Financial Services and Markets Act 2000 (“FSMA”) in accordance with article 29(3) of the FSMA (Financial Promotions) Order 2005. The opportunity to invest in the Funds is only available to such persons in the United Kingdom and this document must not be relied or acted upon by any other persons in the United Kingdom.",
    },

    { type: "h", text: "Persons in the United States" },
    {
      type: "p",
      text: "This document is not intended for distribution in the United States or for the account of U.S. persons (as defined in Regulation S under the United States Securities Act of 1933, as amended (the “Securities Act”)) except to persons who are “qualified purchasers” (as defined in section 2(a)(51) of the United States Investment Company Act of 1940, as amended (the “Investment Company Act”)) and “accredited investors” (as defined in Rule 501(a) under the Securities Act). The Funds’ securities will not be registered under the U.S. Securities Act of 1933, as amended, or qualified under any applicable state securities statutes. The Funds will not be registered as an investment company under the Investment Company Act.",
    },

    { type: "h", text: "Persons in Switzerland" },
    {
      type: "p",
      text: "The offer and marketing of interests of the Funds in Switzerland will be exclusively made to, and directed at, qualified investors (the “Qualified Investors”), as defined in Article 10(3) of the Swiss Collective Investment Schemes Act (“CISA”) in conjunction with Art. 4(4) of the Swiss Federal Act on Financial Services (“FinSA”), i.e. institutional clients, at the exclusion of professional clients with opting-out pursuant to Art. 5(3) FinSA (“Excluded Qualified Investors”). Accordingly, the Funds will not be registered with the Swiss Financial Market Supervisory Authority (“FINMA”).",
    },
    {
      type: "p",
      text: "The representative of the Northlight European Fundamental Credit Fund in Switzerland is Auris Wealth Management S.A., registered office at 15 Boulevard des Philosophes, 1025 Geneva, Switzerland. The Paying Agent of the Northlight European Fundamental Credit Fund in Switzerland is Banque Heritage S.A., Switzerland, with registered office at Route de Chêne 61, 1208 Geneva, Switzerland. The representative of the MFM Northlight European Credit Opportunities Fund in Switzerland is FundPartner Solutions (Suisse) SA, with registered office at Route des Acacias 60, 1211 Geneva 73, Switzerland. The Paying Agent of the MFM Northlight European Credit Opportunities Fund in Switzerland is Pictet & Cie Bank SA, with registered office at Route des Acacias 60, 1211 Geneva 73, Switzerland. This document and/or any other offering or marketing materials relating to the interests of the Funds may be made available in Switzerland solely to Qualified Investors, at the exclusion of Excluded Qualified Investors. The legal documents relating to the interests in the Funds may be obtained free of charge from the relevant Fund’s representative.",
    },

    { type: "h", text: "Persons in Japan" },
    {
      type: "p",
      text: "The shares in the Funds have not been and will not be registered pursuant to Article 4, Paragraph 1 of the Financial Instruments and Exchange Law of Japan (Law no. 25 of 1948, as amended) and, accordingly, none of the shares in the Funds nor any interest therein may be offered or sold, directly or indirectly, in Japan or to, or for the benefit of, any Japanese person or to others for re-offering or resale, directly or indirectly, in Japan or to any Japanese person except under circumstances which will result in compliance with all applicable laws, regulations and guidelines promulgated by the relevant Japanese governmental and regulatory authorities and in effect at the relevant time. For this purpose, a “Japanese person” means any person resident in Japan, including any corporation or other entity organised under the laws of Japan.",
    },

    { type: "h", text: "Persons in other jurisdictions" },
    {
      type: "p",
      text: "The distribution of this document may be further restricted by law. Accordingly, this document may not be used in any jurisdiction except under circumstances that will result in compliance with any applicable laws and regulations. Persons to whom this document is communicated should inform themselves about and observe any such restrictions. Any failure to comply with these restrictions may constitute a violation of applicable securities law.",
    },
  ],
};

const emailDisclaimer: LegalDoc = {
  slug: "email-disclaimer",
  title: "Email Disclaimer",
  blocks: [
    {
      type: "p",
      text: "The information contained in this e-mail message and any attachments hereto is confidential and is intended solely for the person to whom it is addressed. Any use, disclosure, reproduction, modification or distribution other than by the intended recipient, is strictly prohibited. If you are not the intended recipient or have received this message in error, please notify us immediately by return e-mail and destroy the message.",
    },
    {
      type: "p",
      text: "This message does not constitute an offer to sell, placement or solicitation of an offer to buy interests in any fund or product and may not be used to make such an offer. Therefore no person receiving a copy of this email may treat it as constituting an offer, placement or invitation to buy or sell any investments.",
    },
    {
      type: "p",
      text: "Unless otherwise stated, the information contained herein may only be considered as opinion, which may be based on assumptions, historical information and other data that the sender in their sole discretion considers appropriate or reasonable. It may not be accurate, complete or current, and the sender has no liability with respect thereto. Moreover, this information should not be relied upon by you for the maintenance of your books and records or for tax, accounting, legal, financial reporting, disclosure or other purposes. Certain information provided may be subject to change without notice and we have no obligation to update you.",
    },
    {
      type: "p",
      text: "Our messages are checked for viruses but please note that we do not accept liability for any viruses which may be transmitted in or with this message.",
    },
    {
      type: "p",
      text: "Northlight is committed to keeping your personal data secure. We will process any personal data we collect from you in accordance with the EU General Data Protection Regulation 2016/679 including as applicable in the United Kingdom, where it is supplemented by the Data Protection Act 2018.",
    },
    {
      type: "p",
      text: "We deem to have your consent to hold your information on our systems and be able to send you information on the Northlight funds and/or relevant marketing emails. Your consent can be withdrawn at any time by notifying us at IR@northlight.co.uk.",
    },
    {
      type: "p",
      text: "Our Privacy Policy is available on our website and provides further information about how we store and use personal data.",
    },
    {
      type: "p",
      text: "Northlight Group LLP is authorised and regulated by the UK Financial Conduct Authority with firm reference number 506925. Registered address 33 Glasshouse Street, London, W1B 5DG and is registered with the US Securities and Exchange Commission as an exempt reporting adviser. Registered in the UK with partnership registration number OC348379.",
    },
  ],
};

export const legalDocs: LegalDoc[] = [
  ukStewardshipCode,
  sfdrDisclosure,
  mifidpru8Disclosure,
  privacyPolicy,
  financialPromotions,
  emailDisclaimer,
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
