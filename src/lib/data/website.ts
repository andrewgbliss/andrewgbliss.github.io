import type { SocialMediaLinks } from "@/lib/data/social_media";

type Author = {
  name: string;
  url: string;
};

export type Website = {
  applicationName: string;
  authors: Author[];
  title: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  shortUrl: string;
  email: string;
  socialMediaLinks?: SocialMediaLinks;
  address: string;
};

export const website: Website = {
  applicationName: "Andrew G Bliss",
  authors: [
    {
      name: "Andrew G Bliss",
      url: "https://www.andrewgbliss.com",
    },
  ],
  title: "Andrew G Bliss",
  name: "Andrew G Bliss",
  tagline: "software, audio, create",
  description: "software, audio, create",
  url: "https://www.andrewgbliss.com",
  shortUrl: "andrewgbliss.com",
  email: "andrewgbliss@gmail.com",
  socialMediaLinks: {
    youtube: "",
  },
  address: "Lehi, Utah",
};
