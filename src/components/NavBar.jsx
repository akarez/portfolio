import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

function NavBar() {
  const { pathname } = useLocation();
  const isBlogPage = pathname.startsWith('/blog/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHomeViewport, setIsInHomeViewport] = useState(true);

  const navBarHeight = 100;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToId = useCallback(
    (id) => {
      const scroller = document.querySelector('#snap-scroller');
      const el = document.getElementById(id);
      if (!scroller || !el) return;

      const y = el.offsetTop - navBarHeight;

      scroller.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    },
    [navBarHeight]
  );

  useEffect(() => {
    if (isBlogPage) return;

    const scroller = document.querySelector('#snap-scroller');
    if (!scroller) return;

    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;

      const rect = homeSection.getBoundingClientRect();

      setIsInHomeViewport(rect.top <= navBarHeight && rect.bottom >= navBarHeight);
    };

    handleScroll();

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, [isBlogPage, navBarHeight]);

  useEffect(() => {
    if (isBlogPage) return;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMobileMenuOpen, isBlogPage]);

  if (isBlogPage) return null;

  const sections = ['experience', 'research', 'blog'];

  return (
    <>
      <div
        className={`fixed w-full flex justify-between font-medium items-center p-6 z-50 transition-all duration-300 ${
          isInHomeViewport ? 'bg-transparent' : 'bg-white'
        }`}
        style={{ background: isInHomeViewport ? 'transparent' : '#FFFFFF' }}
      >
        <div className="text-sm align-middle relative">
          <button
            onClick={() => scrollToId('home')}
            className={`uppercase cursor-pointer ${
              isInHomeViewport ? 'text-gray-100' : 'text-black'
            }`}
          >
            Samir Ahmed
          </button>
        </div>

        <div className="block md:hidden relative z-50">
          <button
            onClick={toggleMobileMenu}
            className={`text-xl align-middle ${
              isInHomeViewport ? 'text-gray-100' : 'text-black'
            }`}
            aria-label="Open menu"
          >
            <RiMenu3Fill />
          </button>
        </div>

        <ul className="hidden md:flex relative z-40">
          {sections.map((section) => (
            <li className="ml-8" key={section}>
              <button
                onClick={() => scrollToId(section)}
                className={`text-sm uppercase relative cursor-pointer ${
                  isInHomeViewport ? 'text-gray-100' : 'text-black'
                }`}
              >
                {section}
              </button>
            </li>
          ))}

          <li className="ml-8">
            <a
              href="mailto:ahmed1@usf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm uppercase relative cursor-pointer ${
                isInHomeViewport ? 'text-gray-100' : 'text-black'
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white p-8 transition-transform duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-4 text-xl"
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>

        <ul className="flex flex-col items-start mt-12">
          {sections.map((section) => (
            <li className="mb-12" key={section}>
              <button
                className="uppercase text-2xl"
                onClick={() => {
                  scrollToId(section);
                  closeMobileMenu();
                }}
              >
                {section}
              </button>
            </li>
          ))}

          <li className="mb-12">
            <a
              href="mailto:ahmed1@usf.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-2xl"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;