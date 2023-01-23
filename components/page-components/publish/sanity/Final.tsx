import { EpisodeApi } from '@types';
import { captionDisclaimer } from '@utils';
import { VscCopy } from 'react-icons/vsc';

const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
};

const Final = ({ episode }: { episode: EpisodeApi }) => {
  return (
    <div>
      {' '}
      <div className="flex mt-10 items-center w-full">
        <label>caption disclainmer</label>
        <VscCopy
          className="cursor-pointer pl-1 h-8 w-8"
          onClick={() => {
            copyText(captionDisclaimer());
          }}
        />
      </div>
    </div>
  );
};

export default Final;
