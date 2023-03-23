import { Episode } from "@types";
import { useState } from "react";
import Generation from "./generation";
import Publishing from "./publishing";

const youtube = ({ episode }: { episode: Episode }) => {
	const [activeTab, setActiveTab] = useState<string>("generation");
	const renderTab = () => {
		switch (activeTab) {
			case "generation":
				return <Generation episode={episode} />;
				
			default:
				return <Publishing episode={episode} />;
		}
	};
	return (
		<div className="flex flex-col items-center w-full">
			<div className="tabs tabs-boxed w-full flex justify-center bg-[#FFFFFF] ">
				<a
					className={`tab ${activeTab === "generation" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("generation")}
				>
					Generation text
				</a>
				<a
					className={`tab ${activeTab === "publishing" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("publishing")}
				>
					Publishing text
				</a>
			</div>
			{renderTab()}
		</div>
	);
};

export default youtube;
