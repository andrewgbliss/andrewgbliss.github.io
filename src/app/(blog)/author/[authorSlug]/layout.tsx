import { getPublishedArticles } from "@/lib/data/articles";
import { ArticleCard } from "@/app/(blog)/articles/_components/ArticleCard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articles = await getPublishedArticles();
  return (
    <>
      <div className="text-white flex flex-col bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 px-5">
        <main className="flex-1">
          <article className="container mx-auto page-p pt-12 w-full sm:max-w-4xl ">
            {children}
            <hr className="container mx-auto mb-8" />
          </article>
        </main>
        <div className="container mx-auto page-p sm:max-w-4xl flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-center">Recent Articles</h2>
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="h-12"></div>
      </div>
    </>
  );
}
