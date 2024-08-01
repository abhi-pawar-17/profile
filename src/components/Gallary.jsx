import React from "react";
import profileImage from "../assets/background.jpg"; // Adjust the path as needed
import profileImage1 from "../assets/126746.jpg"; // Adjust the path as needed
import profileImage2 from "../assets/download.jpg"; // Adjust the path as needed

const Gallery = () => {
  const handleClick = () => {
    window.open(
      "",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleClick1 = () => {
    window.open(
      "",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleClick2 = () => {
    window.open(
      "",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div id="Gallery" className="min-h-[50vh] bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-white lg:text-4xl font-bold text-center mb-12 text-transparent">
          Project Gallery
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            imageSrc={profileImage}
            title="Project Webpage"
            description="This is my simple static webpage."
            onClick={handleClick}
          />
          <ProjectCard
            imageSrc={profileImage1}
            title="React TextUtils Tool"
            description="This is my simple static TOOL."
            onClick={handleClick1}
          />
          <ProjectCard
            imageSrc={profileImage2}
            title="Zomato Clone "
            description="This is my static zomato Clone."
            onClick={handleClick2}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl w-80 h-80">
      <img src={imageSrc} alt={title} className="w-full h-2/3 object-cover" />
      <div className="p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent absolute bottom-0 w-full h-1/3 flex flex-col justify-end">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform duration-300"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default Gallery;
