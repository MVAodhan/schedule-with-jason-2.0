import { useRef } from "react";

import { useAuth } from "@clerk/nextjs";
import { disableButton } from "@utils";

import { DateTime } from "luxon";

const Schedule = () => {
	const guestRef = useRef<HTMLInputElement | null>(null);
	const titleRef = useRef<HTMLInputElement | null>(null);
	const guestHandleRef = useRef<HTMLInputElement | null>(null);
	const textDescRef = useRef<HTMLTextAreaElement | null>(null);
	const twitterDescRef = useRef<HTMLTextAreaElement | null>(null);
	const dateRef = useRef<HTMLInputElement | null>(null);
	const timeRef = useRef<HTMLInputElement | null>(null);
	const techRef = useRef<HTMLInputElement | null>(null);
	const selectRef = useRef<HTMLSelectElement | null>(null);

	const { userId } = useAuth();

	const addScheduled = async () => {
		console.log(guestRef.current?.value);
		console.log(titleRef.current?.value);
		console.log(guestHandleRef.current?.value);
		console.log(twitterDescRef.current?.value);
		console.log(textDescRef.current?.value);
		console.log(dateRef.current?.value);
		console.log(timeRef.current?.value);
		console.log(techRef.current?.value);
		console.log(selectRef.current?.value);
		let date = DateTime.fromISO(
			`${dateRef.current?.value}T${timeRef.current?.value}`,
			{ zone: `${selectRef.current?.value}` }
		);
		const utcIsoDate = date.toUTC().toISO();
		console.log(date);
		console.log(utcIsoDate);
	};

	const isDisabled = disableButton(userId as string);
	return (
		<div className="w-full h-full flex flex-col items-center ">
			<div className="w-full flex">
				<div className="flex flex-col items-center justify-center w-1/2">
					<label className="label">Guest</label>
					<input
						ref={guestRef}
						type="text"
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-1/2">
					<label className="label">Guest Twitter</label>
					<input
						ref={guestHandleRef}
						type="text"
						className="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>

			<label className="label">Title</label>
			<input
				ref={titleRef}
				type="text"
				className="input input-bordered w-full max-w-xs"
			/>
			<div className="w-full flex">
				<div className="flex flex-col items-center justify-center w-1/2">
					<label className="label">Date</label>
					<input
						ref={dateRef}
						type="date"
						className="input input-bordered w-full max-w-xs"
						onChange={() => {
							console.log(dateRef.current?.value);
						}}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-1/2">
					<label className="label">Time</label>
					<input
						ref={timeRef}
						type="time"
						className="input input-bordered w-full max-w-xs"
						onChange={() => {
							console.log(timeRef.current?.value);
						}}
					/>
				</div>
			</div>
			<select
				ref={selectRef}
				className="select select-bordered w-full max-w-xs mt-10"
				onChange={() => {}}
			>
				<option disabled selected>
					Timezone
				</option>
				<option value="America/Los_Angeles">PST</option>
				<option value="Pacific/Auckland">NZST</option>
			</select>
			<label className="label"> Twitter Description</label>
			<textarea
				ref={twitterDescRef}
				className="textarea textarea-bordered w-3/5"
			></textarea>
			<label className="label"> Text Description</label>
			<textarea
				ref={textDescRef}
				className="textarea textarea-bordered w-3/5"
			></textarea>
			<label className="label">Technology</label>
			<input
				ref={techRef}
				type="text"
				className="input input-bordered w-full max-w-xs"
			/>
			<button className="btn mt-5" disabled={isDisabled} onClick={addScheduled}>
				Add Episode
			</button>
		</div>
	);
};

export default Schedule;
