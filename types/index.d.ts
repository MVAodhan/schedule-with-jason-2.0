export interface Page {
  id: number;
  name: string;
  path: string;
}

export interface Episode {
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
  tags: [];
  title: string;
  uri: string;
  timezone?: string;
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

export interface IDateTime {
  c: {
    day: number;
    month: number;
    year?: number;
    hour: number;
    minute: number;
  };
}

export interface ILink {
  id: string;
  sanityID: string | undefined;
  value: string | undefined;
}
