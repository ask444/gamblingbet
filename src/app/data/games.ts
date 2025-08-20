export type AchievementKey =
  | 'icon_10x'
  | 'icon_20x'
  | 'icon_100x'
  | 'icon_2wins'
  | 'icon_5wins'
  | 'icon_deposit';

export type Game = {
  id: string;
  title: string;
  thumbnail: string; // path under /public/images
  background?: string; // optional background path
  deadline: string; // ISO date string in future
  achievements: Record<AchievementKey, boolean>;
};

export const games: Game[] = [
  {
    id: 'beasts-of-glory',
    title: 'Beasts of Glory',
    thumbnail: '/images/Thumbnail_BeastsOfGlory.png',
    background: '/images/bg_beasts.jpg',
    deadline: new Date(Date.now() + 36 * 3600 * 1000).toISOString(),
    achievements: {
      icon_10x: true,
      icon_20x: false,
      icon_100x: false,
      icon_2wins: true,
      icon_5wins: false,
      icon_deposit: true,
    },
  },
  {
    id: '5-lions',
    title: '5 Lions',
    thumbnail: '/images/Thumbnail_5Lions.png',
    background: '/images/bg_lions.jpg',
    deadline: new Date(Date.now() + 12 * 3600 * 1000).toISOString(),
    achievements: {
      icon_10x: true,
      icon_20x: true,
      icon_100x: false,
      icon_2wins: true,
      icon_5wins: true,
      icon_deposit: false,
    },
  },
  {
    id: 'master-gems',
    title: 'Master Gems',
    thumbnail: '/images/Thumbnail_mastergems.png',
    background: '/images/bg_gems.jpg',
    deadline: new Date(Date.now() + 4 * 3600 * 1000 + 15 * 60 * 1000).toISOString(),
    achievements: {
      icon_10x: false,
      icon_20x: false,
      icon_100x: false,
      icon_2wins: false,
      icon_5wins: false,
      icon_deposit: false,
    },
  },
  {
    id: 'joker',
    title: 'Joker',
    thumbnail: '/images/Thumbnail_joker.png',
    background: '/images/bg_joker.jpg',
    deadline: new Date(Date.now() + 7 * 3600 * 1000 + 50 * 60 * 1000).toISOString(),
    achievements: {
      icon_10x: true,
      icon_20x: true,
      icon_100x: true,
      icon_2wins: true,
      icon_5wins: true,
      icon_deposit: true,
    },
  },
  {
    id: 'king-of-alexandria',
    title: 'King of Alexandria',
    thumbnail: '/images/Thumbnail_kingofalexandria.png',
    background: '/images/bg_egypt.jpg',
    deadline: new Date(Date.now() + 24 * 3600 * 1000 + 5 * 60 * 1000).toISOString(),
    achievements: {
      icon_10x: true,
      icon_20x: false,
      icon_100x: false,
      icon_2wins: false,
      icon_5wins: false,
      icon_deposit: false,
    },
  },
  {
    id: 'floating-dragon',
    title: 'Floating Dragon',
    thumbnail: '/images/Thumbnail_floatingdragon.png',
    background: '/images/bg_dragon.jpg',
    deadline: new Date(Date.now() + 2 * 3600 * 1000 + 10 * 60 * 1000).toISOString(),
    achievements: {
      icon_10x: false,
      icon_20x: true,
      icon_100x: false,
      icon_2wins: false,
      icon_5wins: true,
      icon_deposit: false,
    },
  },
];