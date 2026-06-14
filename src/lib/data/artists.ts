import type { SocialMediaLinks } from "./social_media";

export type Event = {
  date: string;
  venue: string;
  location: string;
};

export type Song = {
  id: string;
  title: string;
  url: string;
};

export type Album = {
  id: string;
  title: string;
  cover: string;
  avatar?: string;
  releaseDate: string;
  songs?: Song[];
  hyperFollowLink?: string;
};

export type Artist = {
  id: string;
  name: string;
  avatar: string;
  banner: string;
  bannerPosition: "top" | "center";
  bio: string;
  about: string;
  socialMediaLinks?: SocialMediaLinks;
  upcomingEvents?: Event[];
  albums?: Album[];
  listenLinks?: {
    spotify?: string;
    youtube?: string;
    itunes?: string;
  };
  videos?: string[];
  pictures?: string[];
  playlists?: {
    youtube?: {
      name: string;
      url: string;
    }[];
  };
  cashApp?: string;
};

export const artists: Artist[] = [
  {
    id: "andy-b-mixin",
    name: "Andy B Mixin",
    avatar:
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/andrewguitar.jpg",
    banner:
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/vial-c/vial-c-vibes.gif",
    bannerPosition: "top",
    bio: "Deep sounds of rushing waters",
    about: "Undividely Honest",
    socialMediaLinks: {
      youtube: "https://www.youtube.com/@andyb-mixin",
      soundcloud: "https://soundcloud.com/andybmixin",
    },
    listenLinks: {
      spotify: "https://open.spotify.com/artist/11nO89ZOWfrcIE3RHi5kCa",
      youtube: "https://music.youtube.com/channel/UCRK2plXiBAFo2itOq2XUGBg",
      itunes: "https://music.apple.com/us/album/lifes-a-bliss/1780417937",
    },
    albums: [
      {
        id: "lab",
        title: "Life's a Bliss",
        cover:
          "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/lab-album.jpg",
        avatar:
          "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/andrewguitar.jpg",
        releaseDate: "2010-10-26",
        hyperFollowLink:
          "https://distrokid.com/hyperfollow/andybmixin/lifes-a-bliss",
        songs: [
          {
            id: "intro",
            title: "Intro",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/intro.mp3",
          },
          {
            id: "just-go",
            title: "Just Go",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/just-go.mp3",
          },
          {
            id: "the-most-important-thing",
            title: "The Most Important Thing",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/the-most-important-thing.mp3",
          },
          {
            id: "to-a-tragedy",
            title: "To A Tragedy",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/to-a-tragedy.mp3",
          },
          {
            id: "be-alright",
            title: "Be Alright",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/be-alright.mp3",
          },
          {
            id: "red-tied-blood",
            title: "Red Tied Blood",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/red-tied-blood.mp3",
          },
          {
            id: "fight-back",
            title: "Fight Back",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/fight-back.mp3",
          },
          {
            id: "push",
            title: "Push",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/push.mp3",
          },
          {
            id: "two-face",
            title: "Two Face",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/two-face.mp3",
          },
          {
            id: "wasteland",
            title: "Wasteland",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/wasteland.mp3",
          },
          {
            id: "line-of",
            title: "Line Of",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/line-of.mp3",
          },
          {
            id: "destruction",
            title: "Destruction",
            url: "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/destruction.mp3",
          },
        ],
      },
      {
        id: "butter-tea-wang",
        title: "Butter Tea Wang",
        cover:
          "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/butter-tea-wang/btw.jpg",
        releaseDate: "2024-10-26",
        hyperFollowLink:
          "https://soundcloud.com/andybmixin/sets/butter-tea-wang",
      },
    ],
    pictures: [
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/andrewguitar.jpg",
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/img/andy4.jpg",
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/albums/lab/lab-album.jpg",
    ],
    playlists: {
      youtube: [
        {
          name: "Metal from the gods",
          url: "https://youtube.com/playlist?list=PLy72v0hfJm-ZDSEJLW7sJZGfYVmVH-CBy&si=YGLXQ5OnpUdFY5R0",
        },
        {
          name: "2000s Rock",
          url: "https://youtube.com/playlist?list=PLy72v0hfJm-abZN01zQdhnTkdER-Me87z&si=x6ZgfqgL3yuabVqf",
        },
        {
          name: "Country",
          url: "https://youtube.com/playlist?list=PLZlNPsopDVjrRG811L4-v7__ZwDa2c8Of",
        },
        {
          name: "Rap",
          url: "https://youtube.com/playlist?list=PLy72v0hfJm-Z2fO-V98dU0MRYRjzE49sX&si=D4jPQ6fl49ceIF3J",
        },
      ],
    },
    cashApp:
      "https://storage.googleapis.com/blisscoder-0-public/dilutedscience/artists/andy-b-mixin/andy-cashapp.png",
  },
];
