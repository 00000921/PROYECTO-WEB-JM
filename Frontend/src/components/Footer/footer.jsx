// Footer.js

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';



const Footer = () => {
  return (
    <footer className="bg-111A2B text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4 space-x-4">
          {/* Asegúrate de incluir la clase text-white para que los íconos sean blancos */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl text-white"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl text-white"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-white"></i>
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} FOFO | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
