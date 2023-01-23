import { getHighlightText } from '@utils';
import { VscCopy } from 'react-icons/vsc';

const twitter = ({ episode }: { episode: any }) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <div className="flex mt-10 items-center w-full">
        <label>Highlight Tweet</label>
        <VscCopy
          className="cursor-pointer pl-1 h-8 w-8"
          onClick={() => {
            copyText(
              getHighlightText('suiteasdesign', 'webdev', 'aodhan.netlify.app')
            );
          }}
        />
      </div>
    </div>
  );
};

export default twitter;
