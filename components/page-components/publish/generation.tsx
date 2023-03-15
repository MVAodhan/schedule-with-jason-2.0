import LinkContainer from "./linkContainer";

const generation = () => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-4/5 flex items-center  h-[400px]">
				<div className=" w-1/2  flex flex-col item-center">
					<label className="label flex justify-center">Chapters</label>
					<textarea
						className="textarea textarea-bordered w-full"
						placeholder="Chapters"
					></textarea>
					<button className="btn btn-outline mt-5">Add Chapters</button>
				</div>

				<div className="w-1/2 flex flex-col items-center">
					<LinkContainer />
				</div>
			</div>
		</div>
	);
};

export default generation;
