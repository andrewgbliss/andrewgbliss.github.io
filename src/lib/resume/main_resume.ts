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
  bio: `Senior Full Stack Software Engineer`,
  tagline:
    "Experienced full stack software engineer seeks full time employment. Managed many successful web apps using React, TypeScript, Node.js, and PostgreSQL. Developer who likes to get things done in the most efficient way using best practices. Can do type of person who loves to help and mentor people.",
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
        "Managed a legacy system in PHP and built a new system using React, Next.js.",
        "Built a vehicle reconditioning system where dealerships could create tasks, take photos, push to seller api’s, in real time.",
        "One issue we faced was having so many vehicle records per day, so in BigQuery and PostgreSQL I built a daily aggregation script that would build partitions, create views, ensure correct indexes so that it was incredibly fast to query on the front end.",
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
        "Managed a legacy system in PHP and built a new solar appraisal software using React, Next.js.",
        "Built appraisal software for solar companies to sell construction contracts for installing solar panels.",
        "One issue we faced is our customer service software wasn’t real time in the legacy system it was polling. So I built a queue using Node.js and Redis so customer service could pick up calls and chats with no downtime.",
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
