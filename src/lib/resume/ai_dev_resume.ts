import type { ResumeDocument } from "./types";

export const aiDevResume: ResumeDocument = {
  id: "ai-dev",
  navLabel: "AI",
  seo: {
    title: "Andrew Bliss — AI & Full-Stack Resume",
    description:
      "Senior engineer building production software with AI: LLM-backed features, AI-accelerated delivery, React, TypeScript, Next.js, Node, and data systems.",
  },
  pdfFilename: "/Resume.pdf",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: "Senior Full Stack Software Engineer · AI-native delivery",
  tagline:
    "Senior full-stack engineer who ships reliable products by pairing strong systems work—UX, APIs, and data pipelines—with disciplined use of AI for design, implementation, and operations.",
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
      skills: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "NodeJs",
        "PostgreSQL",
        "AI-assisted development",
      ],
      bulletpoints: [
        "Deliver AI-enabled product features and workflows end-to-end—scoping, UX, APIs, and rollout—so teams ship faster without sacrificing review, observability, or security.",
        "Optimize large-scale analytics (hybrid BigQuery + PostgreSQL), cutting cost and improving reliability while keeping data usable for reporting and downstream automation.",
        "Use AI tooling across the stack (React, TypeScript, Next.js) for exploration, codegen, and test support, then harden outputs with profiling, code review, and production discipline.",
      ],
    },
    {
      title: "Senior Full Stack Software Engineer",
      company: "nth-child consulting",
      location: "Orem, UT",
      from: "Dec, 2017",
      to: "Sep, 2022",
      skills: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "NodeJs",
        "PostgreSQL",
        "AI-assisted development",
      ],
      bulletpoints: [
        "Modernized legacy PHP to a Next.js stack using AI-assisted migration planning, component scaffolding, and documentation—reducing compute spend and de-risking cutovers.",
        "Built customer-facing proposal software for solar companies; leveraged AI for rapid prototyping, copy iteration, and boilerplate generation to shorten sales cycles and lift conversion.",
      ],
    },
  ],
  links: [
    "https://andrewgbliss.github.io",
    "https://www.linkedin.com/in/andrewgbliss/",
    "https://tipodd.itch.io",
    "https://github.com/andrewgbliss",
  ],
  skills: [
    "AI-assisted development",
    "LLM-backed features",
    "React",
    "Typescript",
    "Tailwind CSS",
    "NodeJs",
    "PostgreSQL",
    "Python",
    "PHP",
    "ColdFusion",
    "MySQL",
    "Angular",
    "C#",
    "Java",
  ],
};
