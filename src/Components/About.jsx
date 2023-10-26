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

function About() {
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
    <div
      className="w-full h-full bg-white text-black dark:text-white dark:bg-gray-900"
      name="About "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
        <div className="sm:flex sm:justify-center p-0 md:p-0">
          <div className="mt-28 p-8 md:mt-52 md:p-14 ">
            <div className="shadow-2xl dark:shadow-slate-600 rounded-lg p-3 lg:px-10 lg:py-6 mb-20">
              <h1 className="text-orange-500 pb-6 font-medium text-2xl lg:text-3xl">
                Name: Gubbala Jaya Kumar
              </h1>
              <h1 className="text-blue-500 pb-6 text-2xl lg:text-2xl font-medium ">
                Education: Pragati Engineering College, Surampalem
              </h1>
              <h1 className="text-blue-500 pb-6 text-2xl lg:text-2xl font-medium">
                Field of Study: Information Technology
              </h1>
              <p className="text-gray-500 p-4 text-xl font-normal ">
                Hello, I'm Gubbala Jayakumar, a student pursuing Information
                Technology at Pragati Engineering College in Surampalem. I'm
                deeply passionate about web development and the world of digital
                design.
                <br />
                I'm also learning Back-End Development and looking forward to be
                a Full Stack Web Developer
              </p>
            </div>
            <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              My journey into the realm of web development started with a
              fascination for creating beautiful, functional, and user-friendly
              websites. I've been dedicated to honing my skills in frontend
              development, and I'm currently immersed in learning the essential
              tools of the trade, including HTML, CSS, JavaScript, React,
              Bootstrap, and Tailwind CSS.
            </p>
            <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              I firmly believe that the future of technology is heavily reliant
              on seamless and responsive web applications. To that end, I'm
              committed to mastering these frontend technologies to create
              engaging, interactive, and visually appealing websites.
            </p>
            <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              My educational experience at Pragati Engineering College has
              equipped me with a solid foundation in Information Technology,
              which I'm eager to apply to real-world projects. While I'm still a
              student, I've already completed several personal projects and
              contributed to team projects, showcasing my skills in web
              development.
            </p>
            <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              As a lifelong learner, I'm always exploring new trends and staying
              up-to-date with the latest advancements in frontend development.
              The ever-evolving nature of this field excites me, and I'm ready
              to embrace new challenges and opportunities.
            </p>
            <p className="text-gray-500 p-4 text-xl flex items-start font-normal">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              If you're looking for a dedicated, emerging web developer to
              collaborate on projects or discuss web development trends, I'd
              love to connect with you. Feel free to reach out, and let's embark
              on a journey of innovation together.
            </p>
          </div>
        </div>
        <div className=" mt-12 mb-10 p-8 md:mt-14  ">
          <h1 className="text-orange-500 p-4 font-medium">Education</h1>
          <div className="flex flex-col justify-center md:flex-row md:grid grid-cols-3">
            <div className="p-10 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  Pragati Engineering College
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-500 pb-2">
                    Degree: BTech
                  </h2>
                  <h3 className="text-base text-gray-500 pb-2">
                    Branch: Information Technology
                  </h3>
                  <h4 className="text-base text-gray-500 pb-2">
                    Current Cgpa: 8.0
                  </h4>
                  <h4 className="text-base text-gray-500 pb-2">
                    Year of Passing: 2022-2025
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-500 pb-2">
                    Surampalem,Kakinada,Andhra Pradesh
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-10 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  BVC College Of Engineering
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-500 pb-2">
                    Degree: Diploma
                  </h2>
                  <h3 className="text-base text-gray-500 pb-2">
                    Branch: Mechanical Engineering
                  </h3>
                  <h4 className="text-base text-gray-500 pb-2">
                    Percentage: 89.7%
                  </h4>
                  <h4 className="text-base text-gray-500 pb-2">
                    Year of Passing: 2021-2022
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-500 pb-2">
                    Palacharla,Rajahmundry,Andhra Pradesh
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-10 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  Bhasyham English Medium School
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-500 pb-2">Board : SCC</h2>
                  <h3 className="text-base text-gray-500 pb-2">
                    Study : 10th Class (Tenth Class)
                  </h3>
                  <h4 className="text-base text-gray-500 pb-2">Gpa: 9.7</h4>
                  <h4 className="text-base text-gray-500 pb-2">
                    Year of Passing: 2020-2021
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-500 pb-2">
                    Bommuru,Rajahmundry,Andhra Pradesh
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full bg-white dark:text-slate-400 dark:bg-gray-900 md:pb-32"
          name="About"
        >
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
              <p className="text-center underline font-medium">Contact Me</p>
              <div className="lg:flex lg:justify-between lg:p-20 p-10 md:flex md:justify-between md:p-14">
                <div className=" lg:flex-col lg:w-96 md:w-72 w-full ">
                  <p className="px-4 py-3 text-base flex items-center lg:px-6 lg:pl-0  lg:py-3 lg:flex lg:items-center font-light text-[#242424] bg-[#d7d7d7] my-7 mt-5 rounded-sm cursor-pointer">
                    <span className="pr-2 lg:px-3">
                      <CiMobile3 />
                    </span>
                    <span
                      ref={buttonRefs.mobile}
                      onClick={() =>
                        copyToClipboard("+91 8919753805", "mobile")
                      }
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
      </div>
    </div>
  );
}

export default About;
