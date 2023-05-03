import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await prisma.schedule.create({
		data: {
			description: "this is the description",
			date: "this is the description",
			guest_name: "this is the description",
			guest_twitter: "this is the description",
		},
	});

	res.status(200).json({});
}
