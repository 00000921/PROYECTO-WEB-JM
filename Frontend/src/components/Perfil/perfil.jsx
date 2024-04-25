import React, { useState } from 'react';
import logox from './logox.png';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    username: '',
    email: ''
  });

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.get('https://fofo.kitsuneshin.com/api/auth/65694064b6feb32f322a2eb6');
      setUser(userResponse.data);
      setIsDetailsVisible(true);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    console.log('Create account:', user);
  };

  const handleToggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <img
        src={logox}
        alt="Background Image"
        className="mb-8 max-w-full max-h-48"
      />
      <div className="bg-gray-800 p-8 rounded-md w-96">
        {/* Pantalla de perfil */}
        <div className="mt-8">
          <form onSubmit={handleLoginSubmit}>
            {/* ... campos de inicio de sesión y creación de cuenta */}
          </form>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-400"
            onClick={handleToggleDetails}
          >
            {isDetailsVisible ? 'Ocultar detalles de la cuenta' : 'Ver detalles de la cuenta'}
          </button>
          {isDetailsVisible && (
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Detalles de la cuenta:</h3>
              <p>Nombre: {user.firstName}</p>
              <p>Apellido: {user.lastName}</p>
              <p>Edad: {user.age}</p>
              <p>Nombre de usuario: {user.username}</p>
              <p>Correo electrónico: {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
