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
  applicationName: "Bliss Code",
  authors: [
    {
      name: "Bliss Code",
      url: "https://www.blisscode.dev",
    },
  ],
  title: "Bliss Code",
  name: "Bliss Code",
  tagline: "software, audio, create",
  description: "software, audio, create",
  url: "https://www.blisscode.dev",
  shortUrl: "blisscode.dev",
  email: "blisscodellc@gmail.com",
  socialMediaLinks: {
    youtube: "https://www.youtube.com/@BlissCoder0",
  },
  address: "Lehi, Utah",
};
