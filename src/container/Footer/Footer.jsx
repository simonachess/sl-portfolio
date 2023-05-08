import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center uppercase">Take a coffee & chat with me</h2>
      <div className="w-[60%] flex justify-evenly items-center flex-wrap mt-16 mx-8 mb-8">
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
      {!isFormSubmitted ? (
        <div className="w-[60%] flex flex-col justify-center items-center my-4 mx-8">
          <div className="flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-white transition-all duration-300 ease-in-out">
            <input
              className="w-full p-4 border-none rounded-lg bg-white font-sans text-secondary outline-none hover:shadow-xl"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-white transition-all duration-300 ease-in-out">
            <input
              className="w-full p-4 border-none rounded-lg bg-white font-sans text-secondary outline-none hover:shadow-xl"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex justify-center items-center w-full my-3 rounded-xl cursor-pointer bg-white transition-all duration-300 ease-in-out">
            <textarea
              className="resize-none text-base text-left w-full p-4 border-none rounded-lg bg-white !font-sans text-secondary outline-none h-[170px] hover:shadow-xl"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="text-sm text-left text-white py-4 px-8 rounded-xl border-none bg-secondary font-medium outline-none mt-8 cursor-pointer transition-transform hover:bg-[#2430af]"
            onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
          {error && <p>Upss... Something went wrong...</p>}
        </div>
      ) : (
        <div>
          <h3 className="text-5xl font-extrabold text-center uppercase">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full flex-col'),
  'contact',
  'bg-primary',
);
