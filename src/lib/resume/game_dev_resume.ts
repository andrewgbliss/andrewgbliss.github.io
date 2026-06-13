import type { ResumeDocument } from "./types";

export const gameDevResume: ResumeDocument = {
  id: "game-dev",
  navLabel: "Game development",
  seo: {
    title: "Andrew Bliss — Game Development Resume",
    description:
      "Game developer shipping browser and desktop titles in Unity (2018–2022) and Godot (2022–2026).",
  },
  pdfFilename: "/GameDevResume.pdf",
  name: "Andrew Bliss",
  email: "andrewgbliss@gmail.com",
  bio: "Game Developer",
  tagline:
    "Game developer shipping small arcade, puzzle, and adventure games—browser-first prototypes through polished releases—with emphasis on feel, clarity, and iterative shipping on itch.io.",
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
      title: "Game Developer",
      company: "Independent",
      location: "Lehi, UT",
      from: "Jan, 2022",
      to: "Current",
      skills: [
        "Godot",
        "GDScript",
        "C#",
        "Game design",
        "itch.io",
        "Web export",
      ],
      bulletpoints: [
        "Ship and maintain Godot titles including Kana Balloons, Cargo Boom, Rain Quest, Junkyard Quest, and Zelda One Co-op—parser adventure, arcade, and co-op action with browser and desktop builds.",
        "Release small Godot utilities and experiments (Godot Blackboard, Godot Jukebox); iterate on puzzles, tileset workflows, and demos aligned with player feedback.",
      ],
    },
    {
      title: "Game Developer",
      company: "Independent",
      location: "Lehi, UT",
      from: "Jan, 2018",
      to: "Dec, 2022",
      skills: ["Unity", "C#", "2D", "Browser games", "itch.io"],
      bulletpoints: [
        "Built and published Unity browser games on itch.io, including a Unity port of Kana Balloons.",
        "Owned full loop from gameplay prototyping through WebGL-style deployment, juice, and release pages for quick-play arcade and seasonal experiments.",
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
    "Godot",
    "GDScript",
    "Unity",
    "C#",
    "C++",
    "Game design",
    "2D games",
    "Web export",
    "itch.io",
    "Git",
  ],
};
