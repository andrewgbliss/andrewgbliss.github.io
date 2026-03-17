import { website } from "@/lib/website";
import { Metadata } from "next";
import Portfolio from "../_components/Portfolio";

export const metadata: Metadata = {
  title: `${website.name} - Portfolio`,
  description: `${website.name} - Portfolio`,
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: website.name,
    description: website.description,
    images: [
      {
        url: "andy.jpg",
      },
    ],
    type: "website",
    url: `${website.url}/portfolio`,
    siteName: website.name,
  },
  twitter: {
    card: "summary_large_image",
    title: website.name,
    description: website.description,
    images: ["andy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full p-8 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">
      <div className="container mx-auto max-w-5xl page-p">
        <Portfolio />
      </div>
    </div>
  );
}
