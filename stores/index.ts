import { atom } from "jotai";
import { Episode, EpisodeStaging } from "@types";
const episodesAtom = atom<Episode[] | []>([]);

const stagingEpisodesAtom = atom<EpisodeStaging[] | null>(null);

export { episodesAtom, stagingEpisodesAtom };
