import { Episode } from "@types";
import { getDates } from "@utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({ episode }: { episode: Episode }) => {
	const [usDate, setUsDate] = useState<string>("");
	const [nzDate, setNzDate] = useState<string>("");

	const timezone = episode.timezone ? episode.timezone : "America/Los_Angeles";

	useEffect(() => {
		let { usDate, nzDate } = getDates(episode.date, timezone);

		setUsDate(usDate);
		setNzDate(nzDate);
	}, []);

	return (
		<Link href={`/publish/${episode.sanityId}`}>
			<div className="card w-full bg-base-100 shadow-xl mx-auto ring ring-[#FF9EB1]">
				<div className="card-body ">
					<h2 className="card-title">{episode.title}</h2>
					<p>{episode.guest.name}</p>
					<div className="flex flex-row ">
						<div className="w-1/2">US Date: {usDate}</div>
						<div>NZ Date: {nzDate}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
