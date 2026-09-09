import type { ResumeDocument } from "./types";

export const mainResume: ResumeDocument = {
  id: "main",
  navLabel: "Software",
  seo: {
    title: "Andrew Bliss — Resume",
    description:
      "Experienced full stack software engineer seeks full time employment.",
  },
  pdfFilename: "/assets/Andrew Bliss - Resume.pdf",
  wordFilename: "/assets/Andrew Bliss - Resume.docx",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Software Engineer`,
  tagline:
    "Experienced full-stack software engineer with a track record of many shipped successful web apps using React, TypeScript, Node.js, and PostgreSQL. Developer who likes to code, solve hard problems, has empathy to help anyone and mentor people.",
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
      title: "Software Engineer",
      company: "Carketa",
      location: "Lehi, UT",
      from: "Sep, 2022",
      to: "Current",
      skills: ["React", "Typescript", "Tailwind", "Next.Js", "PostgreSQL"],
      bulletpoints: [
        "Led migration of a legacy PHP system to React/Next.js, modernizing core platform workflows and improving maintainability.",
        "Architected a vehicle reconditioning system enabling dealership teams to create tasks, capture photos, and sync updates to seller APIs in real time — adopted by 10 new dealerships per month.",
        "Built a daily data pipeline across BigQuery and PostgreSQL — including table partitioning, materialized views, and indexing strategy — cutting dashboard query time by 75% as vehicle record volume scaled.",
      ],
    },
    {
      title: "Software Engineer",
      company: "nth-child consulting",
      location: "Orem, UT",
      from: "Dec, 2017",
      to: "Sep, 2022",
      skills: ["React", "Typescript", "Tailwind", "Next.js", "PostgreSQL"],
      bulletpoints: [
        "Led the transition from a legacy PHP system to a solar appraisal platform built with React and Next.js, driving hundreds of new solar company sign-ups to manage and sell installation contracts.",
        "Replaced a polling-based customer service system with a Node.js/Redis-backed queue, cutting customer wait times by 25% with zero downtime for the support team.",
        "Built and shipped a custom proposal tool for solar companies to generate and send build proposals, increasing revenue by 10%.",
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
