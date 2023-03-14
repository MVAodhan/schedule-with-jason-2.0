import Head from "next/head";

import Nav from "@components/Nav";
import { episodesAtom } from "stores";
import { useAtom } from "jotai";
import Card from "@components/Card";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
	const [episodes, setEpisodes] = useAtom(episodesAtom);
	const getEpisodes = async () => {
		const res = await axios.get("/api/get");
		setEpisodes(res.data);
	};

	useEffect(() => {
		getEpisodes();
	}, []);

	return (
		<>
			<Head>
				<title>Schedule with Jason 2.0</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-screen h-screen flex flex-col items-center">
				<Nav />
				<div className="w-full h-full">
					<div className="w-full flex justify-center">
						<h2 className="text-3xl ">Episodes in Sanity</h2>
					</div>

					<div className="w-4/5 h-full mx-auto pt-10">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
							{episodes.map((ep) => (
								<Card key={ep.id} episode={ep} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
