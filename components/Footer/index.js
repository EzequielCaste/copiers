import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-around text-sm mt-1 pt-5 ">
      <div className="">
        <strong>AO Copiers</strong>
        <ul>
          <li>Inicio</li>
          <li>Sobre Nosotros</li>
          <li>Servicios</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <strong>Contacto</strong>
        <ul className="space-y-1">
          <li>
            <i className="far fa-envelope"></i> ao_copiers@yahoo.com.ar
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> Dirección 945, Salta
          </li>
          <li>
            <i className="fas fa-phone-alt"></i> +54 387 456 9187
          </li>
          <li>
            <i className="fab fa-whatsapp"></i> +549 387 4565 222
          </li>
          <li>
            <i className="fab fa-facebook"></i> facebook
          </li>
          <li>
            <i className="fab fa-instagram"></i> instagram
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>Aquí podría ir un mapa con la ubicación</li>
          <li>Información Fiscal</li>
          <li>
            Nuestro horario de atención es de Lunes a Viernes de 8 a 13 y de 17
            a 20; y los sábados de 9 a 13.
          </li>
          <li>Domingos y feriados cerrado.</li>
          <li>Volver al inicio</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
