import { Episode } from '@types';

const Card = ({ episode }: { episode: Episode }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto ring ring-[#FF9EB1]">
      <div className="card-body ">
        <h2 className="card-title">{episode.title}</h2>
        <p>{episode.guest}</p>
        <div className="flex flex-row ">
          <div className="w-1/2">US Date:</div>
          <div>NZ Date</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
