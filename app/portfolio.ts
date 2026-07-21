export type Company = {
  name: string;
  description: string;
  category: string;
  year: string;
  url: string | null;
  logoPath: string | null;
  enabled: boolean;
  placeholder: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
};

export const companies: Company[] = [
  { name: "Turtle Design", description: "We design world-class teams that design world-class products.", category: "Design Services", year: "2016", url: "https://turtle.design", logoPath: "/logos/turtle.svg", enabled: true, placeholder: false },
  { name: "Agency Owners", description: "Building the operating platform for owner-led agencies.", category: "Design Services", year: "2026", url: "https://agencyowners.com", logoPath: "/logos/agency-owners.svg", enabled: true, placeholder: false },
  { name: "Obilazak", description: "Venture studio focused on unlocking opportunities in Croatia.", category: "Venture Studio", year: "2026", url: "https://obilazak.com", logoPath: "/logos/obilazak.svg", enabled: true, placeholder: false },
  { name: "Future Company", description: "Reserved for a future Zaks & Co venture. Have an idea?", category: "Placeholder", year: "—", url: null, logoPath: "/logos/zaks-co.svg", enabled: false, placeholder: true, ctaLabel: "Send us your pitch", ctaUrl: "mailto:the@zaks.co?subject=Pitch%20for%20Zaks%20%26%20Co" }
];
