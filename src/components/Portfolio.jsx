import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navBar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const images = [
    {
      id: 1,
      image: arrayDestruct,
      href: "#",
    },
    {
      id: 2,
      image: installNode,
      href: "mailto:code_wizard_@outlook.com",
    },
    {
      id: 3,
      image: navBar,
      href: "https://github.com/NemoIII",
    },
    {
      id: 4,
      image: reactParallax,
      href: "#",
    },
    {
      id: 5,
      image: reactSmooth,
      href: "#",
    },
    {
      id: 6,
      image: reactWeather,
      href: "#",
    },
    {
      id: 7,
      image: usestate,
      href: "#",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl mt-4 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Check some of my work here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {images.map(({ id, image, href }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
              <>
                <img
                  src={image}
                  alt=""
                  className=" rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={href} target="_blank" rel="noreferrer">Demo</a>
                  </button>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
