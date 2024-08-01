import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div id="Contact" className="flex flex-col items-center justify-center min-h-[50vh] py-16 bg-white text-black">
      <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-center">Get in Touch</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl px-4">
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 lg:mb-0">
          <a
            href="https://www.linkedin.com/in/abhi-pawar-30008924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <FaLinkedin className="text-4xl text-blue-600" />
          </a>
          <a
            href="https://github.com/abhipawar1727"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <FaGithub className="text-4xl text-gray-900" />
          </a>
          <a
            href="https://wa.me/9370657383"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <FaWhatsapp className="text-4xl text-green-500" />
          </a>
          <a
            href="https://www.instagram.com/aabhi.17"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <FaInstagram className="text-4xl text-pink-600" />
          </a>
          <a
            href="tel:+919370657383"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <FaPhone className="text-4xl text-blue-500" />
          </a>
          <a
            href="mailto:aspawar1727@gmail.com"
            className="transition-transform transform hover:scale-110 p-4 rounded-full bg-white shadow-2xl hover:shadow-xl flex items-center justify-center"
          >
            <SiGmail className="text-4xl text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
