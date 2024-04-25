import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

const HospedajesList = () => {
  const [hospedajes, setHospedajes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fofo.kitsuneshin.com/api/hospedaje'); // Reemplaza con tu URL para obtener hospedajes
      setHospedajes(response.data);
    } catch (error) {
      setError('No se pudieron obtener los hospedajes');
    }
  };

  return (
    <div className="bg-111A2B text-white min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto max-w-2xl p-9">
        <h1 className="text-4xl font-bold mb-8">Hospedajes Disponibles</h1>
        {error && <p>{error}</p>}
        {hospedajes.map((hospedaje) => (
          <div key={hospedaje._id} className="mb-4 border rounded-lg p-4">
            <h2 className="text-2xl font-bold">{hospedaje.title}</h2>
            <p className="text-lg">${hospedaje.price} mensuales</p>
            <img src={hospedaje.image} alt="Imagen del pupilaje"></img>
            <p className="text-lg">{hospedaje.description}</p>
            <p className="text-lg">{hospedaje.location}</p>
            <p><br /></p>
            <p>Metodos de contacto:</p>
            <p className="text-lg">Correo electronico: {hospedaje.email}</p>
            <p className="text-lg">Numero de telefono: {hospedaje.phone}</p>
            {/* Agrega más detalles del hospedaje si es necesario */}
          </div>
        ))}
        <Link to="/publicar" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-4">
          Crear Hospedaje
        </Link>
      </div>
    </div>
  );
};

export default HospedajesList;
