import { Episode } from '@types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDates, getUTCDate } from 'utils';

const Card = ({ episode }: { episode: Episode }) => {
  const [usDate, setUsDate] = useState<string>('');
  const [nzDate, setNzDate] = useState<string>('');
  const utc = getUTCDate(episode.date, episode.timezone);
  useEffect(() => {
    let { usDate, nzDate } = getDates(episode.date, episode.timezone);

    setUsDate(usDate);
    setNzDate(nzDate);
  }, []);

  return (
    <Link href={`/publish/${utc}`}>
      <div className="card w-full bg-base-100 shadow-xl mx-auto ring ring-[#FF9EB1]">
        <div className="card-body ">
          <h2 className="card-title">{episode.title}</h2>
          <p>{episode.guest}</p>
          <div className="flex flex-row ">
            <div className="w-1/2">US Date: {usDate}</div>
            <div>NZ Date: {nzDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
