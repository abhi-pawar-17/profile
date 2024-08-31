import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TypingEffect from 'react-typing-effect';

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Fade-in effect for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    // Fade-in and slide-up effect for the text
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 }
    );

    // Scale-up and fade-in effect for the button
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1.5 }
    );
  }, []);

  const openDriveFile = () => {
    window.open(
      "https://drive.google.com/file/d/17ztOJr7OWkojgP5ZJrajBDYG6hJ0hKsd/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      id="Home"
      className="relative min-h-screen bg-white text-black"
      ref={containerRef}
    >
      {/* Glitch Effect */}
      <div className="absolute inset-0 bg-white">
        <div className="glitch" data-text="HACKER PORTFOLIO"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Terminal-like Text Animation */}
        <div
          ref={textRef}
          className="text-center flex flex-col items-center gap-6 mt-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            <TypingEffect
              text={["WELCOME TO MY PORTFOLIO", "DEVELOPER MODE ACTIVATED", "EXPLORE MY CODE"]}
              speed={50}
              eraseSpeed={30}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
            />
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            I'm a Full Stack Web Developer. Specializing in crafting unique, efficient, and high-performance web solutions. Dive into my portfolio to see what I've been working on.
          </p>
          <button
            ref={buttonRef}
            onClick={openDriveFile}
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-900 transition duration-300 transform hover:scale-105"
          >
            VIEW RESUME
          </button>
        </div>
      </div>

      {/* Glitch Effect Styles */}
      <style jsx global>{`
        body {
          cursor: url('https://cdn-icons-png.flaticon.com/512/64/64572.png'), auto;
        }

        .glitch {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 6rem;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          overflow: hidden;
          white-space: nowrap;
          letter-spacing: 0.1em;
          animation: glitch 2s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          background: black;
          overflow: hidden;
          width: 100%;
          height: 100%;
          clip: rect(0, 0, 0, 0);
          animation: glitch 2s infinite;
        }

        .glitch::before {
          left: -2px;
          text-shadow: 1px 0 red, -1px 0 cyan;
          animation: glitch-1 3s infinite linear;
        }

        .glitch::after {
          left: 2px;
          text-shadow: 1px 0 cyan, -1px 0 red;
          animation: glitch-2 4s infinite linear;
        }

        @keyframes glitch {
          0% { clip: rect(0, 900px, 0, 0); }
          20% { clip: rect(0, 900px, 0, 0); }
          40% { clip: rect(0, 900px, 0, 0); }
          60% { clip: rect(0, 900px, 0, 0); }
          80% { clip: rect(0, 900px, 0, 0); }
          100% { clip: rect(0, 900px, 0, 0); }
        }

        @keyframes glitch-1 {
          0% { transform: translate(-5px, -5px); }
          50% { transform: translate(5px, 5px); }
          100% { transform: translate(-5px, -5px); }
        }

        @keyframes glitch-2 {
          0% { transform: translate(5px, 5px); }
          50% { transform: translate(-5px, -5px); }
          100% { transform: translate(5px, 5px); }
        }
      `}</style>
    </div>
  );
};

export default Home;
