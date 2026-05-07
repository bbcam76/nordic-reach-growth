import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "sv";
type Theme = "light" | "dark";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.services": "Services",
    "nav.how": "How It Works",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Book a Call",

    "hero.eyebrow": "Sales Consulting for the Nordics",
    "hero.title": "Scale Your Sales Without the Overhead",
    "hero.subtitle": "Nordic Reach Group helps companies grow through high-performance remote sales — transparent, fair, and built for results.",
    "hero.primary": "Book a Call",
    "hero.secondary": "Get Started",

    "services.title": "What We Do",
    "services.subtitle": "Flexible sales solutions tailored to Nordic B2B companies ready to grow.",
    "services.s1.title": "B2B Telesales",
    "services.s1.desc": "Professional outbound sales teams that represent your brand with care and precision.",
    "services.s1.b1": "Dedicated agents",
    "services.s1.b2": "Quality-first approach",
    "services.s1.b3": "Nordic market expertise",
    "services.s2.title": "Lead Generation",
    "services.s2.desc": "Targeted prospecting that fills your pipeline with qualified, ready-to-talk leads.",
    "services.s2.b1": "Data-driven targeting",
    "services.s2.b2": "Multi-channel outreach",
    "services.s2.b3": "Verified contacts",
    "services.s3.title": "Sales Outsourcing",
    "services.s3.desc": "End-to-end sales operations so you can focus on what you do best — your product.",
    "services.s3.b1": "Full-cycle management",
    "services.s3.b2": "Performance-based",
    "services.s3.b3": "Scalable teams",

    "how.title": "How It Works",
    "how.subtitle": "A simple, transparent process from kickoff to results.",
    "how.s1.title": "We understand your business",
    "how.s1.desc": "Deep dive into your goals, market, and ideal customer profile.",
    "how.s2.title": "We generate leads",
    "how.s2.desc": "Targeted outreach to fill your pipeline with qualified prospects.",
    "how.s3.title": "We close deals",
    "how.s3.desc": "Our trained reps convert conversations into revenue.",
    "how.s4.title": "You scale",
    "how.s4.desc": "Focus on growth while we handle the sales engine.",

    "about.title": "Built on Trust, Not Pressure",
    "about.p1": "Nordic Reach Group was founded with a clear conviction: sales should be fair, transparent, and performance-driven. We saw too many companies struggle with expensive in-house teams or agencies that over-promised and under-delivered.",
    "about.p2": "So we built something different — remote sales teams that are trained to represent your brand with integrity, compensated for results, and committed to long-term partnerships. No hidden fees. No lock-in contracts. Just honest growth.",
    "about.stat1": "Active clients",
    "about.stat2": "Revenue generated",
    "about.stat3": "Retention rate",

    "lead.title": "Let's Grow Together",
    "lead.subtitle": "Leave your details and we'll reach out with a tailored plan.",
    "lead.company": "Company Name",
    "lead.email": "Email",
    "lead.phone": "Phone Number",
    "lead.submit": "Get Your Free Consultation",
    "lead.sending": "Sending…",
    "lead.thanks": "Thank you!",
    "lead.thanksDesc": "We'll be in touch within 24 hours to discuss how we can help your business grow.",

    "contact.title": "Ready to Talk?",
    "contact.subtitle": "Reach out directly or book a call — we'd love to hear about your goals.",
    "contact.cta": "Book a Call",

    "footer.rights": "All rights reserved.",
  },
  sv: {
    "nav.services": "Tjänster",
    "nav.how": "Så fungerar det",
    "nav.about": "Om oss",
    "nav.contact": "Kontakt",
    "nav.cta": "Boka samtal",

    "hero.eyebrow": "Säljkonsultation för Norden",
    "hero.title": "Skala upp din försäljning utan extra kostnader",
    "hero.subtitle": "Nordic Reach Group hjälper företag att växa genom resultatdriven distansförsäljning — transparent, rättvist och byggt för resultat.",
    "hero.primary": "Boka samtal",
    "hero.secondary": "Kom igång",

    "services.title": "Vad vi gör",
    "services.subtitle": "Flexibla säljlösningar anpassade för nordiska B2B-företag som är redo att växa.",
    "services.s1.title": "B2B Telesales",
    "services.s1.desc": "Professionella säljteam som representerar ditt varumärke med omsorg och precision.",
    "services.s1.b1": "Dedikerade säljare",
    "services.s1.b2": "Kvalitet först",
    "services.s1.b3": "Expertis på nordiska marknaden",
    "services.s2.title": "Lead Generation",
    "services.s2.desc": "Riktad prospektering som fyller din pipeline med kvalificerade leads.",
    "services.s2.b1": "Datadriven targeting",
    "services.s2.b2": "Flerkanalsuppsökning",
    "services.s2.b3": "Verifierade kontakter",
    "services.s3.title": "Säljoutsourcing",
    "services.s3.desc": "Heltäckande säljverksamhet så du kan fokusera på det du gör bäst — din produkt.",
    "services.s3.b1": "Helhetsansvar",
    "services.s3.b2": "Prestationsbaserat",
    "services.s3.b3": "Skalbara team",

    "how.title": "Så fungerar det",
    "how.subtitle": "En enkel och transparent process från start till resultat.",
    "how.s1.title": "Vi förstår din verksamhet",
    "how.s1.desc": "Vi sätter oss in i dina mål, din marknad och din ideala kundprofil.",
    "how.s2.title": "Vi genererar leads",
    "how.s2.desc": "Riktad uppsökning för att fylla din pipeline med kvalificerade prospekt.",
    "how.s3.title": "Vi stänger affärer",
    "how.s3.desc": "Våra utbildade säljare omvandlar samtal till intäkter.",
    "how.s4.title": "Du skalar upp",
    "how.s4.desc": "Fokusera på tillväxt medan vi sköter säljmotorn.",

    "about.title": "Byggt på förtroende, inte press",
    "about.p1": "Nordic Reach Group grundades med en tydlig övertygelse: försäljning ska vara rättvis, transparent och resultatdriven. Vi såg för många företag kämpa med dyra interna team eller byråer som lovade för mycket.",
    "about.p2": "Så vi byggde något annorlunda — distansbaserade säljteam som tränats att representera ditt varumärke med integritet, ersätts för resultat och engagerar sig långsiktigt. Inga dolda avgifter. Inga inlåsningsavtal. Bara ärlig tillväxt.",
    "about.stat1": "Aktiva kunder",
    "about.stat2": "Genererad omsättning",
    "about.stat3": "Behållningsgrad",

    "lead.title": "Låt oss växa tillsammans",
    "lead.subtitle": "Lämna dina uppgifter så återkommer vi med en skräddarsydd plan.",
    "lead.company": "Företagsnamn",
    "lead.email": "E-post",
    "lead.phone": "Telefonnummer",
    "lead.submit": "Få din kostnadsfria konsultation",
    "lead.sending": "Skickar…",
    "lead.thanks": "Tack!",
    "lead.thanksDesc": "Vi hör av oss inom 24 timmar för att diskutera hur vi kan hjälpa ditt företag att växa.",

    "contact.title": "Redo att prata?",
    "contact.subtitle": "Hör av dig direkt eller boka ett samtal — vi vill gärna höra om dina mål.",
    "contact.cta": "Boka samtal",

    "footer.rights": "Alla rättigheter förbehållna.",
  },
};

const AppContext = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
