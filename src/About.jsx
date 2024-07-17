import React from "react";
import IconPhoto from "./assets/icon-photo.svg";
import IconApp from "./assets/icon-app.svg";
import IconDev from "./assets/icon-dev.svg";
import IconDesign from "./assets/ml.svg";
import AccompImg from "./assets/accomp.svg";
import ApieroImg from "./assets/apiero.png";
import BhelImg from "./assets/bhel.svg";

const About = () => {
  return (
    <>
      <article className="">
        <h2 class="article-title relative pb-5">About me</h2>
        <section class="about-text">
          <p>
            I am a passionate developer based in India, specializing in web and
            app development. With fluency in ReactJS, NodeJS, Express, and
            Flutter, I have successfully freelanced on numerous projects,
            delivering high-quality solutions tailored to client needs.
            Currently, I am expanding my expertise by learning Machine Learning.
          </p>{" "}
          <p className="my-5">
            My approach is to build websites that are not only functional and
            user-friendly but also visually captivating. I infuse a personal
            touch into every project, ensuring each product is both eye-catching
            and easy to use. My aim is to creatively convey your message and
            identity, having designed web interfaces for many renowned brands.{" "}
          </p>{" "}
        </section>
      </article>
      <section class="service">
        <h3 class="service-title">What i'm doing</h3>

        <ul class="service-list my-6">
          <li
            class="service-item"
            style={{
              boxShadow: "-1px -1px 1px #ffffff42",
            }}
          >
            <div class="service-icon-box">
              <img src={IconDesign} alt="design icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="service-item-title">Machine Learning</h4>

              <p class="service-item-text">
                Harnessing the power of data to predict, optimize, and innovate.
              </p>
            </div>
          </li>

          <li
            class="service-item"
            style={{
              boxShadow: "-1px -1px 1px #ffffff41",
            }}
          >
            <div class="service-icon-box">
              <img src={IconDev} alt="Web development icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li
            class="service-item"
            style={{
              boxShadow: "-1px -1px 1px #ffffff41",
            }}
          >
            <div class="service-icon-box">
              <img src={IconApp} alt="mobile app icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Mobile apps</h4>

              <p class="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li
            class="service-item"
            style={{
              boxShadow: "-1px -1px 2px #ffffff24",
            }}
          >
            <div class="service-icon-box">
              <img src={IconPhoto} alt="camera icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Testing</h4>

              <p class="service-item-text">
                Precision in every line of code ensures robust performance and
                reliability.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="service">
        <h3 class="service-title">Clients</h3>

        <ul class="flex flex-nowrap gap-5 items-center   overflow-x-auto  ">
          <li>
            <img src={AccompImg} alt="" className="client-logo w-56 transi" />
          </li>
          <li>
            <img src={ApieroImg} alt="" className="client-logo w-60 h-auto" />
          </li>
          <li>
            <img src={BhelImg} alt="" className="client-logo w-16" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
