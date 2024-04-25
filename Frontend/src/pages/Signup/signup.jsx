import React, { useState } from 'react';
import logox from './logox.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    username: '',
    email: '',
    password: ''
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginAfterSignUp = async () => {
    try {
      const response = await axios.post('https://fofo.kitsuneshin.com/api/auth/login', {
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('token', response.data.token);
      console.log('Inicio de sesión exitoso:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión después del registro:', error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fofo.kitsuneshin.com/api/auth/signup', formData);
      setSuccessMessage('Usuario registrado exitosamente');
      setAlertMessage('');
      console.log('Usuario registrado exitosamente:', response.data);
      await handleLoginAfterSignUp(); // Realizar inicio de sesión después del registro
    } catch (error) {
      if (error.response.status === 400) {
        setAlertMessage('El correo electrónico o el nombre de usuario ya están en uso');
      } else {
        setAlertMessage('Ha ocurrido un error durante el registro');
      }
      console.error('Error al registrar usuario:', error.response.data);
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <img
        src={logox}
        alt="Imagen de fondo"
        className="mb-8 max-w-full max-h-48"
      />
      {/* Alertas */}
      {alertMessage && <div className="bg-red-200 text-red-700 p-2 mb-4">{alertMessage}</div>}
      {successMessage && <div className="bg-green-200 text-green-700 p-2 mb-4">{successMessage}</div>}

      {/* Formulario para crear una nueva cuenta */}
      <h2 className="text-3xl font-semibold text-white mt-8 mb-6">Crear nueva cuenta</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="firstName">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              type="text"
              id="firstName"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="lastName">
              Apellido
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="age">
            Edad
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
            type="number"
            id="age"
            name="age"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-600 text-white"
            type="text"
            id="username"
            name="username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
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
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-400 mt-4"
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
      <Link to="/login" className="text-white mt-4">
        ¿Ya tienes una cuenta? Haz clic aquí para Iniciar Sesión
      </Link>
    </div>
  );
}

export default SignUp;
