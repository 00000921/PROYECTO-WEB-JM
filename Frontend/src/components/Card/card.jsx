import React from 'react';
import fondo from './fondo.png';
import mago from './mago.png';

const App = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="md:w-1/2 p-4 text-white text-center md:mt-[-15rem] md:text-left md:order-first"> 
        <h1 className="text-4xl md:text-7xl font-bold mb-2 md:text-center">BIENVENIDO A LA COMUNIDAD DE FORANEOS UCA</h1>
        <p className="mt-2">Descubre la plataforma hecha por y para estudiantes UCA en la cual se te facilitará la experiencia universitaria como foráneo.</p>
      </div>
      <div className="md:w-1/3 p-4 mt-4 md:mt-0 md:order-last"> 
        <img
          src={mago}
          alt="Imagen de entrada"
          className="w-full h-auto md:max-w-xl mx-auto"
          style={{ marginBottom: '15rem' }}
        />
      </div>
    </div>
  );
};

export default App;