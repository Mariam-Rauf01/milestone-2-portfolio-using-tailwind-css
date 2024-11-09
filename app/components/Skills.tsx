import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const Skill = () => {
  return (
    <>
      <section id="skill" className="bg-[#381a27] min-h-screen py-10">
        <h1 className='lusitana text-center font-bold text-4xl text-[#f3e7c3] py-6 md:py-9'>
          My <span className="font-bold text-6xl text-[#f38190]">Skills</span>
        </h1>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:mx-[70px] mx-[20px] gap-6 md:gap-4 py-[20px]">
          {/* Skill Card for Next.js */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <SiNextdotjs />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>Next Js</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for React.js */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <RiReactjsFill />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>React Js</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for Tailwind CSS */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <SiTailwindcss />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>Tailwind CSS</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:mx-[70px] mx-[20px] gap-6 md:gap-4 py-[20px]">
          {/* Skill Card for TypeScript */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <SiTypescript />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>TypeScript</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for JavaScript */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <SiJavascript />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>JavaScript</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] -300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for Figma */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#462937] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#f8f2de]">
              <SiFigma />
            </div>
            <h1 className='lusitana text-3xl text-[#f8f2de] font-bold mt-2'>Figma</h1>
            <div className="w-full h-[8px] bg-[#f3e7c3] mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#381a27] rounded-md"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;