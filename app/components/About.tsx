import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const About = () => {
    return (
        <section className="bg-[#462937] py-12 md:py-16" id="about">
            <h1 className="text-center text-4xl md:text-5xl font-bold text-[#f3e7c3] mb-10 tracking-wide lusitana">
                About <span className="font-bold text-6xl text-[#f38190]"> Me</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 md:px-12">
                <div className="flex justify-center items-center">
                    <Image
                        src="/mariam.jpeg"
                        width={300}
                        height={300}
                        alt="Mariam portrait"
                        className="rounded-full md:rounded-md border-4 border-[#f3e7c3] shadow-lg"
                    />
                </div>
                
                <div className="max-w-xl text-center md:text-left px-4 md:px-0">
                    <div className="text-[#E9E6E5] inline-block mb-4">
                        <FaQuoteLeft size={28} />
                    </div>
                    
                    <p className="text-lg md:text-xl font-semibold text-[#f8f2de] leading-relaxed lusitana">
                        I am a committed Frontend Developer with a strong blend of creativity, technical skill, and expertise in modern web design. My experience in developing responsive, user-friendly applications has equipped me with a solid command of HTML, CSS, and JavaScript, along with specialized knowledge in frameworks like React and Next.js. I am constantly exploring new design trends and web technologies, aiming to create products that are both innovative and aligned with modern web standards. My goal is always to build solutions that not only meet business needs but also delight users and drive engagement.
                    </p>
                    
                    <div className="text-[#E9E6E5] inline-block mt-4">
                        <FaQuoteRight size={28} />
                    </div>
                </div>
            </div>
            
            <div className="px-6 md:px-24 lg:px-48 mt-12 ml-44">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f3e7c3] mb-6 tracking-wide lusitana">Education:</h2>
                
                <ul className="space-y-8 tracking-wide text-[#E9E6E0] lusitana">
                    <li>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Matriculation:</h3>
                        <p className="text-base md:text-lg text-[#f3e7c3]">PIA Model Secondary School, Karachi</p>
                    </li>
                    
                    <li>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Intermediate, Pre-Engineering:</h3>
                        <p className="text-base md:text-lg text-[#f3e7c3]">Government Girls Degree College, Gulistan-E-Jauhar, Karachi</p>
                    </li>
                    
                    <li>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Web 3, AI, & Metaverse</h3>
                        <p className="text-base md:text-lg text-[#f3e7c3]">Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
