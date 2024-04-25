import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentCard = ({ id, title, content, handleComment }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://fofo.kitsuneshin.com/api/forum/posts/${id}/comments`, { text: comment });
      fetchDataForComments();
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataForComments = async () => {
    try {
      const response = await axios.get(`https://fofo.kitsuneshin.com/api/forum/posts/${id}`);
      setComments(response.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataForComments();
  }, []);

  return (
    <div className="bg-333C4E bg-opacity-80 rounded-lg mb-6 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>

      <form onSubmit={handleCommentSubmit} className="mb-4">
        <input
          placeholder="Escribe tu comentario"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Comentar
        </button>
      </form>

      <div>
        <h3 className="text-lg font-bold mb-2">Comentarios</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-300 text-black rounded-lg p-2 mb-2">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '', author: 'default author' });
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    try {
      const fetchedPosts = await axios.get('https://fofo.kitsuneshin.com/api/forum/posts');
      const reverseFetchedPosts = fetchedPosts.data.reverse();
      setPosts(reverseFetchedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fofo.kitsuneshin.com/api/forum/posts', formData);
      fetchData();
      setFormData({ ...formData, title: '', content: '' });
    } catch (error) {
      console.error(error);
      setErrorMessage('No se pudo publicar el post por un error desconocido.');
    }
  };

  const handleClearPosts = () => {
    setPosts([]);
  };

  return (
    <div className="bg-111A2B text-white min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl p-9">
        <h>Realizar una publicación</h>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Escribir título"
            className="text-black rounded-md py-2 px-4 w-full"
            type="text"
            id="title"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <input
            placeholder="Escribir publicación"
            className="text-black rounded-md py-2 px-4 w-full"
            type="text"
            id="content"
            name="content"
            required
            onChange={handleChange}
            value={formData.content}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Publicar
          </button>
        </form>
        <h2 className="text-4xl font-bold mt-8 mb-4">Publicaciones recientes</h2>
        {posts.map((post) => (
          <CommentCard key={post._id} id={post._id} title={post.title} content={post.content} />
        ))}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default App;
