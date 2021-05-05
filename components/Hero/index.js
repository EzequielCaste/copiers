import React from 'react';

const Hero = () => {
  const btnClass =
    'px-8 mr-1 text-2xl hover:text-gray-200 rounded bg-green-500 cursor-pointer text-white p-2';
  return (
    <section id="main" className="shadow-lg">
      <div className="overlay">
        <div className="sm:text-2xl space-y-4 inner p-2.5 sm:p-16">
          <h1 className="font-bold text-4xl sm:text-7xl">AO Copiers</h1>
          <h2 className="mt-4">Alquiler y Venta de Equipos de Impresion</h2>
          {/* <h2 className="sm:text-lg">
            <i className="fab fa-whatsapp"></i> +54 9 3874 56-5222
          </h2>
          <h2 className="sm:text-lg">
            <i className="far fa-envelope"></i> ao_copiers@yahoo.com.ar
          </h2> */}
          <div className="my-5 mx-auto sm:mx-0 sm:items-center sm:justify-center">
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
          <h2 className="sm:text-lg">
            <i className="fab fa-whatsapp"></i> +54 9 3874 56-5222
          </h2>
          <h2 className="sm:text-lg">
            <i className="far fa-envelope"></i> ao_copiers@yahoo.com.ar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
