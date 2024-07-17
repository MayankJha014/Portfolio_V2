import React, { useState } from "react";
import AxtraImg from "./assets/axtra.png";
import ChatImg from "./assets/Chat app.png";
import EnwoodImg from "./assets/enwood.png";
import NotionImg from "./assets/notion-blog.png";
import LionImg from "./assets/lion club.png";
import TeleImg from "./assets/telemedi.png";
import GeminiImg from "./assets/progemini.png";
import TaskImg from "./assets/task.png";
import PlantImg from "./assets/plant.png";
import { FaGithub } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Portfolio = () => {
  const [category, setCategory] = useState(0);

  const projectList = [
    {
      title: "Chat Messaging",
      description:
        "A cutting-edge chat messaging app crafted with Node.js, ReactJS, and WebSockets. Experience secure authentication, real-time chat, and collaborative group messaging. Immerse yourself in the seamless fusion of technology, design, and innovation, redefining the standards of modern communication platforms. ",
      image: ChatImg,
      git: "https://github.com/MayankJha014/Chat-Messanger",
      demo: "https://chat-messanger-front.vercel.app/",
      tags: "Web Development",
    },
    {
      title: "AXTRA UI Clone",
      description:
        "Elevate your Next.js UI with a dynamic blend of animations! This innovative interface boasts a diverse array of 10+ animations, ranging from subtle fades and slides to lively bounces and spins. Engage users with seamless transitions and captivating visual effects, ensuring a memorable and immersive browsing experience.",
      image: AxtraImg,
      git: "https://github.com/MayankJha014/apiero-tech",
      demo: "https://apiero-tech.vercel.app/",
      tags: "Web Development",
    },
    {
      title: "Apiero Tele-HealthCare",
      description:
        "The telemedicine app connects users with licensed medical professionals via secure video calls, enabling scheduling, virtual consultations, and access to medical records. It ensures convenient, timely, and confidential healthcare services, enhancing accessibility while reducing the necessity for in-person visits.",
      image: TeleImg,
      git: "",
      demo: "https://www.apieromedica.in/",
      tags: "Web Development",
    },
    {
      title: "Parsippany Lions Club(CMS)",
      description:
        " The CMS, developed on React.js and Node.js, delivers an intuitive content management experience. With the dynamic combination of React.js for interactive user interfaces and Node.js for efficient backend operations, it enables streamlined content creation and management, ensuring a responsive and engaging web presence.",
      image: LionImg,
      git: "",
      demo: "https://parsippanylionsclub.org/",
      tags: "Web Development",
    },
    {
      title: "Entrepreneur-Woods",
      description:
        "Entrepreneur-Woods is a dynamic blogging site powered by Node.js, featuring an intuitive admin interface for seamless post management. Empower your entrepreneurial journey with easy backend control, allowing you to create, edit, and organize content effortlessly, enhancing your online presence and engagement.",
      image: EnwoodImg,
      git: "",
      demo: "https://entrepreneur-woods-wprw-front.vercel.app/",
      tags: "Web Development",
    },
    {
      title: "Notion Blog",
      description:
        "Utilize the Notion API to craft customized software solutions, integrating seamless workflows and enhancing productivity. Tailor applications to streamline operations and optimize collaboration, empowering efficient and effective team performance.",
      image: NotionImg,
      git: "https://github.com/MayankJha014/Blog-Website",
      demo: "https://blog-website-31b6.vercel.app/",
      tags: "Web Development",
    },
    {
      title: "Pro Gemini - Google Gemini",
      description:
        "Introducing Pro Gemini: a cutting-edge app developed with the Google Gemini API and Flutter. Seamlessly integrating advanced AI features, it offers a sleek and intuitive user experience. Unlock the future of productivity with Pro Gemini's powerful capabilities.",
      image: GeminiImg,
      git: "https://github.com/MayankJha014/ProGemini",
      demo: "",
      tags: "App Development",
    },
    {
      title: "Plant Detection App",
      description:
        "Experience our plant detection app built on a custom-trained TensorFlow model, providing precise plant identification and classification. Leverage advanced AI to enhance agricultural practices and botanical research. Enjoy seamless integration and intuitive features for efficient plant management.",
      image: PlantImg,
      git: "https://github.com/MayankJha014/Plant-Based-Detetcion",
      demo: "",
      tags: "App Development",
    },
    {
      title: "Task Management App",
      description:
        "Explore our task management app built with Node.js, Flutter, and Express, designed for comprehensive team and project management. Streamline workflows and enhance collaboration with real-time updates and intuitive features. Efficiently manage tasks, projects, and teams from a single platform.",
      image: TaskImg,
      git: "https://github.com/MayankJha014/Tracker-Complete-Task-Management-App",
      demo: "",
      tags: "App Development",
    },
  ];

  return (
    <>
      <article class="resume" data-page="resume">
        <header>
          <h2 class="article-title relative pb-5">Portfolio</h2>
        </header>
        <div className="flex gap-8 my-6 font-poppins text-light-gray overflow-x-auto">
          <p
            className={`portfolio-cat ${
              category == 0 ? " text-orange-yellow-crayola" : " "
            } `}
            onClick={() => setCategory(0)}
          >
            All
          </p>
          <p
            className={`portfolio-cat ${
              category == 1 ? " text-orange-yellow-crayola" : " "
            } `}
            onClick={() => setCategory(1)}
          >
            Web Development
          </p>
          <p
            className={`portfolio-cat ${
              category == 2 ? " text-orange-yellow-crayola" : " "
            } `}
            onClick={() => setCategory(2)}
          >
            App
          </p>
        </div>

        <div className="flex flex-wrap my-2 gap-8">
          {/* <div className="blog-post">
            <img
              src={ChatImg}
              alt=""
              className="p-1 hover:scale-105 transition-all rounded-lg"
            />
            <h1 className="blog-text">Fianace</h1>
          </div> */}

          {projectList
            .filter((x) => {
              switch (category) {
                case 0:
                  return true;
                case 1:
                  return x.tags === "Web Development";
                case 2:
                  return x.tags === "App Development";
                default:
                  return false;
              }
            })
            .map((x, index) => {
              return (
                <ProjectComp
                  title={x.title}
                  image={x.image}
                  description={x.description}
                  git={x.git}
                  demo={x?.demo ?? ""}
                />
              );
            })}
        </div>
      </article>
    </>
  );
};

export default Portfolio;

const ProjectComp = ({ title, image, description, git, demo }) => {
  return (
    <div
      style={{
        boxShadow: "-1px -1px 1px #ffffff42",
      }}
      className="w-fit sm:max-w-[16rem] max-h-max min-h-full border border-jet rounded-xl hover:scale-105 transition-all duration-500 flex flex-col"
    >
      <div className="relative flex flex-col max-w-[24rem] overflow-hidden rounded-xl bg-[#1C1C22] text-white shadow-md h-full">
        <div className="relative overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            src={image}
            className="object-contain h-40 w-full"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-1 flex-grow">
          <h4 className="block px-2 font-poppins text-[16px] mt-2 antialiased font-medium leading-snug tracking-normal text-white-2">
            {title}
          </h4>
          <p className="block mt-1 font-poppins p-2 text-[15px] antialiased font-normal leading-relaxed text-light-gray-70">
            {description}
          </p>
        </div>
        <div className="flex justify-between p-2">
          {demo ? (
            <a href={demo} target="_blank" className="">
              <IoEyeOutline
                size={20}
                className="text-light-gray-70 cursor-pointer hover:text-white-2"
              />
            </a>
          ) : (
            <IoEyeOutline
              size={20}
              className="text-light-gray-70 hover:text-white-2"
            />
          )}
          {git ? (
            <a href={git} target="_blank" className="">
              <FaGithub
                size={20}
                className="text-light-gray-70 cursor-pointer hover:text-white-2"
              />
            </a>
          ) : (
            <FaGithub
              size={20}
              className="text-light-gray-70 cursor-pointer hover:text-white-2"
            />
          )}
        </div>
      </div>
    </div>
  );
};
