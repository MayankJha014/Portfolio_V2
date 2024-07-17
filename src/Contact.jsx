import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const form = useRef();

  useEffect(() => {
    const { fullname, email, message } = formData;
    if (fullname && email && message) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w7s10jk", "template_4bkd19a", form.current, {
        publicKey: "KDPIDsyBvS9AxD4w3",
      })
      .then(
        (result) => {
          toast.success("Email sent successfully");
          form.current.reset();
          setFormData({
            fullname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <article class="resume" data-page="resume">
        <header>
          <h2 class="article-title relative pb-5">Contact</h2>
        </header>

        <div
          className="my-5"
          style={{
            filter: "grayscale(1) invert(1)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5982115962156!2d77.49916787588644!3d23.257703607511633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4185db1d675b%3A0x9666aea7d7410c2b!2sPrabhatam%20Heights%20Patel%20Nagar%20Bhopal!5e0!3m2!1sen!2sin!4v1720499509744!5m2!1sen!2sin"
            className="w-full rounded-xl"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div>
          {" "}
          <h2 class="font-poppins text-white-1 font-semibold my-4 text-lg">
            Contact Form
          </h2>
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              className={`px-5 py-[16px] ml-auto bg-transparent font-poppins rounded-xl flex items-center gap-2 capitalize z-10 text-orange-yellow-crayola ${
                isButtonEnabled ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              type="submit"
              style={{
                boxShadow: "-1px -1px 1px #ffffff35",
              }}
              disabled={!isButtonEnabled}
            >
              <IoIosSend size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </article>
    </>
  );
};

export default Contact;
