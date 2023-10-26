import p7 from "../assests/projects/p7.png";
import p2 from "../assests/projects/p2.png";
import p3 from "../assests/projects/p3.png";
import p4 from "../assests/projects/p4.png";
import p5 from "../assests/projects/p5.png";
import p1 from "../assests/projects/p1.png";
import p6 from "../assests/projects/p6.png";
import { NavLink } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
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

function Projects() {
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
    {
      id: 5,
      title: "QUOTE GENERATER",
      src: p5,
      demo: "https://jkumar-quote-generated.netlify.app/quote.html",
      code: "https://github.com/jayak0776/QuoteGenerator",
      tools: [
        {
          t1: "Html",
          t2: "Css",
          t3: "Javascript",
        },
      ],
    },
    {
      id: 6,
      title: "CALCULATOR",
      src: p1,
      demo: "https://jayak0776.github.io/Calculator_React/",
      code: "https://github.com/jayak0776/Calculator_React",
      tools: [
        {
          t1: "React",
          t2: "Css",
        },
      ],
    },
    {
      id: 7,
      title: "CALCULATOR",
      src: p6,
      demo: "https://jkumar-calculator.netlify.app/",
      code: "https://github.com/jayak0776/calculator",
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
      <div
        className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32"
        name="About"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
          <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
            <div className="p-6 sm-p-0">
              <p className="text-[#242424] dark:text-gray-300 text-4xl ml-2 font-medium inline ">
                Projects
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-normal sm:p-6 sm:mb-0">
                "Hello! I'm a web developer with a passion for creating
                interactive and visually appealing web applications. I've had
                the opportunity to work on several exciting projects that
                showcase my skills in HTML, CSS, JavaScript, React, and Tailwind
                CSS. Below, I'll introduce you to a selection of my projects,
                each highlighting different aspects of my development journey.
                From simple applications like a Quote Generator and Stopwatch to
                more complex projects like a Netflix Clone, my work reflects my
                commitment to crafting engaging and functional web experiences.
                Take a moment to explore these projects and witness the
                versatility and creativity that I bring to web development."
              </p>

              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                1. Quote Generator:
                <li className="font-normal pt-3">
                  The Quote Generator is a web application designed to provide
                  users with random inspirational or thought-provoking quotes.
                  It's a simple yet engaging project that leverages HTML, CSS,
                  and JavaScript to create a user-friendly interface. Users can
                  click a button to generate new quotes and potentially share
                  their favorites.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                2. Stopwatch:
                <li className="font-normal pt-3">
                  The Stopwatch project is an online timer application. It
                  allows users to track time by starting, stopping, and
                  resetting the timer. This project demonstrates your ability to
                  create interactive features using HTML, CSS, and JavaScript,
                  making it a practical tool for various tasks.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                3. FAQ Page:
                <li className="font-normal pt-3">
                  An FAQ (Frequently Asked Questions) page is a common component
                  of many websites. Your FAQ project is a web page that provides
                  concise answers to commonly asked questions about a specific
                  topic or service. It employs HTML and CSS to structure and
                  style the page, making it easy for users to navigate and find
                  information.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                4. Todo List:
                <li className="font-normal pt-3">
                  The Todo List project is a task management application that
                  enables users to create, edit, mark as completed, and delete
                  tasks. It's a practical tool for personal organization and
                  showcases your proficiency in building interactive web
                  applications with HTML, CSS, and JavaScript.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                5. Calculator:
                <li className="font-normal pt-3">
                  The Calculator is a fundamental web-based tool for performing
                  arithmetic operations. It's designed using HTML for the
                  structure, CSS for styling, and JavaScript for the logic. This
                  project demonstrates your ability to create a functional and
                  user-friendly calculator interface.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                6. React Calculator:
                <li className="font-normal pt-3">
                  Building on the basic calculator, the React Calculator project
                  takes your skills to the next level by using the React
                  framework. React allows for more dynamic and responsive user
                  interfaces, making it an excellent showcase of your
                  proficiency in building web applications with React, HTML, and
                  CSS.
                </li>
              </p>
              <p className="text-2xl p-12 pl-6 md:pl-12 dark:text-slate-400  text-[#011425] font-semibold sm:p-6 sm:mb-0">
                7. Netflix Clone:
                <li className="font-normal pt-3">
                  The Netflix Clone is a sophisticated project that emulates the
                  look and feel of the popular Netflix streaming service. It's
                  built using React, HTML, CSS, and potentially integrates with
                  APIs to display movie information and trailers. This project
                  demonstrates your ability to create complex, responsive, and
                  visually appealing web applications.
                </li>
              </p>
            </div>
          </div>
          <hr className="pb-14" />
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-20 px-12 pl-8 md:pl-12 mb-32 sm:px-12 sm:pb-5 sm:mb-0 ">
            {projects.map(({ id, src, demo, code, title, tools }) => (
              <div
                key={id}
                className=" shadow-md shadow-gray-600 rounded-lg bg-[#242424] dark:bg-gray-900"
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
      </div>
      <div
        className="w-full h-[90vh] bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32"
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

export default Projects;
