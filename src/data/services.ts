import { FileSignature, FileText, Calculator, Building, ShieldCheck, Briefcase, Globe, Users } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: typeof FileSignature;
  summary: string;
  description: string;
  documents: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "digital-signature",
    title: "Digital Signature",
    icon: FileSignature,
    summary: "Class 2 & Class 3 Digital Signature Certificates for secure online transactions and e-filing.",
    description: "We provide comprehensive technical support for digital signatures, helping businesses and individuals obtain and manage their Digital Signature Certificates (DSC). Our services cover Class 2 and Class 3 certificates for various purposes including income tax filing, GST registration, MCA filings, and e-tendering.",
    documents: ["Aadhar Card", "PAN Card", "Passport Size Photo", "Mobile Number", "Email ID"],
    faqs: [
      { question: "What is a Digital Signature Certificate?", answer: "A Digital Signature Certificate (DSC) is a secure digital key that certifies the identity of the holder. It is issued by a Certifying Authority and contains information about the user's identity." },
      { question: "How long does it take to get a DSC?", answer: "Typically, a DSC can be issued within 1-2 working days after document verification." },
      { question: "What is the validity period?", answer: "DSCs are usually valid for 1-3 years depending on the type and class of certificate." }
    ]
  },
  {
    slug: "tender-suvidha",
    title: "Tender Suvidha",
    icon: Briefcase,
    summary: "Complete e-tendering solutions for government and private sector procurement.",
    description: "Our Tender Suvidha service provides end-to-end support for e-tendering processes. We help businesses navigate government procurement portals, prepare bid documents, and submit tenders electronically with proper digital signatures.",
    documents: ["Company Registration", "GST Certificate", "PAN Card", "DSC Class 3", "Bank Details", "Past Work Experience"],
    faqs: [
      { question: "Which portals do you support?", answer: "We support all major government e-procurement portals including CPPP, GeM, state-level portals, and private sector platforms." },
      { question: "Can you help with bid preparation?", answer: "Yes, we provide complete bid preparation services including technical and financial bid documentation." }
    ]
  },
  {
    slug: "gst-registration",
    title: "GST Registration & Filing",
    icon: Calculator,
    summary: "Complete GST registration and monthly/quarterly return filing services.",
    description: "We offer comprehensive GST services including new registration, return filing, amendments, and compliance support. Our team ensures timely filing and helps you avoid penalties while maximizing input tax credits.",
    documents: ["PAN Card", "Aadhar Card", "Business Registration Proof", "Bank Statement", "Address Proof", "Photograph"],
    faqs: [
      { question: "Who needs GST registration?", answer: "Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services) must register for GST." },
      { question: "How often do returns need to be filed?", answer: "GST returns are typically filed monthly or quarterly depending on your turnover and scheme." }
    ]
  },
  {
    slug: "company-registration",
    title: "Company Registration",
    icon: Building,
    summary: "Private Limited, LLP, OPC, and Partnership firm registration services.",
    description: "We provide complete company incorporation services for all business structures. From name reservation to certificate of incorporation, we handle the entire process ensuring compliance with MCA regulations.",
    documents: ["Director ID Proof", "Director Address Proof", "Registered Office Proof", "NOC from Owner", "Digital Signatures"],
    faqs: [
      { question: "How long does company registration take?", answer: "A Private Limited Company can typically be registered within 10-15 working days." },
      { question: "What is the minimum capital required?", answer: "There is no minimum capital requirement for Private Limited Companies in India." }
    ]
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    icon: ShieldCheck,
    summary: "Protect your brand identity with trademark registration and monitoring.",
    description: "Secure your brand name, logo, and business identity with our trademark registration services. We handle the complete process from trademark search to registration and provide ongoing monitoring services.",
    documents: ["Applicant ID Proof", "Brand Logo", "Business Registration", "Power of Attorney", "Product/Service Details"],
    faqs: [
      { question: "How long is trademark protection valid?", answer: "A registered trademark is valid for 10 years and can be renewed indefinitely." },
      { question: "Can I trademark a business name?", answer: "Yes, business names, logos, taglines, and even sounds can be trademarked." }
    ]
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    icon: FileText,
    summary: "Individual and business income tax return filing with maximum refund guarantee.",
    description: "Our expert tax consultants help individuals and businesses file accurate income tax returns on time. We ensure maximum eligible deductions and help you claim refunds quickly.",
    documents: ["PAN Card", "Aadhar Card", "Form 16", "Bank Statements", "Investment Proofs", "Previous Returns"],
    faqs: [
      { question: "What is the deadline for filing ITR?", answer: "The standard deadline is July 31st for individuals, but this may be extended by the government." },
      { question: "Can I file returns for previous years?", answer: "Yes, belated returns can be filed within specified time limits with applicable penalties." }
    ]
  },
  {
    slug: "iso-certification",
    title: "ISO Certification",
    icon: Globe,
    summary: "ISO 9001, 14001, 27001 and other certification assistance for businesses.",
    description: "We help businesses achieve international quality standards through ISO certification. Our consultants guide you through the entire certification process from gap analysis to final audit.",
    documents: ["Company Registration", "Quality Manual", "Process Documents", "Existing Certificates", "Organization Chart"],
    faqs: [
      { question: "How long does ISO certification take?", answer: "The certification process typically takes 2-4 months depending on organization size and readiness." },
      { question: "Is ISO certification mandatory?", answer: "While not mandatory, ISO certification enhances credibility and is often required for government tenders." }
    ]
  },
  {
    slug: "hr-services",
    title: "HR & Payroll Services",
    icon: Users,
    summary: "Complete HR management, payroll processing, and compliance services.",
    description: "Our HR services cover everything from recruitment to payroll processing. We ensure compliance with labor laws, manage employee documentation, and provide complete HR outsourcing solutions.",
    documents: ["Employee Details", "Salary Structure", "PF/ESI Registration", "Bank Details", "Attendance Records"],
    faqs: [
      { question: "What payroll services do you offer?", answer: "We handle complete payroll processing including salary calculation, tax deductions, payslip generation, and statutory compliance." },
      { question: "Do you handle statutory compliance?", answer: "Yes, we manage PF, ESI, professional tax, and other statutory requirements." }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
