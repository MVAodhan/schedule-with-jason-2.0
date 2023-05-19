import { Episode } from "@prisma/client";
import { getDates } from "@utils";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";

import { DateTime } from "./DateTime";
const Card = ({ episode, title }: { episode: Episode; title: String }) => {
	const [usDate, setUsDate] = useState<string>("");
	const [nzDate, setNzDate] = useState<string>("");

	const timezone = episode.timezone ? episode.timezone : "America/Los_Angeles";

	const router = useRouter();

	useEffect(() => {
		let { usDate, nzDate } = getDates(episode.date, timezone);
		setUsDate(usDate);
		setNzDate(nzDate);
	}, []);

	const deleteFn = async () => {
		await axios.post("/api/delete-episode", {
			id: episode.id,
		});
		router.reload();
	};

	return (
		<div className="card w-full bg-base-100 shadow-xl mx-auto ring ring-[#FF9EB1]">
			<div className="card-body ">
				<div className="flex justify-around">
					<Link href={`/publish/${episode.sanityId}`}>
						<button className="btn bg-transparent hover:bg-transparent">
							<AiFillEdit className="fill-black" />
						</button>
					</Link>
				</div>
				<div className="flex justify-between">
					<h2 className="card-title">
						{`${episode.title} with Jason Lengstorf`}{" "}
					</h2>
					<DateTime episode={episode} />
				</div>
				<div className="flex flex-row ">
					<div className="w-1/2">US Date: {usDate}</div>
					<div>NZ Date: {nzDate}</div>
				</div>
			</div>
			<input
				type="checkbox"
				id={`modal-id${episode.id}`}
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						<span className="text-red-500">Delete</span> {title}?
					</h3>
					<p className="py-4"></p>
					<div className="modal-action flex justify-around">
						<label
							htmlFor={`modal-id${episode.id}`}
							className="btn bg-red-700"
							onClick={deleteFn}
						>
							Yes
						</label>
						<label htmlFor={`modal-id${episode.id}`} className="btn">
							No
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
