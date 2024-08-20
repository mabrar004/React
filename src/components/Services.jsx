import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  const cards_data = [
    {
      id: "01",
      name: "Web Development",
      detail: "I specialize in creating responsive, user-friendly websites",
      link: "Read more",
    },
    {
      id: "02",
      name: "Web Development",
      detail: "I specialize in creating responsive, user-friendly websites",
      link: "Read more",
    },
    {
      id: "03",
      name: "Web Development",
      detail: "I specialize in creating responsive, user-friendly websites",
      link: "Read more",
    },
    {
      id: "04",
      name: "Web Development",
      detail: "I specialize in creating responsive, user-friendly websites",
      link: "Read more",
    },
  ];
  return (
    <div className="mx-7 mt-7 ">
      <h1 className="  md:flex md:justify-center font-bold text-3xl text-left md:text-center md:text-5xl md:mt-20">
        My Services
      </h1>
      <div className="flex flex-row mt-5 flex-wrap md:justify-center md:mt-10 ">
        {cards_data.map((data) => {
          return (
            <div className="border border-white rounded w-48 h-64 mx-7 mb-7  hover:cursor-pointer hover:scale-125 transition-transform duration-300  hover:border-pink-400 hover:rounded-xl hover:border-4  ">
              <div className="flex flex-col flex-wrap gap-2 mt-6 mx-5 ">
                <h1 className="text-3xl font-bold">{data.id}</h1>
                <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-md font-semibold">
                  {data.name}
                </h1>
                <h1 className="text-justify ">{data.detail}</h1>
                <a className="text-sm flex flex-row items-center gap-1 ">
                  {data.link}
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
