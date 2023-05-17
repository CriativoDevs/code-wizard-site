import React from "react";
import GitHub from "../assets/github.png";
import Css from "../assets/css.png";
import Django from "../assets/django.png";
import Drf from "../assets/drf.jpg";
import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Python from "../assets/python.png";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: GitHub,
      title: "Github",
      style: "shadow-gray-400"
    },
    {
      id: 2,
      src: Css,
      title: "Css",
      style: "shadow-blue-400"
    },
    {
      id: 3,
      src: Django,
      title: "Django",
      style: "shadow-green-800"
    },
    {
      id: 4,
      src: Drf,
      title: "Django Rest Framework",
      style: "shadow-red-500"
    },
    {
      id: 5,
      src: Html,
      title: "Html",
      style: "shadow-orange-500"
    },
    {
      id: 6,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-blue-600"
    },
    {
      id: 8,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-blue-300"
    },
    {
      id: 9,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-green-100"
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 max-sm:mt-80">
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className=" py-6">These are the technologies I've worked with.</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
