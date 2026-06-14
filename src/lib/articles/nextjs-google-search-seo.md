---
slug: "nextjs-google-search-seo"
date: "2024-12-03"
title: "Next.js Google Search SEO"
tagline: "How to get your website indexed and ranked on Google using Next.js."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/stack/Google__G__logo.svg.png#small-img"
published: true
tags: ["nextjs", "seo"]
---

If you want your website to rank well on Google and be easily discovered by users, setting up your site for indexing is crucial. This involves configuring your robots.txt, creating a proper sitemap.xml, adding HTML meta tags, optimizing content quality, ensuring good site structure, and acquiring backlinks. Here’s how you can do each of these effectively:

## robots.txt

The robots.txt file is crucial for controlling search engine crawlers' access to certain pages of your website. This file lets you define which parts of your site you want search engines to index and which parts to avoid. To get started:

Create a file called robots.txt in the root directory of your website.

Add basic rules like:

```
# Allow all crawlers
User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml
```

The User-agent: \* directive applies to all crawlers, while Disallow tells them which pages not to crawl. Ensure your Sitemap directive points to your sitemap.xml so search engines can find your site structure easily.

For more information, see [Google's documentation on creating a robots.txt file](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt).

## sitemap.xml

A sitemap.xml helps search engines understand your website structure by listing all the important URLs for crawling. To generate your sitemap.xml, you can use tools like XML Sitemaps or automate it with a plugin if you use a CMS.

Here’s what your sitemap might look like:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yoursite.com/</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yoursite.com/blog/</loc>
    <lastmod>2024-12-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Submit the sitemap to Google Search Console to notify Google about your site’s structure. If it's been a few weeks since you submitted and your pages aren’t indexed, consider checking if you’ve configured everything correctly. Ensure your pages are not blocked by robots.txt, use the "URL Inspection" tool in Google Search Console to request reindexing, and ensure your pages are accessible without any issues.

For more information, see [Google's documentation on creating a sitemap.xml](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#xml)

For more information on the sitemap protocol, see [the sitemap protocol](https://www.sitemaps.org/protocol.html)

## Next.js Sitemap

Next.js has a built-in sitemap generator that you can use to generate a sitemap.xml file. To use it, create a file called sitemap.ts in the root directory of your website and add the following code:

```tsx
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.example.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.example.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.example.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Add more URLs as needed
  ];
}
```

By default, Next.js will generate a sitemap.xml file at build time. You can customize the sitemap by modifying the sitemap.ts file.

For more information, see [Next.js documentation on sitemaps](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap).

## HTML Meta Tags

Meta tags provide search engines with information about your pages, such as the description and keywords. These tags influence how your pages are displayed in search results. Here’s how to set them up:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Your page description here." />
  <meta name="keywords" content="keyword1, keyword2, keyword3" />
  <meta name="author" content="Your Name" />
  <meta name="robots" content="index, follow" />
  <title>Your Page Title</title>
</head>
```

The `description` tag is especially important, as it often shows up in search results. Make sure each page has unique and relevant meta tags.

For more information, see [Google's documentation on special tags](https://developers.google.com/search/docs/crawling-indexing/special-tags).

## Generating metadata in Next.js

Next.js has a built-in metadata generator that you can use to generate metadata for your pages. In your page.tsx file, you can use the following code to generate metadata:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return {
    metadataBase: new URL(website.url),
    description: article.tagline,
    keywords: article.tags,
    openGraph: {
      title: `${article.title}`,
      description: article.tagline,
      images: [
        {
          url: article.image ?? "",
        },
      ],
      type: "website",
      url: `${website.url}/articles/${slug}`,
      siteName: `${article.title}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title}`,
      description: article.tagline,
      images: [article.image ?? ""],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

This is an example of how to generate metadata for an article page. You can customize it to fit your needs.

As you can see you can use the robots property to control how your page is indexed and followed by search engines.

```tsx
robots: {
  index: true,
  follow: true,
},
```

## Generating static pages

Next.js has a built-in function called generateStaticParams that you can use to generate static pages for your website. This is useful for creating pages that are not dynamic, such as a blog index page or an about page.

```tsx
export const generateStaticParams = async () => {
  const paths = await getPaths();
  return paths.map((path) => ({ slug: path }));
};
```

This is an example of how to generate static pages for an articles page. It gets all the paths for the articles and returns them as an array of objects with the slug property. You can customize it to fit your needs.

For more information, see [Next.js documentation on generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

## Content Quality

Content quality is key to good SEO. Google prioritizes high-quality, original content that provides value to users. Here’s how to improve your content:

- Focus on User Intent: Write content that answers the questions your target audience is asking.
- Use Clear Headers: Organize your content with header tags (`<h1>, <h2>, etc.`) to improve readability.
- Keyword Optimization: Include relevant keywords naturally, but avoid keyword stuffing.
- Multimedia: Use images, videos, and other media to enrich the user experience.
- Content Freshness: Regularly update your content to keep it relevant.

The more valuable your content is to users, the more likely it is to rank well on Google.

For more information, see [Clearscope's blog on content quality](https://www.clearscope.io/blog/what-is-content-quality).

## Site Structure

A clean and organized site structure makes it easier for both users and search engines to navigate your website. Here are a few tips:

- Logical Hierarchy: Organize your site with clear categories, and use URLs that reflect this structure (e.g., www.yoursite.com/blog/article-name).
- Internal Linking: Create internal links between pages to improve site navigation and SEO.
- Mobile-Friendly: Ensure your site is responsive. Google uses mobile-first indexing, meaning the mobile version of your site is considered the primary version.

A well-structured site helps Google’s crawlers understand your content and improves user experience.

For more information, see [Semrush's blog on website structure](https://www.semrush.com/blog/website-structure/).

## Backlinks

Backlinks—links from other websites to yours—are one of the most important ranking factors in Google’s algorithm. To acquire quality backlinks:

- Guest Blogging: Write guest posts on other blogs within your industry and link back to your site.
- Collaborate with Others: Partner with influencers or other businesses to get backlinks.
- Quality over Quantity: A few high-quality backlinks are more valuable than many low-quality ones.

Backlinks signal to Google that your site is trustworthy and authoritative.

For more information, see [Backlinko's blog on backlinks](https://backlinko.com/hub/seo/backlinks).

### What to Do If Your Pages Haven’t Been Indexed Yet

If your sitemap has been submitted but your pages aren’t indexed after a few weeks, here’s what you can do:

- Check Google Search Console: Use the “URL Inspection Tool” to see if there are any issues preventing indexing.
- Request Reindexing: You can request Google to reindex a specific page if it's not appearing in search results.
- Ensure Crawl Accessibility: Double-check that there are no errors in your robots.txt or meta tags that are blocking crawlers.
- Increase Site Traffic: Sometimes, it can take longer for Google to index a new site. Generating traffic through social media, backlinks, or other methods can prompt Google to crawl your site more frequently.
- Check for Duplicate Content: Make sure that there’s no duplicate content issue, as this can prevent indexing.
  By following these steps and focusing on quality content and site optimization, your pages should be indexed and rank well over time.

To check your page urls in Google Search Console, see [Google's documentation on Search Console](https://search.google.com/search-console).
