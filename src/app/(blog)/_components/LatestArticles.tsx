import { Article } from "@/lib/data/articles";
import { ArticleBigCard } from "@/app/(blog)/articles/_components/ArticleBigCard";

export const LatestArticles = ({ articles }: { articles: Article[] }) => {
  const featuredArticles = articles.filter((article) => article.featured);
  return (
    <div>
      <div className="py-12 text-white">
        <main className="flex items-center justify-center w-full">
          <div className="page-p container mx-auto sm:max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Be seen, be heard, be found
                </h2>
                <p>
                  In today&apos;s digital age, establishing a strong online
                  presence is crucial for business success. A professional
                  website serves as your digital storefront, operating 24/7 to
                  showcase your products and services. Through expert web
                  development services, you can create an engaging platform that
                  reflects your brand identity, connects with your target
                  audience, and drives business growth.
                </p>
              </div>
              <div>
                {featuredArticles.length > 0 && (
                  <ArticleBigCard article={featuredArticles[0]} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
