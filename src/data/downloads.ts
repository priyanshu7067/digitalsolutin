export interface Download {
  id: number;
  name: string;
  category: string;
  fileUrl: string;
  fileSize: string;
}

export const downloads: Download[] = [
  {
    id: 1,
    name: "Java For NIC E-Procurements",
    category: "Software",
    fileUrl: "#",
    fileSize: "78 MB"
  },
  {
    id: 2,
    name: "emSigner Software",
    category: "Software",
    fileUrl: "#",
    fileSize: "45 MB"
  },
  {
    id: 3,
    name: "DSC Token Driver - Watchdata",
    category: "Drivers",
    fileUrl: "#",
    fileSize: "12 MB"
  },
  {
    id: 4,
    name: "DSC Token Driver - ePass 2003",
    category: "Drivers",
    fileUrl: "#",
    fileSize: "8 MB"
  },
  {
    id: 5,
    name: "DSC Token Driver - Proxkey",
    category: "Drivers",
    fileUrl: "#",
    fileSize: "15 MB"
  },
  {
    id: 6,
    name: "Mozilla Firefox (32 Bit)",
    category: "Browsers",
    fileUrl: "#",
    fileSize: "52 MB"
  },
  {
    id: 7,
    name: "Internet Explorer 11",
    category: "Browsers",
    fileUrl: "#",
    fileSize: "65 MB"
  },
  {
    id: 8,
    name: "Sify Safescrypt Utility",
    category: "Utilities",
    fileUrl: "#",
    fileSize: "22 MB"
  },
  {
    id: 9,
    name: "IRCTC Certificate Installer",
    category: "Certificates",
    fileUrl: "#",
    fileSize: "3 MB"
  },
  {
    id: 10,
    name: "GeM Portal Signing Tool",
    category: "Software",
    fileUrl: "#",
    fileSize: "28 MB"
  },
  {
    id: 11,
    name: "CPPP Signer Utility",
    category: "Utilities",
    fileUrl: "#",
    fileSize: "18 MB"
  },
  {
    id: 12,
    name: "Income Tax DSC Registration Guide",
    category: "Guides",
    fileUrl: "#",
    fileSize: "2 MB"
  },
  {
    id: 13,
    name: "GST Portal Setup Instructions",
    category: "Guides",
    fileUrl: "#",
    fileSize: "1.5 MB"
  },
  {
    id: 14,
    name: "MCA V3 Portal Helper",
    category: "Software",
    fileUrl: "#",
    fileSize: "35 MB"
  },
  {
    id: 15,
    name: "E-Tender Submission Checklist",
    category: "Guides",
    fileUrl: "#",
    fileSize: "500 KB"
  }
];

export const downloadCategories = [...new Set(downloads.map(d => d.category))];
