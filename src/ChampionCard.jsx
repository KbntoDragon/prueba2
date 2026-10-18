import React from 'react';

export default function ChampionCard({ nombre, descripcion, imagen, alSeleccionar }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card bg-dark text-white border-warning text-center h-100 p-2 shadow">
        <img 
          src={imagen} 
          className="card-img-top" 
          alt={nombre} 
          style={{ height: '280px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-warning">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <button onClick={alSeleccionar} className="btn btn-warning btn-sm">
            Conocer
          </button>
        </div>
      </div>
    </div>
  );
}