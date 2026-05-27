import type { ResumeDocument } from "./types";

export const mainResume: ResumeDocument = {
  id: "main",
  navLabel: "Software",
  seo: {
    title: "Andrew Bliss — Resume",
    description:
      "Senior full stack engineer delivering secure, performant, reliable software products.",
  },
  pdfFilename: "/BlissAndrew_Resume.pdf",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Senior Full Stack Software Engineer`,
  tagline:
    "Experienced with full stack development, from initial design to deployment. Utilizes modern frameworks and tools to build efficient and maintainable applications. Knowledge of best practices in coding, debugging, and collaborating within agile teams.",
  aboutParagraphs: [
    "I'm a senior full-stack engineer based in Lehi, Utah, with a B.S. in Computer Science from Stevens-Henager College. Most of my recent work spans React, TypeScript, Next.js, Node, and PostgreSQL—alongside data systems like BigQuery—where I focus on performance, reliability, and features people actually use every day.",
    "Earlier in my career I spent years consulting: migrating legacy PHP applications to a modern Next.js stack, improving cost and velocity, and building solar-industry software in React and TypeScript that helped clients shorten sales cycles and grow revenue. I'm happiest when engineering decisions show up as clearer UX, stable releases, and measurable savings.",
    "This site is my home on the web for professional work and personal projects—software, audio, and other creative experiments—with links to my resume, portfolio, and repos.",
  ],
  address: {
    city: "Lehi",
    state: "UT",
  },
  education: {
    school: "Stevens-Henager College",
    from: "Sep, 2002",
    to: "Oct, 2006",
    name: "Bachelors of Computer Science",
  },
  workExperience: [
    {
      title: "Senior Full Stack Software Engineer",
      company: "Carketa",
      location: "Lehi, UT",
      from: "Sep, 2022",
      to: "Current",
      skills: ["React", "Typescript", "Tailwind", "Next.Js", "PostgreSQL"],
      bulletpoints: [
        "Built the entire system of reconditioning vehicles task software and vehicle dealership analysis, which increased user sign up 100%, getting MMR to 10k",
        "Saved the company more than 10k each month by optimizing BigQuery, PostgreSQL databases, aggregated data to be faster in the front end.",
      ],
    },
    {
      title: "Senior Full Stack Software Engineer",
      company: "nth-child consulting",
      location: "Orem, UT",
      from: "Dec, 2017",
      to: "Sep, 2022",
      skills: ["React", "Typescript", "Tailwind", "Next.js", "PostgreSQL"],
      bulletpoints: [
        "Built a dynamic builder so companies could customize their solar proposal to their clients, which made it easier for companies to make point of sale. Companies sign up and we made record profits, grew the company by 200 people",
      ],
    },
  ],
  links: [
    "https://www.linkedin.com/in/andrewgbliss",
    "https://github.com/andrewgbliss",
    "https://andrewgbliss.github.io",
  ],
  skills: [
    "React",
    "Typescript",
    "Tailwind",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ],
};
