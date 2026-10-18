import React, { useState } from 'react';

export default function CarritoPage({ setVistaActual }) {
  const [plan, setPlan] = useState('8000');
  const [summoner, setSummoner] = useState('');

  const handlePagar = (e) => {
    e.preventDefault();
    if (summoner.toLowerCase() === 'error') {
      setVistaActual('pagoError');
    } else {
      setVistaActual('pagoExitoso');
    }
  };

  return (
    <div className="container mt-4 text-white" style={{ maxWidth: '600px' }}>
      <div className="card bg-black border-warning p-4 shadow">
        <h3 className="text-warning text-center mb-3"> Checkout - Resumen de Compra</h3>

        {/* Resumen del Precio */}
        <div className="alert alert-dark border-warning d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="mb-0 text-warning">Total a Pagar:</h5>
            <small className="text-secondary">Pase de Chat Privado + Discord</small>
          </div>
          <span className="fs-2 text-success fw-bold">${Number(plan).toLocaleString('es-CL')} CLP</span>
        </div>

        <form onSubmit={handlePagar}>
          <div className="mb-3">
            <label className="form-label text-warning fw-bold">Selecciona tu Plan:</label>
            <select 
              className="form-select bg-dark text-white border-secondary" 
              value={plan} 
              onChange={e => setPlan(e.target.value)}
            >
              <option value="3000">Pase Express (15 Min) - $3.000 CLP</option>
              <option value="8000">Pase Cita Completa (1 Hora) - $8.000 CLP</option>
              <option value="18000">Pase Duo VIP (Toda la noche) - $18.000 CLP</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label text-warning fw-bold">Nombre de Invocador (LoL):</label>
            <input 
              type="text" 
              className="form-control bg-dark text-white border-secondary" 
              placeholder="Ej: Faker#LAN" 
              required 
              value={summoner}
              onChange={e => setSummoner(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 btn-lg fw-bold mt-3">
            Pagar Ahora (${Number(plan).toLocaleString('es-CL')})
          </button>
        </form>
      </div>
    </div>
  );
}