import React from 'react';

export default function OfertasPage({ setVistaActual }) {
  return (
    <div className="container mt-4 text-white text-center">
      <h2 className="text-warning mb-4"> Ofertas Especiales de Pases </h2>
      <div className="card bg-black border-warning p-4 mx-auto shadow" style={{ maxWidth: '500px' }}>
        <h4>Pase Duo VIP - 2x1</h4>
        <p className="text-secondary">Llévate 2 horas de chat por el precio de 1 esta semana.</p>
        <span className="fs-3 text-success fw-bold">$8.000 CLP</span>
        <button 
          onClick={() => setVistaActual('carrito')} 
          className="btn btn-warning fw-bold mt-3"
        >
          Ir a Comprar
        </button>
      </div>
    </div>
  );
}