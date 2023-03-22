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
	const { ep, links, demo, repo } = req.body;
	// Gets all the episodes in the DB

	let linkSet = new Set();
	let linkValues = links?.map((link: any) => link.value);
	for (let link of linkValues) {
		linkSet.add(link);
	}

	// console.log(linkSet);
	let linksString: string[] | [] = [];
	linkSet.forEach((link: any) => {
		if (link !== "https://www.learnwithjason.dev/schedule") {
			linksString.push(link);
		}
	});
	// console.log(linksString);
	// let linkString = linksString.join("\n");
	console.log(linksString);

	res.status(200).json({ test: "success" });
}
