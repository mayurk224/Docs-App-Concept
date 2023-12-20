import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, praesentium! this is desc',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, praesentium! this is desc',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'blue' },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, praesentium! this is desc',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
  ];

  return (
    <>
      <div ref={ref} className="w-screen h-screen p-5 flex gap-5 flex-wrap bg-zinc-800/20 top-0 left-0 fixed z-[3]">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
