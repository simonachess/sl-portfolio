import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="flex flex-col lg:flex-row justify-center items-center flex-1 w-full h-full pt-24 px-8">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-start items-start h-full mx-8"
    >
      <div className="flex-[0.65] h-full flex justify-end items-end flex-col mx-8">
        <div className="w-full py-4 px-8 bg-white rounded-2xl shadow-xl flex flex-col justify-end items-end cursor-default">
          <div className="flex flex-col">
            <div className="flex justify-between mb-4">
              <p className="text-sm text-left text-default-700">Hello, I am</p>
              <span className="text-4xl">👋</span>
            </div>
            <h1 className="text-5xl font-extrabold text-center uppercase">Simona</h1>
          </div>
        </div>

        <div className="py-4 px-8 bg-white rounded-2xl w-auto shadow-xl flex-col mt-12 flex justify-center items-center cursor-default">
          <p className="text-sm text-default-700 w-full uppercase text-right">Web Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="flex-1 h-full flex justify-center items-center"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.laptop}
        alt="profile_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="flex flex-col justify-evenly items-start h-full ml-4 [&>*:nth-child(1)]:w-[100px] [&>*:nth-child(1)]:h-[100px] [&>*:nth-child(2)]:w-[150px] [&>*:nth-child(2)]:h-[150px] [&>*:nth-child(2)]:m-7 [&>*:nth-child(3)]:h-[70px] [&>*:nth-child(3)]:w-[70px]"
    >
      {[images.tailwind, images.react, images.javascript].map((circle, index) => (
        <div
          className="w-[100px] h-[100px] rounded-[50%] bg-white shadow-xl flex justify-center items-center "
          key={`circle-${index}`}
        >
          <img src={circle} alt="profile_bg" className="w-[60%] h-[60%]" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
