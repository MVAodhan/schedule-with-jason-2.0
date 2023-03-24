import { useState } from "react";
import Initial from "./sanity/Initial";
import Final from "./sanity/Final";
import { Episode } from "@types";
import { getDates } from "@utils";

const tabs = [
	{ header: "Initial Details", id: "init" },
	{ header: "Finishing Details", id: "fin" },
];

const sanity = ({ episode }: { episode: Episode }) => {
	const [activeTab, setActiveTab] = useState<string>("init");

	const { usDate, nzDate } = getDates(episode.date, "America/Los_Angeles");

	const renderTab = () => {
		switch (activeTab) {
			case "fin":
				return <Final />;
			default:
				return <Initial episode={episode} usDate={usDate} nzDate={nzDate} />;
		}
	};

	return (
		<div className="flex flex-col items-center w-3/5">
			<div className="tabs tabs-boxed w-full flex justify-center bg-[#FFFFFF] ">
				{tabs.map((tab, i) => (
					<a
						key={i}
						className={`tab ${tab.id === activeTab ? "tab-active" : ""}`}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.header}
					</a>
				))}
			</div>
			{renderTab()}
		</div>
	);
};

export default sanity;
