import { useRef } from 'react';
import { EpisodeApi } from '@types';
import { VscCopy } from 'react-icons/vsc';
import { getDates } from '@utils';

const sanity = ({ episode }: { episode: EpisodeApi }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);

  console.log(episode.date);
  const { nzDate, usDate } = getDates(episode.date, 'utc');

  const copyValue = (ref: any) => {
    if (ref.current?.value !== null) {
      const string = ref.current?.value.toString() as string;
      navigator.clipboard.writeText(string);
    }
  };
  return (
    <div className="flex flex-col items-center w-3/5">
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
          <div className="mt-10">US Date: {usDate}</div>
          <div className="mt-10 pl-10">NZ Date: {nzDate}</div>
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
    </div>
  );
};

export default sanity;
