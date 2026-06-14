import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Article } from "@/lib/data/articles";
import { AuthorLink } from "@/app/(blog)/_components/AuthorLink";
import { authors } from "@/lib/data/authors";

export const ArticleBigCard = ({ article }: { article: Article }) => {
  const author = authors.find((author) => author.slug === article.authorSlug);
  return (
    <Card key={article.slug}>
      <CardContent className="p-0">
        <div className="flex gap-2">
          <div className="flex flex-col justify-center">
            <Link
              href={`/articles/${article.slug}`}
              className="text-primary hover:underline p-4"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </Link>
            <div className="px-4">
              <Link
                href={`/articles/${article.slug}`}
                className="text-primary hover:underline"
              >
                <h3 className="text-md sm:text-xl font-semibold mb-2">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm">{article.content.slice(0, 200)}...</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <AuthorLink author={author} />
        </div>
      </CardContent>
    </Card>
  );
};
