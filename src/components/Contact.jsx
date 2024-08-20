import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="mx-7 mt-10">
      <h1 className="font-bold text-3xl text-left md:text-center md:text-5xl md:mt-20">
        Get in touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 md:mx-36 md:mt-14 ">
        {/* Left Side: Contact Information */}
        <div className="flex flex-col space-y-5 ">
          <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-2xl font-semibold md:text-3xl">
            Let's talk
          </h1>
          <p className="text-md ">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="flex flex-row gap-5 items-center">
            <MdOutlineMailOutline />
            <h3>mabrarahmed004@gmail.com</h3>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <BsFillTelephoneFill />
            <h3>+923057145698</h3>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <CiLocationOn />
            <h3>Sargodha, Punjab</h3>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col space-y-5">
          <form className="flex flex-col gap-3">
            <label htmlFor="name" className="block">
              Your Name
              <input
                type="text"
                name="name"
                className="w-full rounded bg-gray-600 mt-2 py-3 px-4"
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email" className="block">
              Your Email
              <input
                type="email"
                name="email"
                className="w-full rounded bg-gray-600 mt-2 py-3 px-4"
                placeholder="Enter your email"
              />
            </label>
            <label htmlFor="message" className="block">
              Write your message here
              <textarea
                name="message"
                className="w-full rounded bg-gray-600 mt-2 py-3 px-4"
                placeholder="Enter your message"
              ></textarea>
            </label>
            <button className="mt-5 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-7 py-4 rounded-full text-xl w-full md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
