import React, { useState } from 'react';
import logox from './logox.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fofo.kitsuneshin.com/api/auth/login', formData);
      localStorage.setItem("token", response.data.token)  // Guardar el token en localStorage para furutas peticiones
      console.log('Inicio de sesión exitoso:', response.data);
      navigate("/home")
      // Aquí podrías redirigir al usuario a la página principal u otra página si lo deseas
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setErrorMessage('Credenciales inválidas. Verifica tu correo electrónico y contraseña.');
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <img
        src={logox}
        alt="Imagen de fondo"
        className="mb-8 max-w-full max-h-24"
      />
      <div className="bg-gray-800 p-8 rounded-md w-96">
        <h2 className="text-3xl font-semibold text-white mb-6">Login</h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-400"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        <Link to="/signup">
          <div className="mt-4 text-white">
            ¿No tienes una cuenta? <a href="#" className="underline">Crear cuenta</a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
