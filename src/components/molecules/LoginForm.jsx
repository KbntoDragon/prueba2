import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function LoginForm({ onLoginSuccess, onGoToRegister }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido Invocador: ${usuario}`);
    onLoginSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Usuario" 
        value={usuario} 
        onChange={(e) => setUsuario(e.target.value)} 
        placeholder="Ingresa tu usuario" 
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
      <Button text="Entrar" type="submit" variant="warning" className="w-100 fw-bold mb-2" />
      <Button text="Crear cuenta" onClick={onGoToRegister} variant="outline-warning" className="w-100" />
    </form>
  );
}