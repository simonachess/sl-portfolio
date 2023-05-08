import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => (
  <>
    <h2 className="text-5xl font-extrabold text-center uppercase">Take a coffee & chat with me</h2>
    <div className="w-[60%] flex justify-evenly items-center flex-wrap mt-56 mx-8 mb-8">
      <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#fef4f5] hover:shadow-xl transition-all duration-300 ease-in-out">
        <img src={images.email} alt="email" className="w-10 h-10 mx-3" />
        <a href="mailto:simona.limonte@gmail.com" className="text-sm text-left text-default-700 font-medium">
          simona.limonte@gmail.com
        </a>
      </div>
      <div className="min-w-[290px] flex flex-row justify-start items-center my-4 p-4 rounded-xl cursor-pointer bg-[#f2f7fb] hover:shadow-xl transition-all duration-300 ease-in-out">
        <img src={images.mobile} alt="phone" className="w-10 h-10 mx-3" />
        <a href="tel:+37063975725" className="text-sm text-left text-default-700 font-medium">
          +37063975725
        </a>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full flex-col'),
  'contact',
  'bg-primary',
);
