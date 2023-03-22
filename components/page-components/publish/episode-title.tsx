import { Episode } from "@types";

const episode = ({ episode }: { episode: Episode }) => {
	return (
		<div className="text-2xl mb-5">
			{episode.title ? episode.title : "Title not found"}
		</div>
	);
};

export default episode;
