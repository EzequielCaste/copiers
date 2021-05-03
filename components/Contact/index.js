import React from 'react';
import {useForm} from '../../hooks/useForm';

const Contact = () => {
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    mensaje: '',
  });
  const {email, mensaje} = formValues;
  const inputStyle =
    'bg-gray-100 mb-4 w-full p-1.5 border-2 border-black rounded';
  const labelStyle = 'mb-4';
  return (
    <div id="contacto" className="w-9/12 mx-auto p-10 text-lg">
      <form action="#" className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Contactenos</h2>
        <p className="py-4">
          Contáctese con nosotros para que podamos asesorarlo de acuerdo a sus
          necesidades.
        </p>
        <label className={labelStyle}>Email</label>
        <div className="w-2/5">
          <input
            required={true}
            onChange={handleInputChange}
            value={email}
            name="email"
            className={inputStyle}
            type="email"
            placeholder="Su correo electrónico"
          />
        </div>
        <label className={labelStyle}>Message</label>
        <div className="w-4/5">
          <textarea
            rows={10}
            required={true}
            onChange={handleInputChange}
            value={mensaje}
            name="mensaje"
            className={inputStyle}
            placeholder="Escriba su mensaje aquí"
          ></textarea>
        </div>
        <button className="contact-send py-2 px-4 border-2 border-black rounded-md transition duration-300 ease-in-out cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
