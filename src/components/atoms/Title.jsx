import React from 'react';

export default function Title({ text, level = 1, className = "" }) {
  const Tag = `h${level}`;
  return <Tag className={`text-warning fw-bold text-center ${className}`}>{text}</Tag>;
}