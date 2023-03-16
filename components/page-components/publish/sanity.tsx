import { useRef, useState } from "react";
import { VscCopy } from "react-icons/vsc";
import { getDates } from "@utils";
import Initial from "./sanity/Initial";
import Final from "./sanity/Final";
import { Episode } from "@types";

const tabs = [
	{ header: "Initial Details", id: "init" },
	{ header: "Finishing Details", id: "fin" },
];

const sanity = ({ episode }: { episode: Episode }) => {
	const [activeTab, setActiveTab] = useState<string>("init");

	const renderTab = () => {
		switch (activeTab) {
			case "fin":
				return <Final episode={episode} />;
				break;
			default:
				return <Initial episode={episode} />;
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
