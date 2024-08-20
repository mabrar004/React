import React from "react";
import profile from "../assets/img.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col mx-7 mt-7">
      <h2 className="font-bold text-3xl text-left md:text-center md:text-5xl ">
        About me
      </h2>
      <div className="flex flex-col md:flex-row md:mt-20 ">
        <div className="hidden md:block md:w-1/3 lg:w-1/4">
          <img src={profile} className="w-full h-auto rounded-xl" />
        </div>
        <div className="md:w-2/3 lg:w-3/4 md:mx-5">
          <p className="text-justify mt-5 md:mt-0">
            I am a front-end developer with osver a year of experience in
            building responsive and user-friendly web applications. Skilled in
            HTML, CSS, JavaScript, and React, I have a passion for creating
            clean and efficient code. My experience includes collaborating with
            cross-functional teams to deliver high-quality projects. I am
            dedicated to continuous learning and staying updated with the latest
            industry trends to ensure the best user experience.
          </p>
          <p className="text-justify mt-5">
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>
          <div className="mt-10 md:mx-10  md:w-1/2">
            <div className="flex justify-between items-center mb-4 hover:cursor-pointer hover:scale-105 transition-transform duration-300  ">
              <h3 className="text-lg font-medium">HTML & CSS</h3>

              <div className="w-1/2 mx-10 bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-medium">TailwindCSS</h3>
              <div className="w-1/2 mx-10  bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between   items-center mb-4 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-medium">JavaScript</h3>
              <div className="w-1/2  mx-10  bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-medium">React JS</h3>
              <div className="w-1/2 mx-10  bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-row gap-10 justify-between text-center items-center">
              <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent md:text-4xl">
                1+
              </p>
              <div className="w-px h-10 bg-gray-300"></div>
              <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent md:text-4xl">
                10+
              </p>
              <div className="w-px h-10 bg-gray-300"></div>
              <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent md:text-4xl">
                20+
              </p>
            </div>
            <div className="flex flex-row justify-between items-center gap-2">
              <p>Experience</p>
              <p>Projects</p>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
