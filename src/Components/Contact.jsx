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

function Contact() {
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
      className="w-full h-full bg-white text-[#242424] dark:text-slate-400 dark:bg-gray-900 md:pb-32"
      name="About"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-0 mt-28 sm:mt-28 sm:p-0 ">
          <p className="text-center font-medium dark:text-[#d3d3d3] underline">
            Contact Me
          </p>
          <div className="p-8 pb-0">
            <h2 className="text-3xl font-medium">
              Welcome to My Contact Page:
            </h2>
            <p className="text-xl p-6 font-normal">
              I appreciate your interest in getting in touch with me. This is
              the place where we can connect, whether it's for professional
              inquiries, collaborations, or just to say hello. At this corner of
              my portfolio, I want to make it as easy as possible for you to
              reach out and connect with me.
            </p>
            <h2 className="text-3xl font-medium">Collaborations:</h2>
            <p className="text-xl p-6 font-normal">
              I'm always open to exciting collaboration opportunities. Whether
              it's a joint project, partnership, or a creative endeavor, let's
              explore how we can work together to achieve something great.
              Collaboration often leads to innovative solutions and amazing
              outcomes.
            </p>
            <h2 className="text-3xl font-medium">Just to Say Hello:</h2>
            <p className="text-xl p-6 font-normal">
              Sometimes, it's nice to connect for the sake of connecting. If
              you'd like to strike up a conversation, share ideas, or simply
              introduce yourself, I'm all ears. Building professional
              relationships often starts with a friendly "hello."
            </p>
            <p className="text-xl p-6 font-normal">
              <span className="flex items-center">
                <HiArrowNarrowRight style={{ paddingRight: "5px" }} />
                Feel free to reach out using any of the methods listed below:
              </span>
            </p>
          </div>
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
  );
}

export default Contact;
