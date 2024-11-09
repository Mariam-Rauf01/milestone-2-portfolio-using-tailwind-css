import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <section id="project" className="bg-[#462937] py-10 min-h-screen">
        <h1 className="lusitana text-center font-bold text-4xl text-[#f3e7c3] mb-8">
          My{" "}
          <span className="lusitana font-bold text-6xl text-[#f38190]">
            Projects
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mx-6 md:mx-20">
          {/* Project Card 1 */}
          <div className="bg-[#381a27] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/product design.png"}
              width={430}
              height={454}
              alt="product page design"
              className="rounded-md"
            />
            <h1 className="lusitana text-2xl mt-4 text-[#f8f2de] text-center">
              Product Page Design using HTML, CSS & JS
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link
                href="https://vercel.com/mariam-raufs-projects/html-css-js-projects-1hfl"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3]  rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/HTML-CSS-JS-Projects/tree/main/Product%20Page%20Design"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3]  rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-[#381a27] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/coffee.png"}
              width={430}
              height={454}
              alt="coffee web"
              className="rounded-md"
            />
            <h1 className="lusitana text-2xl mt-4 text-[#f8f2de] text-center">
              Coffee Web page using Next.js, Tailwind Css & Ts
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link
                href="https://coffee-web-design.vercel.app/"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3] rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/Coffee-Web-Design"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3] rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-[#381a27] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/Untitled design.png"}
              width={430}
              height={454}
              alt="Nodejs Projects"
              className="rounded-md"
            />
            <h1 className="lusitana text-2xl mt-4 text-[#f8f2de] text-center">
            Node.js Projects Using Typescript, Student Manage...
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link
                href="https://vercel.com/mariam-raufs-projects/student-management-system"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3] rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/Student-Management-System"
                target="_blank"
              >
                <button
                  type="button"
                  className="lusitana text-lg bg-[#f3e7c3] rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2  hover:text-red-500 transition-colors duration-200 ease-in-out"
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
