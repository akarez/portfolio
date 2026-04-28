import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { label: 'Research', to: '/research' },
  { label: 'Canvas', to: '/canvas' },
  { label: 'Blog', to: '/blog' },
];

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const textColor = isHome ? 'text-gray-100' : 'text-black dark:text-white';
  const bg = isHome ? 'bg-transparent' : 'bg-white dark:bg-black';

  return (
    <>
      <div className={`fixed w-full flex justify-between items-center z-50 transition-all duration-300 p-2 px-4 ${bg}`}>
        <Link to="/" className={`text-sm uppercase ${textColor}`}>
          Samir Ahmed
        </Link>

        <button
          onClick={() => setMenuOpen(v => !v)}
          className={`block md:hidden text-xl ${textColor}`}
          aria-label="Open menu"
        >
          <RiMenu3Fill />
        </button>

        <ul className="hidden md:flex items-center">
          {navLinks.map(({ label, to }) => (
            <li className="ml-8" key={to}>
              <Link to={to} className={`text-sm uppercase ${textColor}`}>
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-8">
            <a href="mailto:mail@akarez.com" className={`text-sm uppercase ${textColor}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-black p-8 transition-transform duration-500 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-4 text-xl dark:text-white"
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>
        <ul className="flex flex-col items-start mt-12">
          {navLinks.map(({ label, to }) => (
            <li className="mb-12" key={to}>
              <Link
                to={to}
                className="uppercase text-2xl dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mb-12">
            <a
              href="mailto:mail@akarez.com"
              className="uppercase text-2xl dark:text-white"
              onClick={() => setMenuOpen(false)}
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
