import { StringLiteral } from "typescript";

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
	sanityId: string;
	slug: string;
	tags?: [];
	title: string;
	uri: string;
	timezone?: string;
	chapters?: string;
	links?: ILink[];
	time?: string;
	tech?: string;
	repo?: string;
	demo?: String;
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
	value: string | undefined;
}
