import { Episode, ILink } from "@types";
import { useState, useEffect, useRef } from "react";
import Link from "./link";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";
import { disableButton } from "@utils";

const linkContainer = ({ episode }: { episode: Episode }) => {
	const { userId } = useAuth();
	const [show, setShow] = useState<Boolean>(false);
	const [links, setLinks] = useState<ILink[] | []>([]);

	const demoRef = useRef<HTMLInputElement>(null);
	const repoRef = useRef<HTMLInputElement>(null);
	const addLink = () => {
		setLinks([...links, { id: uuidv4(), value: "" }]);
	};
	const router = useRouter();

	useEffect(() => {
		if (episode.links) {
			setLinks(episode.links);
		}
	}, []);

	const handleLinkChange = (id: string, newValue: string) => {
		setLinks((prevLinks) =>
			prevLinks.map((link) =>
				link.id === id ? { ...link, value: newValue } : link
			)
		);
	};
	const updateLinks = async () => {
		await axios.post("/api/update-links", {
			ep: episode,
			links: links,
			demo: demoRef.current?.value,
			repo: repoRef.current?.value,
		});
		router.push("/");
	};

	const isDisabled = disableButton(userId as string);
	return (
		<div className="w-full flex flex-col items-center mt-[100px]">
			<div className="form-control">
				<label className="label cursor-pointer ">
					<span className="label-text mr-10">Add Repo & Demo</span>
					<input
						type="checkbox"
						className="toggle"
						onChange={() => {
							setShow(!show);
						}}
						checked={show ? true : false}
					/>
				</label>
			</div>
			{show && (
				<div>
					<div className="w-full flex  items-center">
						<label className="label">Demo</label>
						<input
							defaultValue={JSON.stringify(episode.demo)}
							type="text"
							ref={demoRef}
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div className="w-full flex  items-center">
						<label className="label">Repo</label>
						<input
							defaultValue={episode.repo}
							type="text"
							ref={repoRef}
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
				</div>
			)}
			<div>
				<button className="btn btn-outline mt-5" onClick={addLink}>
					Add Link
				</button>
			</div>
			<div className=" max-h-48 overflow-scroll overflow-x-hidden w-full">
				{links.length > 0 &&
					links.map((link) => {
						return (
							<Link key={link.id} link={link} onLinkChange={handleLinkChange} />
						);
					})}
			</div>
			{links.length > 0 && (
				<div>
					<button
						className="btn btn-outline mt-5"
						onClick={updateLinks}
						disabled={isDisabled}
					>
						Edit Links
					</button>
					<button onClick={() => console.log(links)}>Log links</button>
				</div>
			)}
		</div>
	);
};
export default linkContainer;
