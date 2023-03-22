import { useAuth } from "@clerk/nextjs";
import { Episode } from "@types";
import { getHighlightText } from "@utils";
import axios from "axios";
import { useRouter } from "next/router";

import { useRef } from "react";
import { VscCopy } from "react-icons/vsc";

const twitter = ({ episode }: { episode: Episode }) => {
	const { userId } = useAuth();
	const router = useRouter();
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	const techRef = useRef<HTMLInputElement>(null);

	const updateTech = async () => {
		await axios.post("/api/update-tech", {
			ep: episode,
			tech: techRef.current?.value,
		});
		router.push("/");
	};

	return (
		<div>
			<div className="w-full flex flex-col items-center">
				<label className="label"></label>
				<input
					defaultValue={episode.tech ?? episode.tech}
					type="text"
					ref={techRef}
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<button
					className="btn btn-outline mt-5"
					onClick={updateTech}
					disabled={userId !== "user_2MwVLo4xFl6ch7xCP1Z4PIuFjpV"}
				>
					Update technology
				</button>
			</div>
			{episode.tech && (
				<div className="flex mt-10 items-center justify-center w-full">
					<label>Highlight Tweet</label>
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							copyText(
								getHighlightText(
									episode.guest.twitter,
									episode.tech ? episode.tech : "tech not found",
									`${episode.uri}`
								)
							);
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default twitter;
