import React from 'react';

const Servicios = () => {
  const cardStyle =
    'bg-gray-50 text-lg p-5 rounded-md w-3/12 font-medium shadow-md ';
  return (
    <div id="servicios" className="bg-gray-100 p-10 text-center">
      <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
      <div className="flex justify-evenly my-10">
        <div className={cardStyle}>
          <h3 className="font-bold text-2xl">Alquiler</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae dolorum, repellendus esse recusandae error est.
          </p>
        </div>
        <div className={cardStyle}>
          <h3 className="font-bold text-2xl">Venta</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae dolorum, repellendus esse recusandae error est.
          </p>
        </div>
        <div className={cardStyle}>
          <h3 className="font-bold text-2xl">Insumos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae dolorum, repellendus esse recusandae error est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
