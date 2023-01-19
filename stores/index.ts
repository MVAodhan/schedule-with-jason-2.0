import { atom } from 'jotai';
import { Episode } from '@types';
const episodesAtom = atom<Episode[] | []>([]);

export { episodesAtom };
