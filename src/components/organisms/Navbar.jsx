import React from 'react';
import Button from '../atoms/Button';

export default function Navbar({ setVistaActual }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 border-bottom border-warning shadow">
      <span 
        className="navbar-brand text-warning fw-bold fs-4" 
        style={{ cursor: 'pointer' }} 
        onClick={() => setVistaActual('catalogo')}
      >
        LoL DuoFinder
      </span>
      <div className="d-flex gap-2 ms-auto">
        <Button text="Inicio / Citas" onClick={() => setVistaActual('catalogo')} variant="outline-warning" className="btn-sm" />
        <Button text="Iniciar sesión" onClick={() => setVistaActual('login')} variant="warning" className="btn-sm fw-bold" />
      </div>
    </nav>
  );
}