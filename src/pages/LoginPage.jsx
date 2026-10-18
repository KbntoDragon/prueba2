import React from 'react';
import Title from '../components/atoms/Title';
import LoginForm from '../components/molecules/LoginForm';

export default function LoginPage({ setVistaActual }) {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-5">
        <div className="card bg-black text-white border-warning p-4 shadow">
          <Title text="Iniciar sesión" level={3} className="mb-4" />
          <LoginForm 
            onLoginSuccess={() => setVistaActual('catalogo')} 
            onGoToRegister={() => setVistaActual('crearCuenta')} 
          />
        </div>
      </div>
    </div>
  );
}