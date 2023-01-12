import { getDates } from '@utils';
import { useRef } from 'react';

import { VscCopy } from 'react-icons/vsc';

const calendar = ({ episode }: { episode: any }) => {
  const title = `LWJ: ${episode.title} with ${episode.guest.name}`;

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);

  const { usDate, nzDate } = getDates(episode.date, episode.timezone);
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
          <div className="mt-10">US Date: {usDate}</div>
          <div className="mt-10 pl-10">NZ Date: {nzDate}</div>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div className="mt-10 flex justify-center items-center">
          Guest invite
          <VscCopy
            className="cursor-pointer pl-1 h-8 w-8"
            onClick={() => {
              navigator.clipboard.writeText(
                'lengstorf.com_9plj1m6u9vtddldoinl0hs2vgk@group.calendar.google.com'
              );
            }}
          />
        </div>
        <div className="mt-10 flex justify-center items-center">
          Location
          <VscCopy
            className="cursor-pointer pl-1 h-8 w-8"
            onClick={() => {
              navigator.clipboard.writeText('https://twitch.tv/jlengstorf');
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
        <VscCopy
          className="cursor-pointer pl-1 h-8 w-8"
          onClick={() => {
            copyValue(descRef);
          }}
        />
      </div>
    </div>
  );
};

export default calendar;
