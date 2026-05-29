import { website } from "@/lib/website";
import { Metadata, Viewport } from "next";
import { HoverLinks } from "./_components/HoverLinks";

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
    <main className="min-h-screen w-full bg-linear-to-t from-zinc-500 to-zinc-800 md:py-10">
      <div className="mx-auto min-h-screen max-w-4xl border-x md:rounded-2xl border-zinc-300 bg-zinc-100">
        <HoverLinks />
      </div>
    </main>
  );
}
