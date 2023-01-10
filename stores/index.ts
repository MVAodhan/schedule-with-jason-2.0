import { atom } from 'jotai';
import { Episode } from '@types';
const episodesAtom = atom<Episode[]>([
  {
    id: 1,
    title: "Let's Play With Web Dev (Chat & Project Work)",
    description: 'Join Jason to talk web dev.',
    date: '2023-01-10T09:00',
    timezone: 'America/Los_Angeles',
    guest: 'Jason Lengstorf',
  },
  {
    id: 2,
    title: 'Nuxt 3 & Nitro',
    description:
      'Nuxt.JS v3 is stable, and it introduces a ton of features including Typescript support, Vuejs 3, Vite.JS, and the new Nitro server engine. Framework architect Daniel Roe will teach us all about it..',
    date: '2023-01-12T09:30',
    timezone: 'America/Los_Angeles',
    guest: 'Daniel Roe',
  },
]);

export { episodesAtom };
