import { clerkClient, getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

//Gets episodes from the sanity api and puts them in the DB if the sanityId doesn't exist
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { userId } = getAuth(req);

	const user = userId ? await clerkClient.users.getUser(userId) : undefined;

	console.log(user);

	res.status(200).json({ test: "test" });
}
