import React from "react";
import IconPhoto from "./assets/icon-photo.svg";
import IconApp from "./assets/icon-app.svg";
import IconDev from "./assets/icon-dev.svg";
import IconDesign from "./assets/icon-design.svg";
import AccompImg from "./assets/accomp.svg";
import ApieroImg from "./assets/apiero.png";
import BhelImg from "./assets/bhel.svg";
import NodeImg from "./assets/nodejs.svg";
import ReactImg from "./assets/reactjs.svg";
import TailImg from "./assets/tailwindcss.svg";
import FlutterImg from "./assets/flutter.svg";
import FirebaseImg from "./assets/firebase.svg";
import HtmlImg from "./assets/html.svg";
import JavascriptImg from "./assets/javascript.svg";
import DartImg from "./assets/dart.svg";
import CssImg from "./assets/css.svg";
import CImg from "./assets/c.svg";
import TensorflowImg from "./assets/tensorflow.svg";
import { IoMdBook } from "react-icons/io";

const Resume = () => {
  return (
    <>
      <article class="resume" data-page="resume">
        <header>
          <h2 class="article-title relative pb-5">Resume</h2>
        </header>

        <section class="timeline">
          <div class="mt-10 flex gap-4 items-center mb-[25px]">
            <div
              style={{
                boxShadow: "-1px -1px 1px #ffffff42",
              }}
              className="icon-box h-fit z-10"
            >
              <IoMdBook color="hsl(45, 100%, 72%)" size={25} />
            </div>

            <h3 class="text-2xl font-poppins text-white-2 font-semibold">
              Education
            </h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">
                {" "}
                Senior Secondary Education -Kendriya Vidyalaya
              </h4>

              <span>2019 — 2020</span>

              <p class="timeline-text">Scored 86.6 % in Science stream.</p>
            </li>

            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">
                B.Tech - Lakshmi Narain College of Technology & Science{" "}
              </h4>

              <span>2021 — 2025</span>

              <p class="timeline-text">
                Currently pursuing a BTech in Computer Science Engineering.
              </p>
            </li>
          </ol>
        </section>

        <section class="timeline">
          <div class="mt-10 flex gap-4 items-center mb-[25px]">
            <div
              style={{
                boxShadow: "-1px -1px 1px #ffffff42",
              }}
              className="icon-box h-fit z-10"
            >
              <IoMdBook color="hsl(45, 100%, 72%)" size={25} />
            </div>

            <h3 class="text-2xl font-poppins text-white-2 font-semibold">
              Experience
            </h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Apiero Medica</h4>

              <span>June 2023 — Present</span>

              <p class="timeline-text">
                Created and implemented a teleconsultation system to improve
                medical service access in rural areas, aimed at enhancing
                healthcare delivery in underserved communities.
              </p>
            </li>

            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Acompworld Technosoft</h4>

              <span> Feb 2023 — April 2023</span>

              <p class="timeline-text">
                Coordinated custom CMS development for efficient content
                management and scalability, focusing on architecture and
                user-friendly admin panels.
              </p>
              <p class="timeline-text">
                Led integration of an advanced inventory management solution,
                including procurement, inventory tracking, vendor and workforce
                management, QR code tagging, and transportation logistics.
              </p>
            </li>

            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">
                Bharat Heavy Electricals Limited (BHEL)
              </h4>

              <span>2010 — 2013</span>

              <p class="timeline-text">
                Consulted on migrating existing Oracle Forms and Reports 11g
                software to the latest open-source technology while maintaining
                the database, and successfully developed and deployed the BHEL
                Pharmacy System as a proof of concept (PoC).
              </p>
            </li>
          </ol>
        </section>

        <section class="skill">
          <h3 class="text-white-2 font-semibold capitalize font-poppins text-xl">
            My skills
          </h3>
          <ul class="flex flex-wrap gap-5 mt-4 items-center   overflow-x-auto  ">
            <li>
              <img src={ReactImg} alt="" className="client-logo w-36 transi" />
            </li>
            <li>
              <img src={NodeImg} alt="" className="client-logo w-36 h-auto" />
            </li>
            <li>
              <img src={HtmlImg} alt="" className="client-logo h-12" />
            </li>
            <li>
              <img src={CssImg} alt="" className="client-logo h-12" />
            </li>
            <li>
              <img src={JavascriptImg} alt="" className="client-logo h-12" />
            </li>
            <li>
              <img src={CImg} alt="" className="client-logo w-14" />
            </li>
            <li>
              <img src={FlutterImg} alt="" className="client-logo w-32" />
            </li>
            <li>
              <img src={DartImg} alt="" className="client-logo h-14" />
            </li>
            <li>
              <img src={TensorflowImg} alt="" className="client-logo w-36" />
            </li>
            <li>
              <img src={FirebaseImg} alt="" className="client-logo w-36" />
            </li>
            <li>
              <img src={TailImg} alt="" className="client-logo w-36" />
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Resume;
