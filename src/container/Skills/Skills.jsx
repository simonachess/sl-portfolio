import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../config';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center uppercase">Skills & Experiences</h2>

      <div className="w-[80%] mt-12 flex flex-col lg:flex-row">
        <motion.div className="flex w-full flex-wrap justify-center lg:justify-start items-start mb-20 lg:mb-0 lg:mr-20">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center text-center m-4 transition-all duration-300 ease-in-out"
              key={skill.name}
            >
              <div
                className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#fef4f5] hover:shadow-xl"
                style={{ backgroundColor: skill.bgColor ? skill.bgColor : '#edf2f8' }}
              >
                <img src={skill.icon ? urlFor(skill.icon) : '/img/web.png'} alt={skill.name} className="w-1/2" />
              </div>
              <p className="text-sm text-left text-default-700 mt-2 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex w-full justify-start items-start flex-col">
          {experiences.map((experience) => (
            <motion.div
              className="w-full flex flex-col lg:flex-row justify-start items-start my-4"
              key={experience.year}
            >
              <div className="mr-12 w-32">
                <p className="text-base font-extrabold text-secondary">{experience.year}</p>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="text-base text-default-900 text-left font-medium">{work.name}</h4>
                      <p className="text-sm text-left text-default-700 font-normal mt-1">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="!max-w-[300px] !bg-white rounded-md p-4 !text-default-700 text-center opacity-100 shadow-xl"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'flex-1 w-full flex-col'),
  'skills',
  'bg-white',
);
