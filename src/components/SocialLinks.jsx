import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pablo-iii-bb7b88a2/",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/NemoIII",
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp
          <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/message/OZNQX54WO67AO1",
    },
    {
      id: 4,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:code_wizard_@outlook.com",
    },
    {
      id: 5,
      child: (
        <>
          Fiverr <TbBrandFiverr size={30} />
        </>
      ),
      href: "https://www.fiverr.com/pablo_iii",
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-2px] hover:rounded-md duration-300 bg-gray-500"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
