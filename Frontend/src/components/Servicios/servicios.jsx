import React from 'react';
import ForoDeDiscusion from './ForoDeDiscusion.png';
import Puppilajes from './Puppilajes.jpg';
import finanza from './finanza.jpg';
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Foro de discusion', href: '/foro' },
  { name: 'Pupilajes', href: '/hospedaje' },
  { name: 'Finanzas', href: '/finanzas' },
];

const cardsData = [
  {
    id: 1,
    topic: 'Foro de discusión',
    src: ForoDeDiscusion,
    description: 'Espacio donde podrás interactuar, hacer preguntas, compartir consejos y experiencias relacionadas con la vida universitaria y la adaptación a un nuevo entorno.',
    link: '/foro',
  },

  {
    id: 2,
    topic: 'Publicación de pupilajes',
    src: Puppilajes,
    description: 'Permite a los proveedores de alojamiento, como casas de familia, apartamentos o residencias estudiantiles, publicar sus lugares en la plataforma para atraer a estudiantes que buscan alojamiento.',
    link: '/hospedaje',
  },
/*
  {
    id: 3,
    topic: 'Finanzas',
    src: finanza,
    description: 'Lleva un control de los gastos, establecer presupuestos y recibe consejos sobre cómo administrar tu dinero de manera efectiva mientras estudias lejos de casa.',
    link: '/finanzas',
  },*/
  
];

const Card = ({ id, topic, src, description, link }) => (
  <div className="max-w-screen-xl mx-auto p-4">
    <div className={`bg-white rounded-lg overflow-hidden shadow-md p-4 mb-4 md:flex ${id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      <img
        src={src}
        alt={`Card ${id}`}
        className={`md:w-1/4 h-auto md:mr-4 mb-4 md:mb-0 ${id === 2 ? 'md:ml-4' : ''}`}
      />
      <div className="md:w-2/3 flex flex-col justify-center">
        <p className="text-3xl font-bold text-center mt-8 mb-4">{topic}</p>
        <p className="text-lg text-gray-700 mb-4 text-justify">{description}</p>
        <div className="flex justify-center">
          <Link to={link}>
            <button className="bg-111A2B text-white px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-200 ease-in-out hover:text-black">
              Explorar
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const CardPage = () => (
  <div>
    <h1 className="text-4xl font-bold text-center mt-8 mb-4">¿CUÁLES SON NUESTROS SERVICIOS?</h1>
    {cardsData.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default CardPage;