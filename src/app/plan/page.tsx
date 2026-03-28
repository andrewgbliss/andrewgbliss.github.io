import { website } from "@/lib/website";
import { Metadata, Viewport } from "next";
import { Plan } from "../_components/Plan";

export const viewport: Viewport = {
  themeColor: "#d4d4d8",
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
    <main className="min-h-screen w-full bg-zinc-300">
      <div className="mx-auto min-h-screen max-w-3xl border-x border-zinc-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <Plan />
      </div>
    </main>
  );
}
