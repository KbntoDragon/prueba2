import React, { useState } from 'react';
import Navbar from './components/organisms/Navbar.jsx';
import Footer from './components/organisms/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import CarritoPage from './pages/CarritoPage.jsx';
import PagoResultadoPage from './pages/PagoResultadoPage.jsx';
import OfertasPage from './pages/OfertasPage.jsx';

import missImg from './assets/miss.webp';
import settImg from './assets/sett.webp';
import reksaiImg from './assets/reksai.webp';

export default function App() {
  const [vistaActual, setVistaActual] = useState('catalogo');

  const campeones = [
    {
      id: 1,
      nombre: 'Miss Fortune',
      desc: 'Cazarrecompensas de Aguas Estancadas.',
      precio: 5000,
      img: missImg,
      instagram: '@missfortune_official',
      funFacts: [
        { label: 'Rol', val: 'Tiradora / ADC' },
        { label: 'Lugar', val: 'Aguas Estancadas' },
        { label: 'Gusto', val: 'Las pistolas y las aventuras en el mar' }
      ]
    },
    {
      id: 2,
      nombre: 'Sett',
      desc: 'Lider de los fosos de pelea en Jonia.',
      precio: 8000,
      img: settImg,
      instagram: '@sett_el_jefe',
      funFacts: [
        { label: 'Rol', val: 'Luchador / Tanque' },
        { label: 'Lugar', val: 'Jonia' },
        { label: 'Gusto', val: 'Su mama y las peleas de foso' }
      ]
    },
    {
      id: 3,
      nombre: "Rek'Sai",
      desc: 'Depredadora feroz del Vacio.',
      precio: 6000,
      img: reksaiImg,
      instagram: '@reksai_queen',
      funFacts: [
        { label: 'Rol', val: 'Asesina / Jungla' },
        { label: 'Lugar', val: 'El Vacio' },
        { label: 'Gusto', val: 'Cazar en los tuneles del desierto' }
      ]
    }
  ];

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column justify-content-between">
      <Navbar setVistaActual={setVistaActual} />

      <main className="container my-5">
        {vistaActual === 'catalogo' && (
          <HomePage campeones={campeones} setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'login' && (
          <LoginPage setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'crearCuenta' && (
          <RegisterPage setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'ofertas' && (
          <OfertasPage setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'carrito' && (
          <CarritoPage setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'pagoExitoso' && (
          <PagoResultadoPage exito={true} setVistaActual={setVistaActual} />
        )}

        {vistaActual === 'pagoError' && (
          <PagoResultadoPage exito={false} setVistaActual={setVistaActual} />
        )}

        {typeof vistaActual === 'object' && (
          <ProfilePage campeon={vistaActual} setVistaActual={setVistaActual} />
        )}
      </main>

      <Footer />
    </div>
  );
}