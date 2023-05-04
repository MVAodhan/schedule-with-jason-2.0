import { Episode } from "@types";
import { VscCopy } from "react-icons/vsc";
import { useRef } from "react";

const Initial = ({
	episode,
	usDate,
	nzDate,
}: {
	episode: Episode;
	usDate: string;
	nzDate: string;
}) => {
	const nameRef = useRef<HTMLInputElement | null>(null);
	const titleRef = useRef<HTMLInputElement | null>(null);
	const descRef = useRef<HTMLTextAreaElement | null>(null);

	const copyValue = (ref: any) => {
		if (ref.current?.value !== null) {
			const string = ref.current?.value.toString() as string;
			navigator.clipboard.writeText(string);
		}
	};
	return (
		<>
			<div className="flex mt-10 items-center w-full">
				<input
					type="text"
					defaultValue={episode.title}
					ref={titleRef}
					className="input input-bordered w-full"
				/>
				<VscCopy
					className="cursor-pointer pl-1 h-8 w-8"
					onClick={() => {
						copyValue(titleRef);
					}}
				/>
			</div>
			<div className="flex mt-10 items-center w-full">
				<textarea
					className="textarea textarea-bordered w-full "
					defaultValue={episode.description}
					ref={descRef}
				></textarea>
				<VscCopy
					className="cursor-pointer pl-1 h-8 w-8"
					onClick={() => {
						copyValue(descRef);
					}}
				/>
			</div>
			<div className="flex">
				<div className="flex">
					<div className="mt-10">US Date: {usDate ? usDate : "no date"}</div>
					<div className="mt-10 pl-10">
						NZ Date: {nzDate ? nzDate : "no date"}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full mt-10">
				<input
					type="text"
					defaultValue={episode.guest.name}
					ref={nameRef}
					className="input input-bordered "
				/>
				<VscCopy
					className="cursor-pointer pl-1 h-8 w-8"
					onClick={() => {
						copyValue(nameRef);
					}}
				/>
			</div>
		</>
	);
};

export default Initial;
