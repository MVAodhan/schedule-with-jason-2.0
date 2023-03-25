import { ILink } from "@types";
import { useRef } from "react";

const link = ({
	id,
	link,
	links,
}: {
	id: string;
	link: ILink;
	links: ILink[] | [];
}) => {
	let linkRef = useRef<HTMLInputElement>(null);
	const handleChange = (links: ILink[]) => {
		for (const link in links) {
			if (links.length > 0 && links[link].id === id) {
				links[link].value = linkRef.current?.value;
			} else {
				return;
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
