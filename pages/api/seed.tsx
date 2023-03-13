import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import axios from "axios";
import { EpisodeApi } from "@types";

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const episodes = await axios.get(
		"https://www.learnwithjason.dev/api/v2/schedule"
	);
	// Gets all the episodes in the DB
	let episodesInDB = await prisma.episode.findMany();

	// Creates an array of all the sanityIds in the DB
	let sanittyIDsInDB = episodesInDB.map((episode) => episode.sanityId);
	const createEpisode = async (episode: EpisodeApi) => {
		await prisma.episode.create({
			data: {
				sanityId: episode.id,
				date: episode.date,
				description: episode.description,
				guest: {
					image: episode.guest.image,
					name: episode.guest.name,
					twitter: episode.guest.twitter,
				},
				host: {
					image: episode.host.image,
					name: episode.host.name,
					twitter: episode.host.twitter,
				},
				tags: JSON.stringify(episode.tags),
				slug: episode.slug,
				title: episode.title,
				uri: episode.uri,
			},
		});
	};

	// For each of the episodes in the Sanity api, it checks if the sanityId is in the DB array of Idsand if not, it adds it to the the DB
	episodes.data.forEach((episode: any) => {
		if (!sanittyIDsInDB.includes(episode.id)) {
			createEpisode(episode);
		}
	});

	res.status(200).json("seed successful");
}
