import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar w-full flex justify-between items-center py-4 px-8 bg-[rgba(255,_255,_255,_0.25)] border border-[rgba(255,_255,_255,_0.25)] fixed z-10">
      <div className="app__navbar-logo flex justify-start items-center">
        <img src={images.logo} alt="logo" width="80" height="40" />
      </div>
      <ul className="app__navbar-links lg:flex justify-center items-center list-none hidden  space-x-10 w-full">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li
            className="flex justify-center items-center text-sm text-left text-default-700 cursor-pointer flex-col"
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`} className="uppercase font-medium text-default-700">{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu bg-{} cursor-pointer text-secondary lg:hidden w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-secondary">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="text-white" />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="bg-white fixed top-0 bottom-0 right-0 z-20 py-4 px-8 w-[80%] h-screen flex justify-end items-end flex-col"
          >
            <div className="h-[35px] w-[35px] flex items-center justify-center cursor-pointer font-extrabold text-2xl" onClick={() => setToggle(false)}>
              X
            </div>
            <ul className="list-none h-full w-full m-0 p-0 flex flex-col items-start justify-start text-default-700">
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item} className="m-4 hover:text-secondary">
                  <a href={`#${item}`} onClick={() => setToggle(false)} className="text-base uppercase font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
