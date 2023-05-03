import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Gets all the episodes in the DB
	let episodes = await prisma.schedule.findMany();

	// Creates an array of all the sanityIds in the DB

	// For each of the episodes in the Sanity api, it checks if the sanityId is in the DB array of Idsand if not, it adds it to the the DB

	res.status(200).json(episodes);
}
