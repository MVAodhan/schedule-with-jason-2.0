import { ILink } from '@types';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const link = ({ links }: { links: ILink[] }) => {
  let linkRef = useRef<HTMLInputElement>(null);
  const handleChange = () => {
    for (const link in links) {
      if (links && links[link].id === id) {
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
        ref={linkRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        // onChange={() => handleChange(links)}
      />
    </div>
  );
};

export default link;
