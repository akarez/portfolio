import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHomeViewport, setIsInHomeViewport] = useState(true);

  const navBarHeight = 100;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsInHomeViewport(rect.top <= 0 && rect.bottom >= navBarHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed w-full flex justify-between font-medium items-center p-3 z-50 transition-all duration-300 ${isInHomeViewport ? 'bg-transparent' : 'bg-gray-100'}`} 
           style={{ background: isInHomeViewport ? 'transparent' : '#F3F4F6' }}>
        <div className="text-sm align-middle relative">
          <Link to="home" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`uppercase cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
            Samir Ahmed
          </Link>
        </div>
        <div className="block md:hidden relative z-50">
          <button onClick={toggleMobileMenu} className={`text-xl align-middle ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
            <RiMenu3Fill />
          </button>
        </div>
        <ul className="hidden md:flex relative z-40">
        <li className="ml-8">
            <Link to="about" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              About
            </Link>
          </li>
          <li className="ml-8">
            <Link to="research" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              Research
            </Link>
          </li>
          <li className="ml-8">
            <Link to="experience" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              Experience
            </Link>
          </li>
          <li className="ml-8">
            <Link to="projects" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              Projects
            </Link>
          </li>
          {/* <li className="ml-8">
            <Link to="projects" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              Blog
            </Link>
          </li> */}
          <li className="ml-8">
            <a href="mailto:ahmed1@usf.edu" target="_blank" rel="noopener noreferrer" className={`text-sm uppercase relative cursor-pointer ${isInHomeViewport ? 'text-gray-100' : 'text-black'}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className={`fixed top-0 right-0 h-full w-full bg-gray-100 p-8 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <button onClick={toggleMobileMenu} className="absolute top-6 right-4 text-xl">
          <RiCloseLine />
        </button>
        <ul className="flex flex-col items-start mt-12">
        <li className="mb-12">
            <Link to="about" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className="uppercase text-2xl" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li className="mb-12">
            <Link to="research" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className="uppercase text-2xl" onClick={toggleMobileMenu}>
              Research
            </Link>
          </li>
          <li className="mb-12">
            <Link to="experience" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className="uppercase text-2xl" onClick={toggleMobileMenu}>
              Experience
            </Link>
          </li>
          <li className="mb-12">
            <Link to="projects" smooth={true} duration={500} hashSpy={true} offset={-navBarHeight} className="uppercase text-2xl" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="mb-12">
            <a href="mailto:ahmed1@usf.edu" target="_blank" rel="noopener noreferrer" className="uppercase text-2xl" onClick={toggleMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
