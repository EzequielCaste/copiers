import React from 'react';

const Hero = () => {
  return (
    <section id="main" className="shadow-lg">
      <div className="overlay">
        <div className="text-2xl inner p-16">
          <h1 className="font-bold text-4xl sm:text-7xl">AO Copiers</h1>
          <h2 className="mt-4">Alquiler y Venta de Equipos de Impresión</h2>
          <h2 className="text-lg">
            <i className="fab fa-whatsapp"></i> +54 9 3874 56-5222
          </h2>
          <h2 className="text-lg">
            <i className="far fa-envelope"></i> ao_copiers@yahoo.com.ar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
