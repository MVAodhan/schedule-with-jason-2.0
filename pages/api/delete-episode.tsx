import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Get ep from request
	const { id } = req.body;
	// Gets all the episodes in the DB
	let deleted = await prisma.episode.delete({
		where: {
			id: id,
		},
	});

	prisma.$disconnect();
	res.status(200).json(deleted);
}
