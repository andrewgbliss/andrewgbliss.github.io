import { getPublishedArticles, getTags } from "@/lib/data/articles";
import { Suspense } from "react";
import { Metadata } from "next";
import { website } from "@/lib/data/website";
import { Articles } from "../articles/_components/Articles";

export default async function ArticlesFrontPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = await getPublishedArticles();
  return (
    <>
      <div className="relative min-h-screen flex flex-col pt-16 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <main className="min-h-screen grow flex items-start justify-center py-12">
          <div className="w-full min-h-screen">
            <div className="container mx-auto sm:max-w-4xl relative z-10 flex flex-col items-center justify-center text-white min-h-screen page-p">
              <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">
                  Articles about {slug}
                </h1>
                <p className="text-lg">Stay updated with the latest in tech</p>
              </header>
              <div className="w-full min-h-screen">
                <Suspense fallback={<div></div>}>
                  <Articles articles={articles} defaultTag={slug} />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const generateStaticParams = async () => {
  const tags = await getTags();
  const ret = tags.map((tag) => ({ slug: tag }));
  console.log({ ret });
  return ret;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${website.name} - ${slug}`,
    metadataBase: new URL(website.url),
    description: `Articles about ${slug}`,
    keywords: [slug],
    openGraph: {
      title: `${website.name} - ${slug}`,
      description: `Articles about ${slug}`,
      images: [
        {
          url: `${website.url}/${slug}`,
        },
      ],
      type: "website",
      url: `${website.url}/${slug}`,
      siteName: `${website.name} - ${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${website.name} - ${slug}`,
      description: `Articles about ${slug}`,
      images: [`${website.url}/${slug}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
