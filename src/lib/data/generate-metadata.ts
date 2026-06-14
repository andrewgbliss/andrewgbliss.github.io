import { website } from "./website";

export const generateDefaultMetadata = ({
  title,
  url,
  description,
  images,
  keywords,
}: {
  title: string;
  url: string;
  description: string;
  images: string[];
  keywords: string[];
}) => {
  return {
    applicationName: website.applicationName,
    authors: website.authors,
    title,
    metadataBase: new URL(url),
    description,
    keywords,
    openGraph: {
      title,
      description,
      images,
      type: "website",
      url,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};
