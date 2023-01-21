import LinkContainer from './linkContainer';

const generation = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-center">
        <label className="label">Chapters</label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Chapters"
        ></textarea>
        <div>
          <LinkContainer />
        </div>
      </div>
    </div>
  );
};

export default generation;
