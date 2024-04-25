// App.js

import React from 'react';

const commentsData = [
  {
    id: 1,
    question: '¿Cómo puedo crear una cuenta en la plataforma?',
    answer: 'Para crear una cuenta, haz clic en el botón "Registrarse" en la página de inicio y sigue los pasos para proporcionar tu información personal y credenciales de inicio de sesión.',
  },
  {
    id: 2,
    question: '¿Cómo puedo publicar un anuncio de alojamiento?',
    answer: 'Inicia sesión en tu cuenta, luego ve a la sección "Publicar Alojamiento" y completa los detalles de tu alojamiento, incluyendo imágenes y tarifas.',
  },
  {
    id: 2,
    question: '¿Cuál es la mejor manera de prepararse para una entrevista técnica?',
    answer: 'Para prepararte para una entrevista técnica, practica algorítmica y resuelve problemas comunes de entrevistas. Investiga sobre la empresa y revisa preguntas frecuentes de entrevistas técnicas.',
  },
  {
    id: 1,
    question: '¿Cómo puedo ponerme en contacto con el proveedor de alojamiento?',
    answer: 'En la página de Sobre nosotros, encontrarás la opción de contactos con el administrador.',
  },
  {
    id: 2,
    question: '¿Cómo puedo unirme a la comunidad y compartir consejos?',
    answer: 'Después de iniciar sesión, ve a la sección "Foro de discusion" donde puedes publicar consejos, historias y experiencias para ayudar a otros usuarios. ¡Es una forma de contribuir y conectarte!',
  },
  // Puedes agregar más comentarios según sea necesario
];

const CommentCard = ({ id, question, answer }) => (
  <div>
    <div className="mb-2">
      <p className="text-xl font-bold">{question}</p>
    </div>

    <div className="bg-333C4E bg-opacity-80 rounded-lg mb-2  max-w-2xl p-9"> {/* Añadida max-w-md */}
      <div>
        <p className="text-lg">{answer}</p>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="bg-111A2B text-white min-h-screen flex items-center justify-center"> 
    <div className="mx-auto max-w-2xl p-9"> {/* Cambiado de container a mx-auto max-w-2xl */}
      <h2 className="text-4xl font-bold mb-8">Preguntas frecuentes</h2>
      {commentsData.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  </div>
);

export default App;