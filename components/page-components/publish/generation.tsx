import LinkContainer from "./linkContainer";
import axios from "axios";
import { Episode } from "@types";
import { useRef } from "react";

import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";

const generation = ({ episode }: { episode: Episode }) => {
	const { userId } = useAuth();
	const router = useRouter();
	const chaptersRef = useRef<HTMLTextAreaElement>(null);
	const updateEpisode = async () => {
		await axios.post("/api/update-episode", {
			ep: episode,
			chapters: chaptersRef.current?.value,
		});
		router.push("/");
	};

	return (
		<div className="w-full flex justify-center">
			<div className="w-4/5 flex items-center  h-[400px]">
				<div className=" w-1/2  flex flex-col item-center">
					<label className="label flex justify-center">Chapters</label>
					<textarea
						className="textarea textarea-bordered w-full"
						placeholder="Chapters"
						ref={chaptersRef}
						defaultValue={episode.chapters ? episode.chapters : ""}
					></textarea>
					<button
						className="btn btn-outline mt-5"
						onClick={updateEpisode}
						disabled={userId !== "user_2MwVLo4xFl6ch7xCP1Z4PIuFjpV"}
					>
						Add Chapters
					</button>
				</div>

				<div className="w-1/2 flex flex-col items-center">
					<LinkContainer episode={episode} />
				</div>
			</div>
		</div>
	);
};

export default generation;
