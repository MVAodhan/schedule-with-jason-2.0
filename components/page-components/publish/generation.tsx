import LinkContainer from './linkContainer';

const generation = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/12 flex flex-col items-center">
        <label className="label">Chapters</label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Chapters"
        ></textarea>
        <div className="w-full flex flex-col items-center">
          <LinkContainer />
        </div>
      </div>
    </div>
  );
};

export default generation;
