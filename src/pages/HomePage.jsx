import React from 'react';
import Title from '../components/atoms/Title.jsx';

export default function HomePage({ campeones, setVistaActual }) {
  return (
    <div className="container mt-4">
      <Title text="Tienda de Citas y Pases de Chat LoL" level={2} className="mb-4 text-center text-warning" />
      <div className="row">
        {campeones.map((c) => (
          <div key={c.id} className="col-12 col-md-4 mb-4">
            <div className="card bg-black text-white border-warning h-100 shadow d-flex flex-column justify-content-between">
              <div>
                <img 
                  src={c.img} 
                  className="card-img-top p-2 rounded" 
                  alt={c.nombre} 
                  style={{ height: '220px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h4 className="card-title text-warning">{c.nombre}</h4>
                  <p className="card-text text-secondary">{c.desc}</p>
                  
                  {/* PRECIO Y DETALLES DE COMPRA */}
                  <div className="my-3 p-2 bg-dark rounded border border-secondary text-center">
                    <span className="text-muted d-block small">Precio Base de Chat</span>
                    <span className="fs-3 text-success fw-bold">${c.precio || '5.000'} CLP</span>
                  </div>
                </div>
              </div>

              <div className="card-footer bg-transparent border-0 pb-3">
                <button 
                  onClick={() => setVistaActual('carrito')} 
                  className="btn btn-warning w-100 fw-bold mb-2"
                >
                   Comprar Pase de Chat
                </button>
                <button 
                  onClick={() => setVistaActual(c)} 
                  className="btn btn-outline-light w-100 btn-sm"
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}