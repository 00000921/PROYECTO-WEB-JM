// src/App.js
import React from 'react';
import foto from './foto.png';
import foto3 from './foto3.png';
import foto4 from './foto4.png';


const cardData = [
  {
    id: 1,
    src: foto,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    src: foto4,
    text: 'Otra tarjeta con un texto diferente.',
  },
  {
    id: 3,
    src: foto4,
    text: '¡Añade tantas tarjetas como desees!',
  },
  // Nuevas tarjetas
  {
    id: 4,
    src: foto,
    text: 'Texto de la cuarta tarjeta.',
  },
  {
    id: 5,
    src: foto3,
    text: 'Texto de la quinta tarjeta.',
  },
  {
    id: 6,
    src: foto,
    text: 'Texto de la sexta tarjeta.',
  },
  {
    id:7,
    src: foto,
    text: 'Texto de la quinta tarjeta.',
  },
  {
    id: 8,
    src: foto4,
    text: 'Texto de la sexta tarjeta.',
  },
];

const App = () => {
  return (
    <div className="bg-111A2B min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card) => (
          <Card key={card.id} src={card.src} text={card.text} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ src, text }) => {
  return (
    <div className="bg-white p-4 rounded-lg w-48 sm:w-64 h-72 sm:h-96 flex flex-col justify-between">
      <img
        src={src}  // Utiliza src en lugar de imageUrl
        alt="Imagen"
        className="w-full h-32 sm:h-48 object-cover mb-4 rounded"
      />
      <p className="text-gray-700 mb-4 overflow-hidden h-16 sm:h-24">
        {text}
      </p>
      <button className="bg-gray-500 text-white px-4 py-2 rounded self-center">Ver más</button>
    </div>
  );
};

export default App;
