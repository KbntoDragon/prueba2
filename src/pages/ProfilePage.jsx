import React from 'react';

export default function ProfilePage({ campeon, setVistaActual }) {
  if (!campeon) return null;

  return (
    <div className="container mt-4 text-white" style={{ maxWidth: '850px' }}>
      <div className="card bg-black border-warning p-4 shadow">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 text-center">
            <img 
              src={campeon.img} 
              alt={campeon.nombre} 
              className="img-fluid rounded border border-warning shadow mb-3"
              style={{ maxHeight: '320px', width: '100%', objectFit: 'cover' }}
            />
            <h3 className="text-warning fw-bold">{campeon.nombre}</h3>
            {campeon.instagram && (
              <p className="text-warning small mb-0">Instagram: {campeon.instagram}</p>
            )}
          </div>

          <div className="col-12 col-md-7 mt-3 mt-md-0">
            <h4 className="text-warning mb-2">Sobre mi:</h4>
            <p className="lead text-light">{campeon.desc}</p>

            <h5 className="text-warning mt-4 border-bottom border-warning pb-2">FUN FACTS:</h5>
            <ul className="list-unstyled mt-3">
              {campeon.funFacts && campeon.funFacts.length > 0 ? (
                campeon.funFacts.map((fact, idx) => (
                  <li key={idx} className="mb-2 text-white">
                    <strong className="text-warning">- {fact.label}:</strong> {fact.val}
                  </li>
                ))
              ) : (
                <li className="text-secondary">- Campeon listo para chatear.</li>
              )}
            </ul>

            <div className="d-flex gap-2 mt-4">
              <button 
                onClick={() => setVistaActual('carrito')} 
                className="btn btn-warning fw-bold flex-grow-1"
              >
                Comprar Pase de Chat (${campeon.precio || '5000'})
              </button>
              <button 
                onClick={() => setVistaActual('catalogo')} 
                className="btn btn-outline-light"
              >
                Volver al catalogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}