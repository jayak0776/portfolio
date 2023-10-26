import css from "../assests/css.png";
import html from "../assests/html.png";
import javascript from "../assests/javascript.png";
import react from "../assests/react.png";
import tailwind from "../assests/tailwind.png";
import bootstrap from "../assests/bootstrap.png";
import github from "../assests/github.png";
import React, { useRef, useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillHome,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

function Experience() {
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
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: react,
      title: "REACTJS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
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
      <div
        className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <div className="p-6 sm-p-0">
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline ">
                Educational Background :
                <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
                  <span>
                    <HiArrowNarrowRight
                      style={{ fontSize: "30px", paddingRight: "6px" }}
                    />
                  </span>
                  "My educational journey at Pragati Engineering College has
                  provided me with a solid foundation in Information Technology,
                  complementing my passion for Web Development."
                </p>
                <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
                  <span>
                    <HiArrowNarrowRight
                      style={{ fontSize: "30px", paddingRight: "6px" }}
                    />
                  </span>
                  "My academic background in Information Technology has been
                  instrumental in shaping my understanding of key concepts,
                  which I've further applied in practical projects."
                </p>
              </p>
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline  ">
                Project Experience :
                <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
                  <span>
                    <HiArrowNarrowRight
                      style={{ fontSize: "30px", paddingRight: "6px" }}
                    />
                  </span>
                  "Throughout my journey, I've had the privilege of working on
                  several exciting projects that have honed my skills and
                  allowed me to apply classroom knowledge to real-world
                  scenarios."
                </p>
                <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
                  <span>
                    <HiArrowNarrowRight
                      style={{ fontSize: "30px", paddingRight: "6px" }}
                    />
                  </span>
                  "As a student, I've been passionate about taking on hands-on
                  projects to gain practical experience and deepen my
                  understanding of web development."
                </p>
              </p>
              <p className="text-2xl p-12  text-[#011425] dark:text-slate-400  sm:p-6 sm:mb-0  font-normal">
                These are the technologies I've worked with
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 p-12 px-6 sm:grid-cols-3 gap-10 text-center py-0 mb-0 px-30 sm:mb-14 ">
            {experience.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`bg-[#7395AE] dark:bg-slate-800 shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-xl font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <p className="text-center underline font-medium dark:text-gray-300">
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

export default Experience;
