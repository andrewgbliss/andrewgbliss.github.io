import type { ResumeDocument } from "./types";

export const mainResume: ResumeDocument = {
  id: "main",
  navLabel: "Software",
  seo: {
    title: "Andrew Bliss — Resume",
    description:
      "Senior full stack engineer delivering secure, performant, reliable software products.",
  },
  pdfFilename: "/Resume.pdf",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Senior Full Stack Software Engineer`,
  tagline:
    "Senior full stack engineer delivering secure, performant, reliable software products.",
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
      skills: ["React", "Typescript", "Tailwind CSS", "NodeJs", "PostgreSQL"],
      bulletpoints: [
        "Work with BigQuery and PostgreSQL implementing aggregation, improving query performance and reliability cutting costs and saving thousands of dollars per month.",
        "Design new features using React, TypeScript, Next.js, improving usability, performance, and user engagement.",
      ],
    },
    {
      title: "Senior Full Stack Software Engineer",
      company: "nth-child consulting",
      location: "Orem, UT",
      from: "Dec, 2017",
      to: "Sep, 2022",
      skills: ["React", "Typescript", "Tailwind CSS", "NodeJs", "PostgreSQL"],
      bulletpoints: [
        "Modernized legacy PHP applications by migrating to a Next.js stack, cutting compute costs and improving performance and developer velocity.",
        "Built solar software for solar companies using React, Typescript, Next.js, significantly increasing client revenue through faster sales cycles and improved conversion.",
      ],
    },
  ],
  links: [
    "https://andrewgbliss.github.io",
    "https://www.linkedin.com/in/andrewgbliss/",
    "https://andrewgbliss.itch.io",
    "https://github.com/andrewgbliss",
  ],
  skills: [
    "React",
    "Typescript",
    "Tailwind CSS",
    "NodeJs",
    "PostgreSQL",
    "PHP",
    "ColdFusion",
    "MySQL",
    "Angular",
    "C#",
    "Java",
    "Python",
  ],
};
