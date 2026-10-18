import React from 'react';

export default function PagoResultadoPage({ exito, setVistaActual }) {
  return (
    <div className="container mt-5 text-center text-white" style={{ maxWidth: '550px' }}>
      {exito ? (
        <div className="card bg-black border-success p-4 shadow">
          <h2 className="text-success mb-3">¡Cita Desbloqueada! 🎉</h2>
          <p className="fs-5">Tu sala de chat ha sido creada con éxito.</p>
          <div className="alert alert-dark border-secondary my-3">
            <strong>Código de Cita:</strong> #LOL-2024-CHAT
            <br />
            <small className="text-secondary">Se ha enviado la invitación a tu Discord registrado.</small>
          </div>
          <button onClick={() => setVistaActual('catalogo')} className="btn btn-success fw-bold mt-2">
            Volver al Catálogo
          </button>
        </div>
      ) : (
        <div className="card bg-black border-danger p-4 shadow">
          <h2 className="text-danger mb-3">No se pudo concretar la reserva ❌</h2>
          <p>Tu solicitud fue rechazada o el campeón se encuentra en partida.</p>
          <button onClick={() => setVistaActual('carrito')} className="btn btn-outline-warning fw-bold mt-2">
            Reintentar Reserva
          </button>
        </div>
      )}
    </div>
  );
}