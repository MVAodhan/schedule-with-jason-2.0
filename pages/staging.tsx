import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Schedule } from "@prisma/client";

import CardStaging from "@components/CardStaging";
export default function Home() {
	const { isLoaded, isSignedIn } = useUser();
	const [episodes, setEpisodes] = useState<null | Schedule[]>(null);

	if (!isLoaded || !isSignedIn) {
		return <Nav />;
	}

	const getData = async () => {
		const res = await axios.get("./api/get-staging");
		setEpisodes(res.data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="w-screen h-screen">
			<Head>
				<title>Schedule with Jason 2.0</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full h-full flex flex-col items-center">
				<Nav />
				<div className="w-full h-full">
					<div className="w-full flex justify-center">
						<h2 className="text-3xl ">Staging</h2>
					</div>
					<div className="w-4/5 h-full mx-auto pt-10">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
							{/* {episodes !== null &&
								episodes.map((ep) => <CardStaging key={ep.id} episode={ep} />)} */}

							{episodes && episodes.map((ep) => <CardStaging key={ep.id} />)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
