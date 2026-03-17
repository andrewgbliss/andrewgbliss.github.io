import { website } from "@/lib/website";
import { Metadata, Viewport } from "next";
import { HoverLinks } from "./_components/HoverLinks";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: website.name,
  description: website.description,
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
    url: website.url,
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

export default function Page() {
  return (
    <div className="p-5 min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-800 to-slate-950">
      123
      <HoverLinks />
    </div>
  );
}
