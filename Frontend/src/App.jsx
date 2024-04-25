import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import Adicionales from './pages/Adicionales/adicionales';
import Finanzas from './pages/Finanzas/finanzas';
import Foro from './pages/Foro/foro';
import Hospedaje from './pages/Hospedaje/hospedaje';
import Publicar from './pages/Hospedaje/publicarHospedaje';
import Pages from './pages/Pages/pages';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Info from './pages/Info/info';
import Preguntas from './pages/Preguntas/Preguntas';

import AuthService from './components/Auth/AuthService';

const Logout = () => {
  localStorage.removeItem("token");

  return (
    <Navigate to="/login" />
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Redirección a la página de inicio de sesión si no ha iniciado sesión */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<AuthService />}>

            {/* Página de inicio */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            {/* Resto de las rutas */}
            <Route path="/adicionales" element={<Adicionales />} />
            <Route path="/finanzas" element={<Finanzas />} />
            <Route path="/foro" element={<Foro />} />
            <Route path="/hospedaje" element={<Hospedaje />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/publicar" element={<Publicar />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/info" element={<Info />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
