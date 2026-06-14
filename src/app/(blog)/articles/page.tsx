import { getPublishedArticles } from "@/lib/data/articles";
import { Articles } from "./_components/Articles";
import { Suspense } from "react";
import { Metadata } from "next";
import { website } from "@/lib/data/website";
import { generateDefaultMetadata } from "@/lib/data/generate-metadata";

const title = `Articles - ${website.name}`;
const url = `${website.url}/articles`;
const description = `${website.name} - Articles about the latest in tech`;
const images = [
  "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/office.webp",
];
const keywords = ["articles", "tech", "technology", "news", "updates"];

export const metadata: Metadata = {
  ...generateDefaultMetadata({ title, url, description, images, keywords }),
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ArticlesFrontPage() {
  const articles = await getPublishedArticles();
  return (
    <>
      <div className="relative min-h-screen flex flex-col py-16 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <main className="min-h-screen grow flex items-start justify-center">
          <div className="w-full min-h-screen">
            <div className="container mx-auto sm:max-w-4xl relative z-10 flex flex-col items-center justify-center text-white min-h-screen page-p">
              <h1 className="text-3xl font-bold py-2">Articles</h1>
              <p className="text-lg">Stay updated with the latest in tech</p>
              <div className="w-full min-h-screen">
                <Suspense fallback={<div></div>}>
                  <Articles articles={articles} />
                </Suspense>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
