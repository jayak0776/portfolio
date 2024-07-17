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
          <div className="mt-20 p-3 md:mt-30 md:p-6 ">
            <h1 className="text-3xl">Professional Summary</h1>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Final year student pursuing B.Tech in Information Technology at
              Pragati Engineering College, specializing in software development
              and cloud computing. My coursework has equipped me with a solid
              foundation in data structures, algorithms, and software
              engineering principles, preparing me for a career in the tech
              industry.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Certified in AWS cloud services, demonstrating expertise in cloud
              infrastructure deployment, management, and optimization. I have
              deployed applications using AWS EC2, S3, and RDS.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              ServiceNow certified, proficient in implementing IT service
              management processes and workflows. My certification includes
              expertise in incident management, change management, and service
              catalog development, ensuring efficient IT service delivery.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Experienced in front-end development with HTML5, CSS3, and
              JavaScript, adept at creating responsive and visually appealing
              web interfaces. I have implemented modern UI/UX designs and
              integrated frontend components .
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Participated in hackathons and coding competitions, fostering
              problem-solving skills and teamwork in high-pressure environments.
              I have won awards for developing innovative solutions and enjoy
              the challenge of creating prototypes within limited time frames.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Proficient in object-oriented programming languages such as Java
              and Python, with hands-on experience in developing scalable
              applications. I have implemented solutions ranging from backend
              services to data processing scripts, focusing on efficiency,
              reliability, and maintainability.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Goal-oriented professional with a passion for innovation, seeking
              opportunities to apply technical expertise to real-world
              challenges and drive organizational growth. I am eager to
              contribute to dynamic teams where I can leverage my skills to
              create impactful solutions and achieve shared goals.
            </p>
            <p className="text-gray-800 p-4 text-lg flex items-start font-normal dark:text-gray-400">
              <span>
                <HiArrowNarrowRight
                  style={{ fontSize: "30px", paddingRight: "6px" }}
                />
              </span>
              Check Out My Resume
            </p>
            <button className="text-xl px-6 py-3 ml-10 bg-[#242424] text-white rounded ">
              <a
                href="https://drive.google.com/file/d/14IOl5yo5wp5vBX8iUHq49X8Dhz0a_iBg/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className=" mt-3 mb-0 p-4 md:mt-14  ">
          <h1 className="black p-2 font-medium text-3xl">Education Details</h1>
          <div className="flex flex-col justify-center md:flex-row md:grid grid-cols-3">
            <div className="p-2 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  Pragati Engineering College
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Degree: BTech
                  </h2>
                  <h3 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Branch: Information Technology
                  </h3>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400 ">
                    Current Cgpa: 8.0
                  </h4>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Year of Passing: 2022-2025
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-800 pb-2 dark:text-gray-400">
                    Surampalem,Kakinada,Andhra Pradesh
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  BVC College Of Engineering
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Degree: Diploma
                  </h2>
                  <h3 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Branch: Mechanical Engineering
                  </h3>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Percentage: 89.7%
                  </h4>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Year of Passing: 2021-2022
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-800 pb-2 dark:text-gray-400">
                    Palacharla,Rajahmundry,Andhra Pradesh
                  </h5>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-4 w-full">
              <div className="shadow-2xl shadow-gray-300 dark:shadow-slate-700 rounded-md p-8 lg:p-4">
                <h1 className="text-lg pb-3 font-medium">
                  Bhasyham English Medium School
                </h1>
                <div className="p-3 font-normal">
                  <h2 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Board : SCC
                  </h2>
                  <h3 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Study : 10th Class (Tenth Class)
                  </h3>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Gpa: 9.7
                  </h4>
                  <h4 className="text-base text-gray-800 pb-2 dark:text-gray-400">
                    Year of Passing: 2020-2021
                  </h4>
                  <h5 className="text-base md:text-xs text-gray-800 pb-2 dark:text-gray-400">
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
            <div className="pb-0 mt-0 sm:mt-28 sm:p-0 ">
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
