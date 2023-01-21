import { ILink } from '@types';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const link = ({
  id,
  defaultValue,
  link,
  links,
}: {
  id: string;
  defaultValue: string | undefined;
  link: ILink;
  links: ILink[] | [];
}) => {
  let linkRef = useRef<HTMLInputElement>(null);
  const handleChange = (links: ILink[]) => {
    for (const link in links) {
      if (links.length > 1 && links[link].id === id) {
        links[link].value = linkRef.current?.value;
      } else {
        const link = {
          id: uuidv4(),
          value: linkRef.current?.value,
        };
      }
    }
  };
  return (
    <div>
      <label className="label"></label>
      <input
        defaultValue={link.value}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={() => {
          if (links.length > 1) {
            handleChange(links);
          }
        }}
      />
    </div>
  );
};

export default link;
