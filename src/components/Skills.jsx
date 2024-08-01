import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiPostman, SiGithub, SiGit, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  return (
    <div id='skills' className="min-h-[80vh] bg-white py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-black mb-12 ">
        Skills & Technology
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] lg:w-[80%] mx-auto">
        <SkillCard icon={<FaHtml5 className="text-5xl text-[#E34F26]" />} label="HTML5" />
        <SkillCard icon={<FaCss3Alt className="text-5xl text-[#1572B6]" />} label="CSS3" />
        <SkillCard icon={<FaJsSquare className="text-5xl text-[#F7DF1E]" />} label="JavaScript" />
        <SkillCard icon={<FaReact className="text-5xl text-[#61DAFB]" />} label="React" />
        <SkillCard icon={<FaNodeJs className="text-5xl text-[#339933]" />} label="Node.js" />
        <SkillCard icon={<SiMongodb className="text-5xl text-[#47A248]" />} label="MongoDB" />
        <SkillCard icon={<SiExpress className="text-5xl text-[#000000]" />} label="Express" />
        <SkillCard icon={<SiNextdotjs className="text-5xl text-[#000000]" />} label="Next.js" />
        <SkillCard icon={<SiTailwindcss className="text-5xl text-[#06B6D4]" />} label="Tailwind CSS" />
        <SkillCard icon={<SiPostman className="text-5xl text-[#FF6C37]" />} label="Postman" />
        <SkillCard icon={<SiGit className="text-5xl text-[#F1502F]" />} label="Git" />
        <SkillCard icon={<SiGithub className="text-5xl text-[#181717]" />} label="GitHub" />
        <SkillCard icon={<SiBootstrap className="text-5xl text-[#8411f6]" />} label="Bootstrap" />
      </div>
    </div>
  );
};

const SkillCard = ({ icon, label }) => {
  return (
    <div className="relative p-6 bg-gray-800 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-black  opacity-30 rounded-lg"></div>
      <div className="relative z-10 flex flex-col items-center">
        {icon}
        <p className="mt-4 text-white text-lg font-medium">{label}</p>
      </div>
    </div>
  );
};

export default Skills;
