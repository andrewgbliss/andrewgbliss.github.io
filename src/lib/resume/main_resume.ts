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
    "Software engineer with 8+ years of experience designing, building, and scaling production web applications. Specializes in React, Next.js, Node.js, and PostgreSQL/BigQuery-based data systems, with a track record of migrating legacy platforms to modern architectures and building real-time, high-throughput backend systems.",
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
        "Led the migration of a legacy PHP system to a modern React/Next.js architecture, modernizing core platform workflows.",
        "Architected and built a vehicle reconditioning system that lets dealership teams create tasks, capture photos, and push updates to seller APIs in real time.",
        "Built a daily data aggregation pipeline spanning BigQuery and PostgreSQL, including table partitioning, materialized views, and indexing strategy, to keep dashboard queries fast as daily vehicle record volume grew.",
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
        "Led the transition from a legacy PHP system to a new solar appraisal platform built with React and Next.js, used by solar companies to manage and sell installation contracts.",
        "Replaced a polling-based customer service system with a Node.js and Redis-backed queue, enabling real-time call and chat handling with no downtime for the support team..",
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
