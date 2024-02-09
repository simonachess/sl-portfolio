import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../config';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center uppercase">My <span className="text-secondary">Portfolio</span> Section</h2>

      <div className="flex justify-start items-center flex-wrap mt-16 mb-8">
        {['Tailwind', 'React JS', 'Next JS', 'JS', 'HTML/CSS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`py-2 px-4 rounded-lg text-default-900 font-extrabold flex justify-center items-center text-sm text-left cursor-pointer transition-all duration-300 m-2 hover:bg-secondary hover:text-white ${activeFilter === item ? 'bg-secondary text-white' : 'bg-white'}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork.sort((a, b) => {
          /* eslint-disable no-underscore-dangle */
          const result = new Date(b._updatedAt) - new Date(a._updatedAt);
          /* eslint-enable no-underscore-dangle */
          return result;
        }).map((work, index) => (
          <div
            className="flex flex-col items-center w-[270px] h-[388px] overflow-hidden m-8 p-4 rounded-lg bg-white text-default-900 cursor-pointer transition-all duration-300 ease-in hover:shadow-xl"
            key={index}
          >
            <div
              className="flex justify-center items-center w-full h-[230px] relative"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} className="w-full h-full rounded-lg object-cover" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="flex justify-center items-center absolute inset-0 w-full h-full bg-[rgba(0,_0,_0,_0.5)] rounded-lg opacity-0 transition-all duration-300 ease-in"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[rgba(0,_0,_0,_0.5)] text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in"
                  >
                    <AiFillEye className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[rgba(0,_0,_0,_0.5)] text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-in"
                  >
                    <AiFillGithub className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="flex justify-center items-center p-2 w-full relative flex-col">
              <h4 className="text-base font-extrabold text-default-900 text-left mt-4 leading-6">{work.title}</h4>
              <p className="text-sm text-left text-default-700" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="flex justify-center items-center absolute py-2 px-4 rounded-xl bg-white -top-[25px]">
                <p className="text-sm text-left text-default-700">{work.tags?.[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'flex-1 w-full flex-col'),
  'work',
  'bg-primary',
);
