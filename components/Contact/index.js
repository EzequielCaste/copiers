import React, {useState} from 'react';
import Swal from 'sweetalert2';
import {useForm} from '../../hooks/useForm';

const Contact = () => {
  const [sending, setSending] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    mensaje: '',
  });
  const {email, mensaje} = formValues;
  const inputStyle =
    'bg-gray-100 mb-4 w-full p-1.5 border-2 border-black rounded';
  const labelStyle = 'mb-4';

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await fetch(process.env.NEXT_PUBLIC_API_ROUTE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, mensaje}),
      }).then(({ok}) => {
        setSending(false);
        ok
          ? Swal.fire(
              'Gracias!',
              'El mensaje fue enviado correctamente!',
              'success'
            )
          : Swal.fire('Error', 'Error al enviar mensaje.', 'error');
      });
    } catch (error) {
      setSending(false);
      Swal.fire('Error', 'Error al enviar mensaje.', 'error');
    }
  };
  return (
    <div
      id="contacto"
      className="rounded bg-gray-300 sm:w-9/12 mx-auto p-5 sm:p-10 sm:text-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl font-bold">Contactenos</h2>
        <p className="py-4">
          Contáctese con nosotros para que podamos asesorarlo de acuerdo a sus
          necesidades.
        </p>
        <label className={labelStyle}>Email</label>
        <div className="w-4/5">
          <input
            autoComplete={'off'}
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
            autoComplete={'off'}
            rows={8}
            required={true}
            onChange={handleInputChange}
            value={mensaje}
            name="mensaje"
            className={inputStyle}
            placeholder="Escriba su mensaje aquí"
          ></textarea>
        </div>
        <button
          disabled={sending}
          className="contact-send py-2 px-4 border-2 border-black rounded-md transition duration-300 ease-in-out cursor-pointer"
        >
          {sending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
