import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function SocialMediaLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com/in/jayakumargubbala",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jayak0776",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jayak0776@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "https://drive.google.com/file/d/14IOl5yo5wp5vBX8iUHq49X8Dhz0a_iBg/view?usp=drive_link",
      download: "./JAYAKUMAR_RESUME.pdf",
    },
  ];

  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map(({ id, child, style, href, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center text-lg w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#242424]" +
              " " +
              style
            }
          >
            <a
              href={href ? href : "/"}
              className="flex justify-between items-center w-full text-white dark:text-slate-400"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaLinks;
