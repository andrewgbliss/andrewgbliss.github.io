import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  date: string;
  title: string;
  tagline: string;
  authorSlug: string;
  image: string;
  content: string;
  published: boolean;
  tags?: string[];
  featured?: boolean;
  rant?: boolean;
  video?: string;
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "articles",
    `${slug}.md`,
  );
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const article: Article = {
    slug: data.slug,
    date: data.date,
    title: data.title,
    tagline: data.tagline,
    authorSlug: data.authorSlug,
    image: data.image,
    content: content,
    published: data.published,
    tags: data.tags,
    featured: data.featured,
    rant: data.rant,
    video: data.video,
  };
  return article;
};

export const getPublishedArticles = async (): Promise<Article[]> => {
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "src", "lib", "articles"),
  );
  const articles = fileNames
    .map((fileName) => {
      const filePath = path.join(
        process.cwd(),
        "src",
        "lib",
        "articles",
        `${fileName}`,
      );
      const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
      const article: Article = {
        slug: data.slug,
        date: data.date,
        title: data.title,
        tagline: data.tagline,
        authorSlug: data.authorSlug,
        image: data.image,
        content: content,
        published: data.published,
        tags: data.tags,
        featured: data.featured,
        rant: data.rant,
        video: data.video,
      };
      return article;
    })
    .filter((article) => article.published && !article.rant)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
};

export const getRants = async (): Promise<Article[]> => {
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "src", "lib", "articles"),
  );
  const articles = fileNames
    .map((fileName) => {
      const filePath = path.join(
        process.cwd(),
        "src",
        "lib",
        "articles",
        `${fileName}`,
      );
      const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
      const article: Article = {
        slug: data.slug,
        date: data.date,
        title: data.title,
        tagline: data.tagline,
        authorSlug: data.authorSlug,
        image: data.image,
        content: content,
        published: data.published,
        tags: data.tags,
        featured: data.featured,
        rant: data.rant,
        video: data.video,
      };
      return article;
    })
    .filter((article) => article.published && article.rant)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
};

export const getPaths = async (): Promise<string[]> => {
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), "src", "lib", "articles"),
  );
  return fileNames.map((fileName) => fileName.replace(".md", ""));
};

export const getTags = async (): Promise<string[]> => {
  const articles = await getPublishedArticles();
  return articles
    .flatMap((article) => article.tags || [])
    .filter((item) => item !== null);
};
