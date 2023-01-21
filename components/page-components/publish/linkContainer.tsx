import React from 'react';
import { ILink } from '@types';
import { useState } from 'react';
import Link from './link';
const linkContainer = () => {
  const [links, setLinks] = useState<ILink[] | []>([
    {
      id: '1',
      value: 'test link',
    },
  ]);

  return (
    <div className="flex flex-col items-center">
      <button className="btn btn-outline">Add Link</button>
      {links.length > 0 &&
        links.map((link) => {
          if (link.id === 'repo' || link.id === 'demo') {
            return;
          }
          return (
            <Link
              key={link.id}
              id={link.id}
              defaultValue={link.value}
              link={link}
              links={links}
            />
          );
        })}
    </div>
  );
};

export default linkContainer;
