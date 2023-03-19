import { Episode } from "@types";
import { getCredits } from "@utils";
import { VscCopy } from "react-icons/vsc";

const publishing = ({ episode }: { episode: Episode }) => {
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	const formatLinks = () => {
		let links = episode.links?.map((link) => `- ${link.value}`);

		let linkString = links?.join("\n");

		return linkString;
	};

	const youtubeDescription = `
${episode.description}

${episode.demo ?? `Demo ${episode.demo}`}

${episode.repo ?? `Repo ${episode.repo}`}

Upcoming episodes:
https://lwj.dev/schedule

Links & Resources:

${formatLinks()}

${getCredits()}

Chapters:

${episode.chapters}
`;

	return (
		<div className="flex flex-col items-center w-3/5 m-5">
			<div className="w-full flex flex-col items-center">
				<div className="flex flex-row">
					<label className="label">Title</label>
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							copyText(episode.title);
						}}
					/>
				</div>
			</div>
			<div className="flex items-center mt-5">
				<label>Youtube Description</label>
				<VscCopy
					className="cursor-pointer pl-1 h-8 w-8"
					onClick={() => {
						copyText(youtubeDescription);
					}}
				/>
			</div>
		</div>
	);
};

export default publishing;
