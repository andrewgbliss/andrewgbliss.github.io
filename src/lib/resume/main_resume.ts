import type { ResumeDocument } from "./types";

export const mainResume: ResumeDocument = {
  id: "main",
  navLabel: "Software",
  seo: {
    title: "Andrew Bliss — Resume",
    description:
      "Senior full-stack software engineer: React, TypeScript, Next.js, Node, PostgreSQL, and data systems.",
  },
  pdfFilename: "/Resume.pdf",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Senior Full Stack Software Engineer`,
  tagline:
    "Senior AI full-stack engineer delivering secure, high-performance, reliable software products end-to-end, from UX to APIs and large-scale data systems.",
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
        "Optimize large-scale analytics workflows, cutting BigQuery costs and saving thousands of dollars per month by implementing a hybrid BigQuery, PostgreSQL solution, improving query performance and reliability.",
        "Design new features using React, TypeScript, Next.js, improving usability, performance, and user engagement.",
        "Leverage the use of AI to create new products, introduce new features saving time and resources.",
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
        "Modernized legacy PHP applications by migrating to a Next.js-based stack, cutting compute costs and saving thousands of dollars per month.",
        "Built customer-facing proposal software for solar companies, significantly increasing client revenue through faster sales cycles and improved conversion.",
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
