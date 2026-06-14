import { getPublishedArticles } from "@/lib/data/articles";
import { ArticleCard } from "../_components/ArticleCard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articles = await getPublishedArticles();
  // Get 3 random articles
  const randomArticles = [...articles]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <>
      <div className="min-h-screen text-white flex flex-col bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto">
          <main className="flex-1">
            <article className="container mx-auto page-p py-12 sm:max-w-4xl">
              {children}
            </article>
          </main>
        </div>
        <div className="container mx-auto sm:max-w-4xl">
          <hr />
        </div>
        <div className="py-12">
          <div className="container mx-auto page-p sm:max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            <div className="grid grid-cols-1 gap-8">
              {randomArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
