import React from 'react';
import Link from 'next/link';
import {useState} from 'react';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const linkStyle = 'p-4 transition duration-300 ease-in-out cursor-pointer';
  return (
    <header
      id="home"
      className="px-4 flex justify-between items-center shadow-lg w-full bg-white h-auto"
    >
      <img className="h-14" src="images/AO Copiers_cr.png" alt="AO Copiers" />
      {/* 605353 ffb000  */}
      {/* responsive Menu */}
      <nav className="nav-links hidden sm:flex list-none w-auto mx-4 space-x-10 uppercase">        
        <li className={`${linkStyle} w-max`}>
          <Link href="#servicios">Nuestros Servicios</Link>
        </li>
        <li className={linkStyle}>
          <a href="#contacto">Contacto</a>
        </li>
      </nav>
      {/* hamburger Menu */}
      <nav className="flex list-none w-auto mx-4">
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md  text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {menu && (
          <div className="absolute z-10 top-14 inset-x-1/2 bg-gray-700 transform -translate-x-2/4 p-2 py-20 text-center text-xl w-full">
            <nav className="sm:flex list-none space-y-2 uppercase text-white">              
              <li onClick={toggleMenu}>
                <Link href="#servicios">Nuestros Servicios</Link>
              </li>
              <li onClick={toggleMenu}>
                <a href="#contacto">Contacto</a>
              </li>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
