import { ILink } from "@types";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const link = ({
	id,
	link,
	links,
	setLinks,
}: {
	id: string;
	link: ILink;
	links: ILink[] | [];
	setLinks: Function;
}) => {
	let linkRef = useRef<HTMLInputElement>(null);
	const handleChange = (links: ILink[]) => {
		for (const link in links) {
			if (links.length > 0 && links[link].id === id) {
				links[link].value = linkRef.current?.value;
			} else {
				const newLink = {
					id: uuidv4(),
					value: linkRef.current?.value,
				};
				setLinks([...links, newLink]);
			}
		}
	};
	return (
		<div className="w-full flex flex-col items-center">
			<label className="label"></label>
			<input
				defaultValue={link.value}
				type="text"
				ref={linkRef}
				placeholder="Type here"
				className="input input-bordered w-full max-w-xs"
				onChange={() => {
					if (links.length > 1) {
						handleChange(links);
					}
				}}
			/>
		</div>
	);
};

export default link;
