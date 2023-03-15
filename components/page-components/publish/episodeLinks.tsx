import { useState } from "react";
import Link from "./link";

import { ILink } from "@types";
const episodeLinks = () => {
	const [links, setLinks] = useState<ILink[] | null>([]);

	return (
		<div>
			<Link links={links} />
		</div>
	);
};

export default episodeLinks;
