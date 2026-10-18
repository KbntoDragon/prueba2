import React, { useState } from 'react';
import Title from '../components/atoms/Title';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

export default function RegisterPage({ setVistaActual }) {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const patronGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (patronGmail.test(correo)) {
      alert(`¡Cuenta creada con éxito para ${usuario}!`);
      setVistaActual('catalogo');
    } else {
      alert('Por favor, ingresa un correo electrónico válido de Gmail (@gmail.com).');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-5">
        <div className="card bg-black text-white border-warning p-4 shadow">
          <Title text="Crear Cuenta" level={3} className="mb-4" />
          <form onSubmit={handleRegister}>
            <Input 
              label="Usuario" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              placeholder="Ingresa tu usuario" 
              required 
            />
            <Input 
              label="Correo Electrónico (Gmail)" 
              type="email" 
              value={correo} 
              onChange={(e) => setCorreo(e.target.value)} 
              placeholder="ejemplo@gmail.com" 
              required 
            />
            <Input 
              label="Contraseña" 
              type="password" 
              value={clave} 
              onChange={(e) => setClave(e.target.value)} 
              placeholder="Ingresa tu contraseña" 
              required 
            />
            <Button text="Crear Cuenta" type="submit" variant="warning" className="w-100 fw-bold mb-2" />
            <Button text="Volver al Login" onClick={() => setVistaActual('login')} variant="outline-secondary" className="w-100" />
          </form>
        </div>
      </div>
    </div>
  );
}