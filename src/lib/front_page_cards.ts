/**
 * Front page featured cards (e.g. itch.io games).
 * Paths under `public/` are served from the site root (e.g. `/kana-balloons.png`).
 * `topLevel: true` sorts the card first; that row is image + description only (not a link).
 */
export type FrontPageCardEntry = {
  url: string;
  imageUrl: string;
  description: string | readonly string[];
  topLevel?: boolean;
};

export const frontPageCards = {
  cards: [
    {
      url: "https://tipodd.itch.io",
      imageUrl: "/stan_the_man.png",
      description: [
        "I'm currently working on the puzzles of Junkyard Quest.",
        "The next task I have planned is to make a system in Godot for changing out tilesets in Zelda One Co-op.",
        "I'm also working on Rain Quest to get the first demo out.",
      ],
      topLevel: true,
    },
    {
      url: "https://tipodd.itch.io/kana-balloons",
      imageUrl: "/kana-balloons.png",
      description:
        "Practice Japanese kana in a bright, arcade-style balloon game. Built with Godot; playable in the browser or as a desktop download.",
    },
    {
      url: "https://tipodd.itch.io/cargo-boom",
      imageUrl: "/cargo-boom.png",
      description:
        "Fly a helicopter, scoop up cargo for health and firepower, and push through waves of invaders—including each level’s boss.",
    },
    {
      url: "https://tipodd.itch.io/rain-quest",
      imageUrl: "/rain-quest.png",
      description:
        "Old-school text-parser adventure in the AGI Sierra mold. Guide Stan home, grab convention tickets, and lean on Look, Take, Use, and Talk.",
    },
  ] satisfies readonly FrontPageCardEntry[],
};

export type FrontPageCard = (typeof frontPageCards.cards)[number];
