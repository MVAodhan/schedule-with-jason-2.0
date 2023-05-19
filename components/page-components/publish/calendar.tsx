import { useAuth } from "@clerk/nextjs";
import { Episode } from "@types";

// import { getScheduleTweet } from "@utils";
import { getDates, getScheduleTime, getScheduleTweet } from "@utils";
import { useEffect, useRef, useState } from "react";

import { VscCopy } from "react-icons/vsc";

const calendar = ({ episode }: { episode: Episode }) => {
	const { userId } = useAuth();
	const title = `LWJ: ${episode.title} with ${episode.guest.name}`;

	const titleRef = useRef<HTMLInputElement | null>(null);
	const descRef = useRef<HTMLTextAreaElement | null>(null);
	const twitterDescRef = useRef<HTMLTextAreaElement | null>(null);
	const [twitterText, setTwitterText] = useState<string>("");

	const [twoWeeks, setTwoWeeks] = useState<string>("");
	const [ninetyMinutes, setNinetyMinutes] = useState<string>("");

	const { usDate, nzDate } = getDates(
		episode.date,
		episode.timezone ? episode.timezone : "America/Los_Angeles"
	);
	const copyValue = (ref: any) => {
		if (ref.current?.value !== null) {
			const string = ref.current?.value.toString() as string;
			navigator.clipboard.writeText(string);
		}
	};

	useEffect(() => {
		setTwoWeeks(getScheduleTime(episode.date, "twoWeeks"));
		setNinetyMinutes(getScheduleTime(episode.date));
	}, []);

	return (
		<div className="flex flex-col items-center w-3/5">
			<div className="flex mt-10 items-center w-full">
				<input
					type="text"
					defaultValue={title}
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
			<div className="flex">
				<div className="flex">
					<div className="mt-10">US Date: {usDate ? usDate : "no date"}</div>
					<div className="mt-10 pl-10">
						NZ Date: {nzDate ? nzDate : "no date"}
					</div>
				</div>
			</div>
			<div className="flex w-full justify-around">
				<div className="mt-10 flex justify-center items-center">
					Guest invite
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							navigator.clipboard.writeText(
								"lengstorf.com_9plj1m6u9vtddldoinl0hs2vgk@group.calendar.google.com"
							);
						}}
					/>
				</div>
				<div className="mt-10 flex justify-center items-center">
					Guest Twitter
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							navigator.clipboard.writeText(episode.guest.twitter);
						}}
					/>
				</div>
				<div className="mt-10 flex justify-center items-center">
					Location
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							navigator.clipboard.writeText("https://twitch.tv/jlengstorf");
						}}
					/>
				</div>
			</div>

			<div className="flex mt-10 items-center w-full">
				<textarea
					className="textarea textarea-bordered w-full "
					defaultValue={episode.description}
					ref={descRef}
				></textarea>

				<button disabled={userId !== "user_2MwVLo4xFl6ch7xCP1Z4PIuFjpV"}>
					<VscCopy
						className="cursor-pointer pl-1 h-8 w-8"
						onClick={() => {
							copyValue(descRef);
						}}
					/>
				</button>
			</div>

			<div className="flex flex-col mt-10 items-center w-full">
				<label className="mb-10">
					Enter a twitter description to get sceduling tweets
				</label>
				<textarea
					className="textarea textarea-bordered w-full"
					ref={twitterDescRef}
					onChange={() =>
						setTwitterText(twitterDescRef.current?.value as string)
					}
				></textarea>
			</div>
			{twitterText.length > 1 && (
				<>
					<div className="w-full mt-10 mb-10 flex justify-between">
						<div className="flex flex-col items-center">
							{twoWeeks}
							<div className="flex">
								<label className="label">Two Weeks</label>
								<VscCopy
									className="cursor-pointer pl-1 h-8 w-8"
									onClick={() => {
										let tweet = getScheduleTweet(
											"twoWeeks",
											twitterText,
											episode.uri
										);
										navigator.clipboard.writeText(tweet);
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col items-center">
							{ninetyMinutes}
							<div className="flex ">
								<label className="label">90 Mins</label>
								<VscCopy
									className="cursor-pointer pl-1 h-8 w-8"
									onClick={() => {
										let tweet = getScheduleTweet(
											"ninetyMinutes",
											twitterText,
											episode.uri
										);
										navigator.clipboard.writeText(tweet);
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col items-center ">
							{usDate}
							<div className="flex ">
								<label className="label">Live</label>
								<VscCopy
									className="cursor-pointer pl-1 h-8 w-8"
									onClick={() => {
										let tweet = getScheduleTweet("Live", twitterText);
										navigator.clipboard.writeText(tweet);
									}}
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default calendar;
