import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const linkStyle = 'p-1 transition duration-300 ease-in-out cursor-pointer';
  const title = 'text-base sm:text-2xl';
  return (
    <>
      <footer className="flex flex-col sm:flex-row bg-gray-800 text-gray-50 shadow-2xl items-start justify-around text-sm sm:text-md sm:mt-20 p-8 sm:py-16 ">
        <div className="footer-links">
          <h3 className={title}>AO Copiers</h3>
          <ul>
            <li className={linkStyle}>
              <Link href="/#home">Inicio</Link>
            </li>
            <li className={linkStyle}>
              <Link href="#servicios">Nuestros Servicios</Link>
            </li>
            <li className={linkStyle}>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className={title}>Contacto</h3>
          <ul className="space-y-2 mt-1.5 sm:mt-0">
            <li className="cursor-pointer ">
              <a href="mailto:ao_copiers@yahoo.com.ar">
                <span>
                  <i className="far fa-envelope"></i> ao_copiers@yahoo.com.ar
                </span>
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 12 de Octubre 351, Salta
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> +54 387 456 9187
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/543874565222?text=Hola, te escribo desde https://www.AOcopiers.com.ar . Me gustaria obtener más información."
              >
                <span>
                  <i className="fab fa-whatsapp"></i> +54 387 456 5222
                </span>
              </a>
            </li>
            {/* <li>
              <i className="fab fa-facebook"></i> facebook
            </li>
            <li>
              <i className="fab fa-instagram"></i> instagram
            </li> */}
          </ul>
        </div>
        <div className="">
          <h3 className={title}>Nuestro horario de atención</h3>
          <ul className="space-y-2 mt-1.5 sm:mt-0 text-gray-50">
            <li>Lunes a Viernes de 8 a 13 y de 17 a 20</li>
            <li>Sábados de 9 a 13</li>
            <li>Domingos y feriados cerrado.</li>
          </ul>
        </div>
        <div className="mx-auto mt-5 sm:mt-0 sm:mx-0 cursor-pointer p-2 w-max rounded-xl font-semibold ">
          <Link href="/#home">
            <i
              title="Volver al Inicio"
              className="border-white transform hover:scale-105 text-5xl fas fa-arrow-circle-up"
            ></i>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
