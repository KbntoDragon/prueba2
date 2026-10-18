import React from 'react';

export default function Button({ text, onClick, type = "button", variant = "warning", className = "" }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn btn-${variant} ${className}`}
    >
      {text}
    </button>
  );
}