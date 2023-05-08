import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="hidden lg:flex justify-end items-center flex-col px-4 py-8">
    <div className="group w-10 h-10 rounded-full bg-white my-1 border border-1 border-default-100 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary cursor-pointer">
      <a href="https://www.linkedin.com/in/simona-limontaite-33781513/" target="blank">
        <BsLinkedin className="w-[15px] h-[15px] text-default-700 group-hover:text-white" />
      </a>
    </div>
    <div className="group w-10 h-10 rounded-full bg-white my-1 border border-1 border-default-100 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary cursor-pointer">
      <a href="https://github.com/simonachess" target="blank">
        <BsGithub className="w-[15px] h-[15px] text-default-700 group-hover:text-white" />
      </a>
    </div>
    <div className="group w-10 h-10 rounded-full bg-white my-1 border border-1 border-default-100 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary cursor-pointer">
      <a href="https://www.facebook.com/simonachess" target="blank">
        <FaFacebookF className="w-[15px] h-[15px] text-default-700 group-hover:text-white" />
      </a>
    </div>
    <div className="group w-10 h-10 rounded-full bg-white my-1 border border-1 border-default-100 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary cursor-pointer">
      <a href="https://www.frontendmentor.io/profile/simonachess" target="blank">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" className="w-[15px] h-[15px] text-default-700 group-hover:text-white">
          <path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z" />
        </svg>
      </a>
    </div>
  </div>
);

export default SocialMedia;
