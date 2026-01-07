export interface HeroSlide {
  id: number;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  bgPattern: "gradient" | "dots" | "waves";
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: "Flexible, Secure and Easy to Integrate",
    subheadline: "Digital signature solutions for businesses of all sizes. Fast, reliable, and fully compliant with government regulations.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    bgPattern: "gradient"
  },
  {
    id: 2,
    headline: "Your Trusted Partner for E-Governance",
    subheadline: "Complete support for e-tendering, GST, MCA filings, and all your digital compliance needs.",
    ctaText: "Our Services",
    ctaLink: "/services",
    bgPattern: "dots"
  },
  {
    id: 3,
    headline: "Simplifying Digital Transactions",
    subheadline: "From company registration to trademark protection - we handle all your business compliance requirements.",
    ctaText: "Contact Us",
    ctaLink: "/contact",
    bgPattern: "waves"
  }
];
