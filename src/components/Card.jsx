import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownloadCloud } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({ data, reference }) {
  const { desc, filesize, close, tag } = data;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.2}}
      dragElastic={0.2}
      className='w-60 relative flex-shrink-0 h-72 rounded-[45px] bg-zinc-900/90 py-10 px-8 text-white overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex items-center px-8 py-3 justify-between mb-3'>
          <h5>{filesize}</h5>
          <span className={`w-7 h-7 bg-zinc-600 rounded-full items-center justify-center flex`}>
            {close ? <IoClose /> : <LuDownloadCloud size='.8em' color='#fff' />}
          </span>
        </div>
        {tag.isOpen && (
          <div
            className={`tag w-full py-5 ${tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}
          >
            <h3 className='text-sm font-semibold'>{tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
