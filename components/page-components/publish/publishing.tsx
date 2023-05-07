import { Episode } from "@types";
import { getCredits } from "@utils";
import { VscCopy } from "react-icons/vsc";

const publishing = ({ episode }: { episode: Episode }) => {
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	const getTags = (jsonString: any) => {
		const jsonArray = JSON.parse(jsonString);

		const labels = jsonArray.map((item: { label: any }) => item.label);

		let tags = "";

		for (let label of labels) {
			tags = tags + `${label},`;
		}
		const tagsWithoutComma = tags.replace(/,\s*$/, "");

		return tagsWithoutComma;
	};

	const formatLinks = () => {
		if (episode?.links && episode.links.length > 1) {
			let linkSet = new Set();
			let links = episode.links?.map((link) => `- ${link.value}`) as String[];
			for (let link of links) {
				linkSet.add(link);
			}

			// console.log(linkSet);
			let linksString: any = [];
			linkSet.forEach((link) => {
				if (link !== "- https://www.learnwithjason.dev/schedule") {
					linksString = [...linksString, link];
				}
			});
			// console.log(linksString);
			let uniqueStrings = linksString.join("\n");

			return uniqueStrings;
		}
		return "No links found";
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

	console.log(typeof episode.tags);
	console.log(Boolean(episode.tags));

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
					// copyText(youtubeDescription);
					onClick={() => {
						copyText(youtubeDescription);
					}}
				/>
			</div>
			{episode.tags?.trim().length > 2 && (
				<div className="flex items-center mt-5">
					<label>Youtube Tags</label>
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						// copyText(youtubeDescription);
						onClick={() => {
							copyText(getTags(episode.tags));
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default publishing;
