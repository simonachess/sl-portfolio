import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../config';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="w-[60%] min-h-[320px] bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 ease-in-out flex flex-row justify-center items-center">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} className="w-[100px] h-[100px] rounded-full object-cover" />
            <div className="flex-1 h-full px-8 text-left flex flex-col justify-around items-start">
              <p className="text-left text-default-900 text-xl leading-8 ">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="font-semibold text-secondary mt-8">{testimonials[currentIndex].name}</h4>
                <h5 className="text-sm text-left text-default-700 mt-1.5 font-normal">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="group cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition-all duration-300 ease-in-out bg-white hover:bg-secondary" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft className="w-5 h-5 text-secondary group-hover:text-white" />
            </div>

            <div className="group cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition-all duration-300 ease-in-out bg-white hover:bg-secondary" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight className="w-5 h-5 text-secondary group-hover:text-white" />
            </div>
          </div>
          <div className="w-[80%] flex-wrap mt-8 flex justify-center items-center">
            { brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={brand._id}
                className="w-[150px] m-6"
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} className="w-full h-auto object-cover grayscale hover:grayscale-0" />
              </motion.div>
            ))}
          </div>
        </>

      )}
    </>

  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'flex-1 w-full flex-col'),
  'testimonial',
  'bg-primary',
);
