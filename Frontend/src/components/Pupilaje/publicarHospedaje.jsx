import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
    location: '',
    email: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fofo.kitsuneshin.com/api/hospedaje/create', formData);
      console.log('Publicación de hospedaje creada:', response.data);
      setFormData({
        title: '',
        price: '',
        image: '',
        description: '',
        location: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('No se pudo publicar el hospedaje por un error desconocido.');
    }
  };

  return (
    <div className="bg-111A2B text-black min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl p-9">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Título"
            className="rounded-md py-2 px-4 w-full"
            type="text"
            id="title"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <input
            placeholder="Precio"
            className="rounded-md py-2 px-4 w-full"
            type="Number"
            id="price"
            name="price"
            required
            onChange={handleChange}
            value={formData.price}
          />
          <input
            placeholder="Link de Imagen"
            className="rounded-md py-2 px-4 w-full"
            type="text"
            id="image"
            name="image"
            required
            onChange={handleChange}
            value={formData.image}
          />
          <textarea
            placeholder="Descripción"
            className="rounded-md py-2 px-4 w-full h-32"
            id="description"
            name="description"
            required
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <input
            placeholder="Ubicación"
            className="rounded-md py-2 px-4 w-full"
            type="text"
            id="location"
            name="location"
            required
            onChange={handleChange}
            value={formData.location}
          />
          <p className='text-white'>Informacion de contacto:</p>
          <input
            placeholder="Correo electrónico"
            className="rounded-md py-2 px-4 w-full"
            type="text"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            placeholder="Número de teléfono"
            className="rounded-md py-2 px-4 w-full"
            type="text"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
            value={formData.phone}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full"
          >
            Publicar
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default CreatePost;
