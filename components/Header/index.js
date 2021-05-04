import React from 'react';
import Link from 'next/link';
import {useState} from 'react';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const btnClass =
    'px-3 mr-1 text-2xl hover:text-gray-200 rounded bg-green-500 cursor-pointer text-white p-2';
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
        <li className={linkStyle}>
          <Link href="/#home">Inicio</Link>
        </li>
        <li className={linkStyle}>
          <Link href="#servicios">Nuestros Servicios</Link>
        </li>
        <li className={linkStyle}>
          <a href="#contacto">Contacto</a>
        </li>
      </nav>
      {/* hamburger Menu */}
      <nav className="flex list-none w-auto mx-4 space-x-2">
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        {menu && <div>hidden menu</div>}
      </nav>
      <div className="">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/543874565222?text=Hola, te escribo desde https://www.AOcopiers.com.ar . Me gustaria obtener más información."
          className={btnClass}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:ao_copiers@yahoo.com.ar"
          className={`${btnClass} bg-blue-500`}
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
