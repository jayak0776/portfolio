import React, { useRef, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Mypic from "../assests/Online resume-pana (3).png";
import css from "../assests/css.png";
import html from "../assests/html.png";
import javascript from "../assests/javascript.png";

import p7 from "../assests/projects/p7.png";
import p2 from "../assests/projects/p2.png";
import p3 from "../assests/projects/p3.png";
import p4 from "../assests/projects/p4.png";
import { NavLink } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Home() {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "NETFLIX",
      src: p7,
      demo: "https://jayak0776.github.io/Netflix/home.html",
      code: "https://github.com/jayak0776/Netflix",
      tools: [
        {
          t1: "Html",
          t2: "Css",
          t3: "Javascript",
        },
      ],
    },
    {
      id: 2,
      title: "TODO LIST",
      src: p2,
      demo: "https://jkumar-todo-list.netlify.app/task",
      code: "https://github.com/jayak0776/Task",
      tools: [
        {
          t1: "Html",
          t2: "Css",
          t3: "Javascript",
        },
      ],
    },
    {
      id: 3,
      title: "FAQ",
      src: p3,
      demo: "https://jkumar-faq.netlify.app/faq/faq",
      code: "https://github.com/jayak0776/FAQ",
      tools: [
        {
          t1: "Html",
          t2: "Css",
          t3: "Javascript",
        },
      ],
    },
    {
      id: 4,
      title: "STOPWATCH",
      src: p4,
      demo: "https://jkumar-stopwatch.netlify.app/stopwatch.html",
      code: "https://github.com/jayak0776/stopwatch",
      tools: [
        {
          t1: "Html",
          t2: "Css",
          t3: "Javascript",
        },
      ],
    },
  ];

  const buttonRefs = {
    mobile: useRef(null),
    email: useRef(null),
    linkdin: useRef(null),
    address: useRef(null),
  };

  const [copiedText, setCopiedText] = useState({
    mobile: "",
    email: "",
  });

  function copyToClipboard(text, type) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText((prevState) => ({
          ...prevState,
          [type]: "Copied!",
        }));
        setTimeout(() => {
          setCopiedText((prevState) => ({
            ...prevState,
            [type]: "",
          }));
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setCopiedText((prevState) => ({
          ...prevState,
          [type]: "Copy to clipboard failed",
        }));
      });
  }
  return (
    <>
      <div className="w-full h-full lg:h-screen md:h-screen bg-[#7395AE] dark:text-slate-400 dark:bg-gray-900">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
          <div className="flex flex-col  justify-center sm:w-[50%] mt-32 md:mt-20 mb-4 sm:mt-28 sm:mb-0 shadow-2xl rounded-xl shadow-slate-800 p-10 h-[400px] md:h-[450px] lg:h-[450px] ">
            <h1 className="text-xl sm:text-6xl font-bold text-[#242424]">
              <span className="p-2">HELLO</span>
              <br />
              <span className="p-2">EVERYONE!</span>
            </h1>
            <br />
            <p className="text-[#011425] dark:text-slate-400  text-xl max-w-md pt-0 py-6 font-medium">
              I'm Gubbala Jaya Kumar,I am Front-End Web Developer. It's been 2
              years, I'm working as a web developer. I have developed some
              website and also i'm very passionate to learn new tools.
            </p>
            <div>
              <button className="group text-center text-lg lg:text-2xl text-white dark:text-slate-400 w-fit px-4 py-2 lg:px-6 lg:py-3 lg:my-2 flex items-center rounded-md bg-[#242424] cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="sm:ml-20 sm:mt-16">
            <img
              className="object-cover mt-20 sm:mt-0 h-[300px] w-[300px] sm:h-[400px] sm:w-full"
              src={Mypic}
              alt="my pic"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32 pb-10"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <div className="p-6 sm-p-0">
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline ">
                About Me
              </p>
            </div>
          </div>
          <p className="text-2xl p-12 dark:text-slate-400 text-[#011425] font-normal sm:p-12 sm:mb-0">
            Greetings! I'm Gubbala Jaya Kumar, a dedicated Front End Developer
            with a passion for creating seamless, visually appealing user
            interfaces. My journey in the world of web development began with an
            insatiable curiosity for crafting engaging digital experiences. Over
            the years, I've honed my skills in HTML5, CSS3, and JavaScript,
            channeling my creativity into designs that captivate and inspire. My
            dedication to the art of Front End development drives me to
            constantly seek growth and improvement. While I excel in creating
            beautiful and functional interfaces, I understand that true mastery
            lies in a comprehensive understanding of the entire web development
            ecosystem.
          </p>
        </div>
        <button className="text-white dark:text-slate-400 bg-[#242424] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-light text-lg">
          <NavLink to={"/About"}>Know More</NavLink>
        </button>
      </div>
      <div
        className=" w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32 pb-10"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-10 sm:mt-28 sm:p-0 ">
            <div className="p-6 sm-p-0">
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline ">
                Experience
              </p>
              <p className="text-2xl p-12 dark:text-slate-400 text-[#011425] font-normal sm:p-12 sm:mb-0">
                These are the technologies I've worked with
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 p-12  sm:grid-cols-3 gap-10 text-center py-0 mb-0 px-30 sm:mb-14">
            {experience.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`bg-[#7395AE] dark:bg-slate-800 shadow-md hover:scale-105 duration-500 py-5  rounded-md ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="text-white dark:text-slate-400 bg-[#242424] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-light text-lg">
          <NavLink to={"/Experience"}>Know More</NavLink>
        </button>
      </div>
      <div
        className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32 pb-10"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <div className="p-6 sm-p-0">
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline ">
                Projects
              </p>
              <p className="text-2xl p-12 dark:text-slate-400 text-[#011425] font-normal sm:p-12 sm:mb-0">
                Check out some of my work right here
              </p>
            </div>
          </div>
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-20 px-12 pl-8 md:pl-12 mb-32 sm:px-12 sm:pb-5 sm:mb-0 ">
            {projects.map(({ id, src, demo, code, title, tools }) => (
              <div
                key={id}
                className=" shadow-md shadow-gray-600 rounded-lg bg-[#242424] dark:bg-gray-900 dark:text-slate-400"
              >
                <NavLink to={demo}>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </NavLink>
                <h1 className="text-center text-[#7395AE] p-5 text-2xl capitalize">
                  {title}
                </h1>
                <div className="text-white text-lg mb-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex justify-center px-10">
                      {Object.keys(tool).map((key) => (
                        <p
                          key={key}
                          className="px-3 py-1 mx-2 sm:px-6 md:px-3 md:py-2 md:mx-5 rounded-sm bg-[white] text-[#242424] dark:text-slate-400 dark:bg-[#242424]"
                        >
                          {tool[key]}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-3">
                    <button className="px-10 py-2 text-lg text-white dark:text-slate-400">
                      <NavLink
                        to={demo}
                        target="_blank"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Live
                        <span>
                          <HiOutlineExternalLink />
                        </span>
                      </NavLink>
                    </button>
                    <button className="px-10 py-2 text-lg text-white dark:text-slate-400">
                      <NavLink
                        to={`/Projects/${id}`}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        View
                        {console.log(id)}
                        <span>
                          <HiOutlineExternalLink />
                        </span>
                      </NavLink>
                    </button>
                    <button className="px-10 py-2 text-lg text-white dark:text-slate-400">
                      <NavLink
                        to={code}
                        target="_blank"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Code
                        <span>
                          <HiOutlineExternalLink />
                        </span>
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="text-white dark:text-slate-400 bg-[#242424] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-light text-lg">
          <NavLink to={"/Projects"}>Know More</NavLink>
        </button>
      </div>
      <div
        className="w-full h-full bg-white text-[#242424] dark:text-slate-400 dark:bg-gray-900 md:pb-32"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <p className="text-center dark:text-[#d3d3d3] underline font-medium">
              Contact Me
            </p>
            <div className="lg:flex lg:justify-between lg:p-20 p-10 md:flex md:justify-between md:p-14">
              <div className=" lg:flex-col lg:w-96 md:w-72 w-full ">
                <p className="px-4 py-3 text-base flex items-center lg:px-6 lg:pl-0  lg:py-3 lg:flex lg:items-center font-light text-[#242424] bg-[#d7d7d7] my-7 mt-5 rounded-sm cursor-pointer">
                  <span className="pr-2 lg:px-3">
                    <CiMobile3 />
                  </span>
                  <span
                    ref={buttonRefs.mobile}
                    onClick={() => copyToClipboard("+91 8919753805", "mobile")}
                  >
                    +91 8919753805
                    <span className="pl-14 lg:pl-44 font-medium text-black">
                      {copiedText.mobile}
                    </span>
                  </span>
                </p>
                <p className="px-4 py-3 text-base flex items-center lg:px-6 lg:pl-0 lg:py-3 lg:flex lg:items-center md:px-3  font-light text-[#242424] bg-[#d7d7d7] my-7 rounded-sm cursor-pointer">
                  <span className="pr-2 lg:px-3 ">
                    <AiOutlineMail />
                  </span>
                  <span
                    ref={buttonRefs.email}
                    onClick={() =>
                      copyToClipboard("jayakumar.gubbala@gmail.com", "email")
                    }
                  >
                    jayakumar.gubbala@gmail.com
                    <span className="pl-10 lg:pl-24 md:pl-20 font-medium text-black">
                      {copiedText.email}
                    </span>
                  </span>
                </p>
                <p className="px-4 py-3 text-base flex items-center lg:px-6 lg:pl-0 lg:py-3 lg:flex lg:items-center  font-light  text-[#242424] bg-[#d7d7d7] my-7 rounded-sm cursor-pointer">
                  <span className="pr-2 lg:px-3">
                    <AiFillLinkedin />
                  </span>
                  <span
                    ref={buttonRefs.linkdin}
                    onClick={() =>
                      copyToClipboard(
                        "www.linkedin.com/in/jayakumargubbala",
                        "linkdin"
                      )
                    }
                  >
                    www.linkedin.com/in/jayakumargubbala
                    <span className="pl-1 lg:pl-14 md:pl-4 font-medium text-black">
                      {copiedText.linkdin}
                    </span>
                  </span>
                </p>
                <p className="px-4 py-3 text-base flex items-center lg:px-6 lg:pl-0 lg:py-3 lg:flex lg:items-center font-light text-[#242424] bg-[#d7d7d7] my-7 mb-5 rounded-sm cursor-pointer">
                  <span className="pr-2 lg:px-3">
                    <AiFillHome />
                  </span>
                  <span
                    ref={buttonRefs.address}
                    onClick={() =>
                      copyToClipboard(
                        "Rajahmundry,East Godavari,Andhra Pradesh",
                        "address"
                      )
                    }
                  >
                    Rajahmundry,East Godavari,Andhra Pradesh
                    <span className="pl-2 lg:pl-10 font-medium text-black">
                      {copiedText.address}
                    </span>
                  </span>
                </p>
                <div className="flex justify-center ">
                  <a
                    href="https://github.com/jayak0776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 hover:scale-125 duration-200"
                  >
                    <AiFillGithub style={{ color: "#242424" }} />
                  </a>
                  <a
                    href="https://instagram.com/jayakumar.gubbala?igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 hover:scale-110 duration-300"
                  >
                    <AiFillInstagram style={{ color: "#242424" }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayakumargubbala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 hover:scale-110 duration-300"
                  >
                    <AiFillFacebook style={{ color: "#242424" }} />
                  </a>
                </div>
              </div>
              <form
                className="flex-col  lg:flex lg:flex-col text-sm font-normal md:pl-20"
                action="https://getform.io/f/6c3aeabe-f38f-4263-859a-384784daa691"
                method="POST"
              >
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="pr-4 pl-2 py-3 w-full lg:pr-6 lg:pl-2 lg:py-3 md:w-full text-[#242424] bg-[#d7d7d7] my-5 rounded-sm"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Enter Your Mail Address"
                  className="pr-4 pl-2 py-3 w-full lg:pr-6 lg:pl-2 lg:py-3 text-[#242424] bg-[#d7d7d7] my-5 mt-0 rounded-sm"
                  name="email"
                />
                <textarea
                  rows={10}
                  placeholder="Enter Your Message"
                  className="pr-4 pl-2 py-3 w-full lg:pr-6 lg:pl-2 lg:py-3 text-[#242424] bg-[#d7d7d7] my-5 mt-0 lg:w-96 h-36 rounded-sm"
                />
                <button className="text-[#242424] bg-[#d7d7d7] pr-4 pl-2 py-3 w-full lg:px-6 lg:py-3 rounded-sm hover:text-white hover:bg-[#242424] hover:scale-95 duration-300">
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
