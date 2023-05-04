import { getDates } from "@utils";

import { Schedule } from "@prisma/client";

import { useEffect, useState } from "react";

const CardStaging = ({ episode }: { episode: Schedule }) => {
	const [usDate, setUsDate] = useState<string>("");
	const [nzDate, setNzDate] = useState<string>("");

	useEffect(() => {
		let { usDate, nzDate } = getDates(episode.date, "America/Los_Angeles");
		setUsDate(usDate);
		setNzDate(nzDate);
	}, []);

	return (
		<div className="card w-full bg-base-100 shadow-xl mx-auto ring ring-[#FF9EB1]">
			<div className="card-body">
				<h2 className="card-title">{episode.title}</h2>
				<p>{episode.guest_name}</p>
				<h2 className="card-title"></h2>
				<p></p>
				<div className="flex flex-row ">
					<div className="w-1/2">US Date: {usDate}</div>
					<div>NZ Date: {nzDate}</div>
				</div>
			</div>
		</div>
	);
};

export default CardStaging;
