import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import main from "./img/Netf/main.png";
import m2 from "./img/Netf/m2.png";
import m3 from "./img/Netf/m3.png";
import m4 from "./img/Netf/m4.png";
import p2 from "./img/Todo/p2.png";
import p3 from "./img/Todo/p3.png";
import p4 from "./img/Todo/p4.png";
import p5 from "./img/Todo/p5.png";
import q1 from "./img/Faq/p3.png";
import q2 from "./img/Faq/q1.png";
import q3 from "./img/Faq/q2.png";
import q4 from "./img/Faq/q3.png";
import r1 from "./img/Stopw/r1.png";
import r2 from "./img/Stopw/r2.png";
import r3 from "./img/Stopw/r3.png";
import r4 from "./img/Stopw/r4.png";
import s1 from "./img/Quote/s1.png";
import s2 from "./img/Quote/s2.png";
import s3 from "./img/Quote/s3.png";
import s4 from "./img/Quote/s4.png";
import c1 from "./img/Cal/c1.png";
import c2 from "./img/Cal/c2.png";
import c3 from "./img/Cal/c3.png";
import c4 from "./img/Cal/c4.png";
import a1 from "./img/a1 (2).png";

import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useParams } from "react-router-dom";

const ProjectData = [
  {
    id: 1,
    title: "NETFLIX CLONE",
    description:
      "Welcome to my Netflix Clone project, a testament to my web development skills using HTML, CSS, and JavaScript. As a web developer, I enjoy creating immersive and user-friendly web applications, and the Netflix Clone is a shining example of that passion. This project is a tribute to the popular streaming service, Netflix, where I've recreated its visual and interactive elements, giving users a taste of what it's like to navigate and explore their favorite movies and TV shows. With careful attention to detail and a responsive design, I've aimed to provide an authentic user experience that adapts seamlessly to various screen sizes. Explore the Netflix Clone and discover my commitment to crafting captivating and responsive web applications.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: main,
        m2: m2,
        m3: m3,
        m4: m4,
      },
    ],
    demo: "https://jkumar-netfilx.netlify.app/",
    code: "https://github.com/jayak0776/Netflix",
  },
  {
    id: 2,
    title: "TODO LIST",
    description:
      "Welcome to my Todo List project, a testament to my web development skills using HTML, CSS, and JavaScript, with a strong emphasis on responsiveness. As a web developer, I'm dedicated to crafting user-friendly and adaptable web applications. This project is all about task management, allowing users to create, edit, complete, and delete tasks with ease. What sets this project apart is its responsiveness. No matter what device you're using, whether it's a desktop, tablet, or smartphone, the Todo List application provides a seamless and intuitive user experience. Explore the project to witness how I combine practical functionality with responsive design, making it a valuable tool for organizing tasks on the go.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: p2,
        m2: p3,
        m3: p4,
        m4: p5,
      },
    ],
    demo: "https://jkumar-todo-list.netlify.app/task",
    code: "https://github.com/jayak0776/Task",
  },
  {
    id: 3,
    title: "FAQ",
    description:
      "Welcome to my FAQ Page project, an example of my web development skills using HTML, CSS, and JavaScript, with a strong emphasis on responsiveness. As a web developer, I take pride in creating informative and accessible web content. This project is designed to provide clear and concise answers to commonly asked questions on a specific topic or service. What sets this project apart is its responsiveness, ensuring that users can easily find the information they need on various devices, from desktops to tablets and smartphones. Whether you're seeking answers on a larger screen or on the go, the FAQ Page adapts to provide an optimal user experience. Explore the project to see how I combine information and responsive design, making it a valuable resource for users on all devices.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: q1,
        m2: q2,
        m3: q3,
        m4: q4,
      },
    ],
    demo: "https://jkumar-faq.netlify.app/faq/faq",
    code: "https://github.com/jayak0776/FAQ",
  },
  {
    id: 4,
    title: "STOPWATCH",
    description:
      "Welcome to my Stopwatch project, a testament to my web development skills using HTML, CSS, and JavaScript, with a strong focus on responsiveness. As a web developer, I'm committed to creating interactive and user-friendly web applications. The Stopwatch project is a handy timekeeping tool that allows users to start, stop, and reset the timer. What makes this project special is its responsiveness – it's designed to work flawlessly on various devices, from desktop computers to tablets and smartphones. Whether you need a stopwatch for work, exercise, or any other purpose, this application ensures a seamless and adaptive user experience. Explore the project to witness how I blend functionality with responsive design, making it a versatile tool for tracking time wherever you are.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: r1,
        m2: r2,
        m3: r3,
        m4: r4,
      },
    ],
    demo: "https://jkumar-stopwatch.netlify.app/stopwatch.html",
    code: "https://github.com/jayak0776/stopwatch",
  },
  {
    id: 5,
    title: "QUOTE GENERATOR",
    description:
      "Welcome to my Quote Generator project, a showcase of my web development skills using HTML, CSS, and JavaScript, with a strong focus on responsiveness. As a web developer, I'm dedicated to creating engaging and accessible web applications. This project, in particular, is designed to generate random quotes and inspire users. It's not only informative but also responsive, ensuring that users can enjoy inspirational quotes on various devices and screen sizes. Whether you're on a desktop, tablet, or smartphone, the Quote Generator adapts seamlessly to provide an excellent user experience. Explore the project to see how I blend functionality and responsive design to create an appealing web application.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: s1,
        m2: s2,
        m3: s3,
        m4: s4,
      },
    ],
    demo: "https://jkumar-quote-generated.netlify.app/quote.html",
    code: "https://github.com/jayak0776/QuoteGenerator",
  },
  {
    id: 6,
    title: "CALCULATOR REACT",
    description:
      "Welcome to my React Calculator project, a showcase of my web development skills using the React framework, with a strong emphasis on responsiveness. As a web developer, I'm committed to creating dynamic and user-friendly web applications. The React Calculator project takes the basic calculator to the next level by leveraging the power of React to deliver a more interactive and responsive user experience. Whether you're performing complex mathematical operations or simple calculations, this calculator adapts seamlessly to various devices, from desktops to tablets and smartphones. Explore the project to witness how I blend the capabilities of React with responsive design, making it a versatile and adaptive tool for users on all devices.",
    tools: [
      {
        t1: "React",
        t2: "Css",
      },
    ],
    gallery: [
      {
        main: a1,
        m2: a1,
        m3: a1,
        m4: a1,
      },
    ],
    demo: "https://jayak0776.github.io/Calculator_React/",
    code: "https://github.com/jayak0776/Calculator_React",
  },
  {
    id: 7,
    title: "CALCULATOR",
    description:
      "Welcome to my Calculator project, a testament to my web development skills using HTML, CSS, and JavaScript, with a strong focus on responsiveness. As a web developer, I'm dedicated to creating practical and user-friendly web applications. The Calculator project is a fundamental tool for performing arithmetic operations, and it's designed to be both functional and responsive. No matter what device you're using, be it a desktop, tablet, or smartphone, this calculator adapts seamlessly to provide an excellent user experience. Whether you're solving complex math problems or simple calculations, the responsive design ensures that the calculator is at your fingertips wherever you are. Explore the project to see how I combine functionality with responsive design, making it a versatile and accessible tool for users on all devices.",
    tools: [
      {
        t1: "Html",
        t2: "Css",
        t3: "Javascript",
      },
    ],
    gallery: [
      {
        main: c1,
        m2: c2,
        m3: c3,
        m4: c4,
      },
    ],
    demo: "https://jayak0776.github.io/Calculator_React/",
    code: "https://github.com/jayak0776/Calculator_React",
  },
];

function ProjectInformation1() {
  const { id } = useParams();
  const projectId = parseInt(id);

  const project = ProjectData.find((p) => p.id === projectId);
  console.log(project);

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (project) {
      setMainImage(project.gallery[0].main);
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="w-full h-screen bg-white dark:text-slate-400 dark:bg-gray-900">
      <div className=" w-full h-full px-10 lg:px-28 md:px-14">
        <div className="pt-32 pb-8 text-lg">
          <NavLink
            to="/Projects"
            style={{
              display: "flex",
              alignItems: "center",
              width: "200px",
            }}
          >
            <span className="pr-3">
              <BsArrowLeft />
            </span>
            Back To Projects
          </NavLink>
        </div>
        <div className="md:flex justify-between flex-col">
          <div className="flex flex-col  lg:mr-32">
            <img
              src={mainImage}
              width={1100}
              height={400}
              className="shadow-2xl shadow-slate-600 rounded-md cursor-pointer main-img w-72 lg:w-5/6 md:w-3/4"
              alt="img not found"
            />
            <div className="flex py-10 space-x-4 ">
              {Object.keys(project.gallery[0]).map((imageKey, index) => (
                <img
                  key={index}
                  src={project.gallery[0][imageKey]}
                  width={140}
                  height={100}
                  className={`p-3 pt-5 cursor-pointer rounded-md small-img hover:scale-110 duration-200 w-16 lg:w-56 md:w-36 ${
                    mainImage === project.gallery[0][imageKey]
                      ? "active-image"
                      : ""
                  }`}
                  alt={`img not found`}
                  onClick={() => handleImageClick(project.gallery[0][imageKey])}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col text-lg">
            <h1 className="text-4xl pb-10">{project.title}</h1>
            <p className="text-sm md:text-2xl font-normal md:pb-10">
              {project.description}
            </p>
            <NavLink
              to={project.demo}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              Live
              <span className="pl-3">
                <HiOutlineExternalLink />
              </span>
            </NavLink>
            <NavLink
              to={project.code}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              GitHub Code
              <span className="pl-3">
                <HiOutlineExternalLink />
              </span>
            </NavLink>
            <div className="flex pb-5">
              {project.tools[0] &&
                Object.keys(project.tools[0]).map((toolKey, index) => (
                  <p
                    key={index}
                    className="mr-3 bg-zinc-800 text-white px-5 py-2 rounded-md"
                  >
                    {project.tools[0][toolKey]}
                  </p>
                ))}
            </div>
            <hr />
            <p className="py-2">Project Name : {project.title}</p>
            <p className="py-2">Project creator : Jaya kumar</p>
            <p className="py-2">Project Id : {project.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInformation1;
