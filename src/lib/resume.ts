export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  skills: Array<string>;
  bulletpoints: Array<string>;
};

export type Address = {
  city: string;
  state: string;
};

export type Education = {
  school: string;
  from: string;
  to: string;
  name: string;
};

export type ResumeOptions = {
  name: string;
  email: string;
  bio: string;
  tagline: string;
  address: Address;
  education: Education;
  workExperience: Array<WorkExperience>;
  links: Array<string>;
  skills: Array<string>;
};

export const resume: ResumeOptions = {
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: `Senior Full Stack Software Engineer`,
  tagline:
    "Senior full-stack engineer delivering performant, reliable web products end-to-end—from UX to APIs to data.",
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
        "Designed and implemented front-end architecture and user-facing features using React, TypeScript, and Next.js, improving usability, performance, and user engagement.",
        "Optimized large-scale analytics workflows, cutting BigQuery costs and saving thousands of dollars per month by implementing a hybrid BigQuery and AlloyDB / PostgreSQL solution, improving query performance and reliability.",
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
