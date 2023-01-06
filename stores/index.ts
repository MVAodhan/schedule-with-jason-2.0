import { atom } from 'jotai';
import { Episode } from '@types';
const episodesAtom = atom<Episode[]>([
  {
    id: 1,
    title: 'Build Your Own Developer Training Quest',
    description:
      'The team at Wilco is building “a flight simulator for developers”.',
    date: 'Jan 6',
    guest: 'Lior Brauer',
  },
  {
    id: 2,
    title: "Let's Play With Web Dev (Chat & Project Work)",
    description: 'Join Jason to talk web dev.',
    date: 'Jan 4',
    guest: 'Lior Brauer',
  },
]);

export { episodesAtom };
