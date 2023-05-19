import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Get ep from request
	const { ep, links, demo, repo } = req.body;
	// Gets all the episodes in the DB
	let updated = await prisma.episode.update({
		where: {
			id: ep.id,
		},
		data: {
			links: links,
			demo: demo,
			repo: repo,
		},
	});

	prisma.$disconnect();

	res.status(200).json(updated);
}
