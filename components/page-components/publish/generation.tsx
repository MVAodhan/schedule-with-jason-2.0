import LinkContainer from "./linkContainer";
import axios from "axios";
import { Episode } from "@types";
import { useRef } from "react";

import { useRouter } from "next/router";

const generation = ({ episode }: { episode: Episode }) => {
	const router = useRouter();
	const chaptersRef = useRef<HTMLTextAreaElement>(null);
	const updateEpisode = async () => {
		await axios.post("/api/update-episode", {
			ep: episode,
			chapters: chaptersRef.current?.value,
		});
		router.push("/");
	};
	console.log("from generation component", episode);
	return (
		<div className="w-full flex justify-center">
			<div className="w-4/5 flex items-center  h-[400px]">
				<div className=" w-1/2  flex flex-col item-center">
					<label className="label flex justify-center">Chapters</label>
					<textarea
						className="textarea textarea-bordered w-full"
						placeholder="Chapters"
						ref={chaptersRef}
					></textarea>
					<button className="btn btn-outline mt-5" onClick={updateEpisode}>
						Add Chapters
					</button>
				</div>

				<div className="w-1/2 flex flex-col items-center">
					<LinkContainer />
				</div>
			</div>
		</div>
	);
};

export default generation;
