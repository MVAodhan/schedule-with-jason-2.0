import { ILink } from "@types";
import { useRef } from "react";

const link = ({
	link,
	onLinkChange,
}: {
	link: ILink;
	onLinkChange: Function;
}) => {
	let linkRef = useRef<HTMLInputElement>(null);
	const handleChange = (id: string, newValue: string) => {
		onLinkChange(id, newValue);
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
					handleChange(link.id, linkRef.current?.value || "");
				}}
			/>
		</div>
	);
};

export default link;
// const link = ({
// 	id,
// 	link,
// 	links,
// }: {
// 	id: string;
// 	link: ILink;
// 	links: ILink[] | [];
// }) => {
// 	let linkRef = useRef<HTMLInputElement>(null);
// 	const handleChange = (links: ILink[]) => {
// 		for (let link in links) {
// 			if (links.length > 0 && links[link].id === id) {
// 				links[link].value = linkRef.current?.value;
// 			} else {
// 				return;
// 			}
// 		}
// 	};
// 	console.log(links);
// 	console.log(link.id);
// 	return (
// 		<div className="w-full flex flex-col items-center">
// 			<label className="label"></label>
// 			<input
// 				defaultValue={link.value}
// 				type="text"
// 				ref={linkRef}
// 				placeholder="Type here"
// 				className="input input-bordered w-full max-w-xs"
// 				onChange={() => {
// 					handleChange(links);
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default link;
