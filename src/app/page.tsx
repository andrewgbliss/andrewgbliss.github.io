import { website } from "@/lib/website";
import { Metadata, Viewport } from "next";
import { HoverLinks } from "./_components/HoverLinks";
import { getPublishedArticles } from "@/lib/data/articles";

export const viewport: Viewport = {
  themeColor: "#ffffff",
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

export default async function Page() {
  const articles = await getPublishedArticles();
  const posts = articles.slice(0, 3).map(({ slug, title, date, tagline }) => ({
    slug,
    title,
    date,
    tagline,
  }));

  return (
    <main className="min-h-screen w-full">
      <HoverLinks posts={posts} />
    </main>
  );
}
