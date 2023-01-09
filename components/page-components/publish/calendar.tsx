import { utcToZonedTime, format } from 'date-fns-tz';
import { useRef } from 'react';

import { VscCopy } from 'react-icons/vsc';

const calendar = ({ episode }: { episode: any }) => {
  const title = `LWJ: ${episode.title} with ${episode.guest.name}`;

  const nameRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);
  const inviteRef = useRef<HTMLElement | null>(null);

  const copyValue = (ref: any) => {
    if (ref.current?.value !== null) {
      const string = ref.current?.value.toString() as string;
      navigator.clipboard.writeText(string);
    }
  };
  const date = new Date(episode.date);
  const timeZone = 'America/Los_Angeles';
  const USDate = utcToZonedTime(date, timeZone);
  const pattern = 'HH:mm dd MMM';
  const USDateFormatted = format(USDate, pattern, {
    timeZone: 'America/Los_Angeles',
  });
  const NZDateFormatted = format(date, pattern, {
    timeZone: 'Pacific/Auckland',
  });
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
          <div className="mt-10">US Date: {USDateFormatted}</div>
          <div className="mt-10 pl-10">NZ Date: {USDateFormatted}</div>
        </div>
      </div>
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
