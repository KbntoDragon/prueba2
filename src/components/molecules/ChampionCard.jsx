import React from 'react';
import Title from '../atoms/Title.jsx';
import Button from '../atoms/Button.jsx';

export default function ChampionCard({ nombre, descripcion, imagen, alSeleccionar }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card bg-black text-white border-warning h-100 shadow">
        <img 
          src={imagen} 
          className="card-img-top p-2 rounded" 
          alt={nombre} 
          style={{ height: '250px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <Title text={nombre} level={4} className="card-title text-start" />
            <p className="card-text text-secondary">{descripcion}</p>
          </div>
          <Button 
            text="Ver Perfil Completo" 
            onClick={alSeleccionar} 
            variant="warning" 
            className="w-100 mt-3 fw-bold" 
          />
        </div>
      </div>
    </div>
  );
}