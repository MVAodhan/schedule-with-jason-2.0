import { Episode, ILink } from "@types";
import { useState, useEffect } from "react";
import Link from "./link";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";

const linkContainer = ({ episode }: { episode: Episode }) => {
	const [links, setLinks] = useState<ILink[] | []>([]);
	const addLink = () => {
		setLinks([...links, { id: uuidv4(), value: "" }]);
	};
	const router = useRouter();

	useEffect(() => {
		if (episode.links) {
			console.log(episode.links, Array.isArray(episode.links));
			setLinks(episode.links);
		}
	}, []);

	const updateLinks = async () => {
		await axios.post("/api/update-links", {
			ep: episode,
			links: links,
		});
		router.push("/");
	};

	return (
		<div className="w-full flex flex-col items-center ">
			<div className="form-control">
				<label className="label cursor-pointer ">
					<span className="label-text mr-10">Add Repo & Demo</span>
					<input type="checkbox" className="toggle" />
				</label>
			</div>
			<div>
				<button className="btn btn-outline mt-5" onClick={addLink}>
					Add Link
				</button>
			</div>
			<div className=" max-h-48 overflow-scroll overflow-x-hidden w-full">
				{links.length > 0 &&
					links.map((link) => {
						return (
							<Link key={link.id} id={link.id} link={link} links={links} />
						);
					})}
			</div>
			{links.length > 0 && (
				<button className="btn btn-outline mt-5" onClick={updateLinks}>
					Edit Links
				</button>
			)}
		</div>
	);
};

export default linkContainer;
