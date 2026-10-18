import React from 'react';

export default function Input({ label, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <div className="mb-3">
      {label && <label className="form-label text-warning">{label}</label>}
      <input
        type={type}
        className="form-control bg-dark text-white border-secondary"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}