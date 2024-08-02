import React from "react";
import profileImage2 from "../assets/download.jpg"; // Adjust the path as needed

const Gallery = () => {
  const handleClick2 = () => {
    window.open(
      "https://abhi-pawar-17.github.io/zom-clone/",
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
            imageSrc={profileImage2}
            title="Zomato Clone"
            description="This is my static Zomato Clone."
            onClick={handleClick2}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl w-80 h-80 flex flex-col">
      <div className="w-full h-[600px] ">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 bg-gray-500 w-full h-[600px]  flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
        <button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-transform duration-300"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default Gallery;
