import myAvatar from "./assets/my-avatar.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaRegCalendarAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Toaster } from "react-hot-toast";
import Snowfall from "./snow";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [active, setActive] = useState(0);

  const [activeSidebar, setActiveSidebar] = useState(false);
  const transition = {
    duration: 0.5,
    ease: "linear",
  };
  return (
    <>
      <Toaster />
      <Snowfall />

      <main className="xl:w-4/5 min-w-64 my-12 mx-3  ms-auto me-auto flex flex-col xl:flex-row justify-center items-stretch gap-6">
        {/* <div className="flex sticky top-14 h-full w-full"> */}
        <aside className="sidebar">
          <div class="relative flex  items-center justify-start xl:flex-col gap-6">
            <figure class="bg-gradient-onyx rounded-[30px]">
              <img src={myAvatar} alt="Mayank Jha" width="150" />
            </figure>

            <div class="">
              <h1
                className="mb-[10px] font-poppins text-center tracking-[-0.25px] font-medium text-[26px] whitespace-nowrap text-white-2"
                title="Mayank Jha"
              >
                Mayank Jha
              </h1>

              <p class="bg-onyx xl:m-auto text-white-2 text-[12px] font-normal px-[18px] py-[5px] w-max rounded-lg">
                Web developer
              </p>
            </div>
          </div>
          <button
            style={{
              boxShadow: "-1px 0px 1px #ffffff35",
            }}
            class="xl:hidden px-3 py-[14px] text-sm absolute top-0 right-0 left-auto bg-transparent font-poppins rounded-bl-xl flex items-center gap-2 capitalize z-10 text-orange-yellow-crayola"
            onClick={() => setActiveSidebar(!activeSidebar)}
          >
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>

          <div class={`${activeSidebar ? "hidden " : " "} xl:block `}>
            <div class="separator"></div>

            <ul class="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-1  gap-x-4 gap-y-8">
              <li class="flex gap-4">
                <div
                  style={{
                    boxShadow: "-1px -1px 1px #ffffff42",
                  }}
                  className="icon-box h-fit m-auto"
                >
                  <MdOutlineMailOutline color="hsl(45, 100%, 72%)" size={25} />
                </div>

                <div class="contact-info">
                  <p class="contact-title">Email</p>

                  <a
                    href="mailto:mayankjha014@gmail.com"
                    class="contact-link break-all"
                  >
                    mayankjha014@gmail.com
                  </a>
                </div>
              </li>

              <li class="contact-item">
                <div
                  style={{
                    boxShadow: "-1px -1px 1px #ffffff42",
                  }}
                  className="icon-box"
                >
                  <IoPhonePortraitOutline
                    color="hsl(45, 100%, 72%)"
                    size={25}
                  />
                </div>

                <div class="contact-info">
                  <p class="contact-title">Phone</p>

                  <a href="tel:+12133522795" class="contact-link">
                    +91 6201770073
                  </a>
                </div>
              </li>

              <li class="contact-item">
                <div
                  style={{
                    boxShadow: "-1px -1px 1px #ffffff42",
                  }}
                  className="icon-box"
                >
                  <FaRegCalendarAlt color="hsl(45, 100%, 72%)" size={25} />
                </div>

                <div class="contact-info">
                  <p class="contact-title">Birthday</p>

                  <time datetime="2002-11-27" className="contact-link">
                    November 27, 2002
                  </time>
                </div>
              </li>

              <li class="contact-item">
                <div
                  style={{
                    boxShadow: "-1px -1px 1px #ffffff41",
                  }}
                  className="icon-box"
                >
                  <IoLocationOutline color="hsl(45, 100%, 72%)" size={25} />
                </div>

                <div class="contact-info">
                  <p class="contact-title">Location</p>

                  <address className="contact-link">
                    Bhopal, Madhaya Pradesh , India
                  </address>
                </div>
              </li>
            </ul>

            <div class="separator"></div>

            <ul class="flex gap-4 items-center justify-center mt-10">
              <li class="social-item">
                <a
                  href="https://github.com/MayankJha014"
                  class="social-link"
                  target="_blank"
                >
                  <FaGithub size={20} color="hsla(0, 0%, 84%, 0.7)" />{" "}
                </a>
              </li>

              {/* <li class="social-item">
                <a href="#" class="social-link">
                  <FaInstagram size={20} color="hsla(0, 0%, 84%, 0.7)" />{" "}
                </a>
              </li> */}

              <li class="social-item">
                <a
                  href="https://www.linkedin.com/in/mayank-jha-674118228/"
                  class="social-link"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} color="hsla(0, 0%, 84%, 0.7)" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* </div> */}
        {/* <div className="w-3/4 min-w-[75%] relative bg-white"> */}
        <div class="!mb-20 main-content sidebar mt-[10px]">
          <nav class="navbar">
            {" "}
            <ul class="navbar-list font-poppins">
              {" "}
              <li class="navbar-item">
                {" "}
                <button
                  class={`navbar-link ${
                    active == 0
                      ? " text-orange-yellow-crayola"
                      : " text-light-gray"
                  }`}
                  onClick={() => setActive(0)}
                >
                  About{" "}
                </button>{" "}
              </li>{" "}
              <li class="navbar-item">
                {" "}
                <button
                  class={`navbar-link ${
                    active == 1
                      ? " text-orange-yellow-crayola"
                      : " text-light-gray"
                  }`}
                  onClick={() => setActive(1)}
                >
                  Resume{" "}
                </button>{" "}
              </li>{" "}
              <li class="navbar-item">
                {" "}
                <button
                  class={`navbar-link ${
                    active == 2
                      ? " text-orange-yellow-crayola"
                      : " text-light-gray"
                  }`}
                  onClick={() => setActive(2)}
                >
                  Portfolio{" "}
                </button>{" "}
              </li>{" "}
              <li class="navbar-item">
                {" "}
                <button
                  class={`navbar-link ${
                    active == 3
                      ? " text-orange-yellow-crayola"
                      : " text-light-gray"
                  }`}
                  onClick={() => setActive(3)}
                >
                  Contact{" "}
                </button>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>
          <AnimatePresence>
            {active === 0 && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="transition-opacity visible"
              >
                <About />
              </motion.div>
            )}
            {active === 1 && (
              <motion.div
                key="resume"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="transition-opacity visible"
              >
                <Resume />
              </motion.div>
            )}
            {active === 2 && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="transition-opacity visible"
              >
                <Portfolio />
              </motion.div>
            )}
            {active === 3 && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="transition-opacity visible"
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>{" "}
        {/* </div> */}
        <nav
          class="w-max rounded-t-2xl z-10 fixed bottom-0 left-1/2  px-5 bg-[#2b2b2c] md:hidden block"
          style={{ transform: "translate(-50%, 0%)" }}
        >
          {" "}
          <ul class="flex justify-center items-center gap-3 font-poppins">
            {" "}
            <li class="navbar-item">
              {" "}
              <button
                class={`navbar-link text-sm ${
                  active == 0
                    ? " text-orange-yellow-crayola"
                    : " text-light-gray"
                }`}
                onClick={() => setActive(0)}
              >
                About{" "}
              </button>{" "}
            </li>{" "}
            <li class="navbar-item">
              {" "}
              <button
                class={`navbar-link text-sm ${
                  active == 1
                    ? " text-orange-yellow-crayola"
                    : " text-light-gray"
                }`}
                onClick={() => setActive(1)}
              >
                Resume{" "}
              </button>{" "}
            </li>{" "}
            <li class="navbar-item">
              {" "}
              <button
                class={`navbar-link text-sm ${
                  active == 2
                    ? " text-orange-yellow-crayola"
                    : " text-light-gray"
                }`}
                onClick={() => setActive(2)}
              >
                Portfolio{" "}
              </button>{" "}
            </li>{" "}
            <li class="navbar-item">
              {" "}
              <button
                class={`navbar-link text-sm${
                  active == 3
                    ? " text-orange-yellow-crayola"
                    : " text-light-gray"
                }`}
                onClick={() => setActive(3)}
              >
                Contact{" "}
              </button>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>
      </main>
    </>
  );
}

export default App;
