import { EpisodeApi } from '@types';
import { getCredits } from '@utils';
import { VscCopy } from 'react-icons/vsc';

const publishing = ({ episode }: { episode: EpisodeApi }) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const youtubeDescription = `
  ${episode.description}

  ${getCredits()}`;
  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="flex items-center mt-5">
        <label>Youtube Description</label>
        <VscCopy
          className="cursor-pointer pl-1 h-8 w-8"
          onClick={() => {
            copyText(youtubeDescription);
          }}
        />
      </div>
    </div>
  );
};

export default publishing;
