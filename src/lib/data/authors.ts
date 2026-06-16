export type Author = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  bio: string;
  links?: string[];
  portfolio?: string;
  resume?: string;
};

export const authors: Author[] = [
  {
    slug: "andrew-bliss",
    name: "Andrew Bliss",
    image: "/andy.jpg",
    tagline: "Web Developer & Tech Enthusiast",
    bio: "Andrew Bliss is a web developer and tech enthusiast with a passion for creating innovative solutions to complex problems. He is a full-stack developer with a strong focus on building scalable and secure web applications.",
    links: [
      "https://www.andrewgbliss.com",
      "https://www.github.com/andrewgbliss",
      "https://www.linkedin.com/in/andrewgbliss/",
    ],
    portfolio: "https://www.blisscode.dev/portfolio",
    resume: "https://www.andrewgbliss.com/resume",
  },
];
