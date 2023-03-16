import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Episode } from "@types";

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Get ep from request
	const { ep, chapters } = req.body;
	// Gets all the episodes in the DB
	let updated = await prisma.episode.update({
		where: {
			id: ep.id,
		},
		data: {
			chapters: chapters,
		},
	});

	res.status(200).json(updated);
}
