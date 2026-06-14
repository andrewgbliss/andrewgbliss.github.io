export type Pricing = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export const pricing: Pricing[] = [
  {
    title: "Basic",
    description: "Website development",
    price: "$100",
    features: ["Domain Registration", "Vercel Hosting (1 year)", "1 web page"],
  },
  {
    title: "Advanced",
    description: "Small to medium business",
    price: "$500",
    features: ["Domain Registration", "Vercel Hosting (1 year)", "5 web pages"],
  },
  {
    title: "Custom",
    description: "Advanced features",
    price: "$100 an hour",
    features: [
      "Domain Registration",
      "Vercel Hosting (1 year)",
      "Custom Development",
    ],
  },
];
