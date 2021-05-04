import React from 'react';

const Servicios = () => {
  const cardStyle =
    'card bg-gray-50 text-md p-5 rounded-md w-4/12 font-medium shadow-md ';
  const titleStyle = 'font-bold text-2xl my-2';

  return (
    <div id="servicios" className="h-screen bg-gray-100 p-10 text-center">
      <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
      <div className="flex justify-evenly my-10 gap-x-6 mx-auto">
        <div className={cardStyle}>
          <h3 className={titleStyle}>Alquiler</h3>
          <ul className="text-left">
            <li>
              <i className="fas fa-check"></i> Fotocopiadoras
            </li>
            <li>
              <i className="fas fa-check"></i> Impresoras Multifunción
            </li>
            <li>
              <i className="fas fa-check"></i> Servicio Técnico
            </li>
            <li>
              <i className="fas fa-check"></i> Mantenimiento
            </li>
          </ul>
          {/* <p className="text-left">
            Contamos con equipos digitales multifunción de última tecnología,
            optimizando los recusrsos de su empresa. Además para reducir riesgos
            sólo Alquilamos Fotocopiadoras nuevas. Alquiler de fotocopiadoras a
            empresas y particulares: Analizamos las necesidades de cada cliente
            conformando una alianza estratégica para lograr el menor costo por
            copia o impresion con nuestros equipos. En el caso de que hubiera
            algun inconveniente nuestro servicio técnico y reparación es en el
            dia (especificado por contrato). De esta forma le garantizamos a
            nuestros clientes que ante cualquier eventualidad el tiempo que el
            equipo no funcione será el mínimo.
          </p> */}
        </div>
        <div className={cardStyle}>
          <h3 className={titleStyle}>Venta</h3>
          <p className="text-left">
            Ofrecemos una variada gama de productos y servicios para dar
            soluciones integrales en impresión y reproducción de documentos.
            Crecimos tanto en el sector de venta como de alquiler de maquinas a
            particulares, empresas y organismos públicos. Instalamos y atendemos
            centros de copiado en universidades. Siempre estamos capacitándonos
            para brindar una respuesta seria y confiable a todas las demandas de
            nuestra amplia cartera de clientes, que permanentemente va
            aumentando.
          </p>
        </div>
        <div className={cardStyle}>
          <h3 className={titleStyle}>Insumos</h3>
          <p className="text-left">
            Consúltenos por la provisión de repuestos o service para sus
            fotocopiadoras, impresoras y equipamiento de copiado y duplicación
            RICOH. Contamos con un amplio surtido de repuestos para ofrecerle el
            mejor servicio de reparación con garantía.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
