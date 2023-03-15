import { ILink } from "@types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "./link";

const linkContainer = () => {
	const [links, setLinks] = useState<ILink[] | []>([]);
	const addLink = () => {
		setLinks([...links, { id: uuidv4(), sanityID: "", value: "" }]);
	};

	return (
		<div className="w-full flex flex-col items-center ">
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
			<button
				className="btn btn-outline mt-5"
				onClick={() => console.log(links)}
			>
				Edit Links
			</button>
		</div>
	);
};

export default linkContainer;
