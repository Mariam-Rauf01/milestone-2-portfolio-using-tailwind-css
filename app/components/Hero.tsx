"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-10 bg-[#381a27] min-h-screen flex items-center justify-center w-full"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1 space-y-3">
          <div className="flex mt-12 items-center justify-center md:justify-start gap-2 text-[#f3e7c3]">
            <MdWavingHand size={25} />
            <h1 className="text-2xl sm:text-3xl font-bold text-[#f3e7c3]">
              Hello, I&apos;m
            </h1>
          </div>

          <h1 className="lusitana mt-1 text-3xl sm:text-4xl md:text-5xl font-bold text-[#f3e7c3]">
            Mariam Rauf
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#E9E6E5]">
            <span className="lusitana text-[#f3e7c3]">FrontEnd Developer</span>
          </h2>

          <p className="lusitana block py-4 text-[#f0e8d1] text-base sm:text-lg md:text-xl">
            Frontend Developer proficient in HTML, CSS, and JavaScript, focused
            on crafting clean, responsive, and visually engaging interfaces
            using React and Next.js to deliver seamless user experiences.
          </p>

          <div className="bg-[#f3e7c3] w-full md:w-[240px] p-3 mt-4 text-lg rounded-md text-black mx-auto md:mx-0">
            <Link href={"https://github.com/Mariam-Rauf01"} target="_blank" rel="noopener noreferrer">
            <button
      className="lusitana flex items-center justify-center text-base sm:text-lg font-bold bg-[#f3e7c3] hover:bg-[#FFF4C9] hover:text-red-600 transition-colors duration-200 ease-in-out px-4 py-2 sm:px-6 sm:py-2 rounded-lg w-full md:w-auto"
    >
        Github Account
        <FaGithub size={25} className="ml-2" />
    </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-4/5 mt-4 sm:w-3/5 md:w-auto flex justify-center mb-6 md:mb-0">
          <Image
            src="/gif.gif"
            width={400}
            height={300}
            alt="mariam"
            className="max-w-full h-auto rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
