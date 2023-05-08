import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../config';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center uppercase">I Know that <span className="text-secondary">Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-full lg:w-[390px] flex items-center flex-col m-8"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="w-[250px] rounded-2xl object-cover" />
            <h2 className="text-base font-extrabold text-default-900 text-left" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="text-sm text-left text-default-700" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'flex-1 w-full flex-col'),
  'about',
  'bg-white',
);
