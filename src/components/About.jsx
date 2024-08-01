import React from 'react';
import { motion } from 'framer-motion';
import profileImage from "../assets/abhi-removebg-preview.png"; // Adjust the path as needed

const About = () => {
  return (
    <div id="About" className="bg-black min-h-screen flex justify-center items-center py-16 text-white">
      <div className="w-[90vw] lg:w-[80vw] h-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex overflow-hidden justify-center items-center rounded-full shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent clip-path-polygon"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover z-10 border-4 border-white rounded-full shadow-md"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent">
            About Us
          </h1>
          <p className="text-base lg:text-lg leading-relaxed">
            As a passionate full stack developer, I specialize in creating
            dynamic web applications using the latest technologies. I excel in
            both front-end and back-end development, ensuring seamless user
            experiences. Beyond coding, I enjoy photography, hiking, and playing
            the guitar, which inspire my creative problem-solving approach.
            Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
