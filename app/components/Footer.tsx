import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#694953] py-4 md:py-6 text-center">
        <h1 className={`lusitana text-[#f5e6ba] text-lg md:text-2xl`}>
          Mariam Rauf &copy; {new Date().getFullYear()}
        </h1>
      </footer>
    </>
  );
}

export default Footer;