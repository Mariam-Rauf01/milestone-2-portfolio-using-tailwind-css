"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#381a27] py-8 md:py-12 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#f3e7c3] mb-6 lusitana">
        Contact <span className="text-6xl text-[#f38190]">Me</span>
      </h1>
      
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10 space-y-8">
        
        {/* Contact Details */}
        {[
          { icon: <MdEmail size={38} aria-label="Email Icon" />, text: "mariam.rauf567@gmail.com" },
          { icon: <IoCallSharp size={38} aria-label="Phone Icon" />, text: "0331 - 3050255" },
          { icon: <FaLocationDot size={38} aria-label="Location Icon" />, text: "Karachi, Pakistan" }
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="border-2 p-4 rounded-full text-[#f3e7c3]">
              {item.icon}
            </div>
            <IoIosArrowForward size={30} className="text-[#f3e7c3]" />
            <h2 className="text-lg md:text-2xl text-[#f3e7c3] lusitana">
              {item.text}
            </h2>
          </div>
        ))}

        <hr className="my-8 border-pink-200" />

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {[
            { href: "https://www.facebook.com/profile.php?id=100070472975875", icon: <FaFacebook size={30} /> },
            { href: "https://www.linkedin.com/in/mariam-rauf-soomro-3a2046247/", icon: <FaLinkedinIn size={30} /> }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pink-200 p-3 rounded-full text-[#f3e7c3]  hover:bg-[#f38190] hover:text-white hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
