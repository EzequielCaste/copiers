import React from 'react';

const Showcase = () => {
  const myVideo = {
    right: 0,
    bottom: 0,
    minWidth: '80%',
    minHeight: '70%',
    padding: '1rem 0',
  };

  return (
    <div className="relative w-10/12 mx-auto p-10">
      <h2 className="text-4xl font-bold text-center">Producto Destacado</h2>
      <video autoPlay muted loop id="myVideo" style={myVideo}>
        <source src="/images/video_1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Showcase;
