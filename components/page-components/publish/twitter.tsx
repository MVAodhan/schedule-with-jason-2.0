import { Episode } from "@types";
import { getHighlightText } from "@utils";
import { VscCopy } from "react-icons/vsc";

const twitter = ({ episode }: { episode: Episode }) => {
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	console.log(episode);

	return (
		<div>
			<div className="flex mt-10 items-center w-full">
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
		</div>
	);
};

export default twitter;
