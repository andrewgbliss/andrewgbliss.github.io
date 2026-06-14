import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Article } from "@/lib/data/articles";

export const ArticleSmallCard = ({ article }: { article: Article }) => {
  return (
    <Card key={article.slug}>
      <CardContent className="p-4 h-40">
        <div className="flex flex-row gap-4">
          <Link
            href={`/articles/${article.slug}`}
            className="text-primary hover:underline"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </Link>
          <div className="flex flex-col w-1/2 overflow-hidden h-32">
            <Link
              href={`/articles/${article.slug}`}
              className="text-primary hover:underline"
            >
              <h3 className="text-md sm:text-xl font-semibold mb-2">
                {article.title}
              </h3>
            </Link>
            <p className="text-sm">{article.tagline.slice(0, 100)}...</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
