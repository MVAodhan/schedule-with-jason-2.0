export interface Page {
  id: number;
  name: string;
  path: string;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  guest: string;
}

export interface EpisodeApi {
  date: string;
  description: string;
  guest: {
    image: string;
    name: string;
    twitter: string;
  };
  host: {
    image: string;
    name: string;
    twitter: string;
  };
  id: string;
  slug: string;
  tags: null | string[];
  title: string;
  uri: string;
}
