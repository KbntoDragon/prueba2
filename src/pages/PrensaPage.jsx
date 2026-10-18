import React from 'react';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button';

export default function PrensaPage({ setVistaActual }) {
  return (
    <div className="bg-black p-4 rounded border border-warning shadow">
      <Title text="Sección de Prensa" level={2} className="mb-4" />
      <article className="mb-4">
        <h4 className="text-warning">LoL DuoFinder alcanza los 500,000 matches exitosos en Latinoamérica</h4>
        <p className="text-muted"><small>SANTIAGO DE CHILE — 15 de marzo, 2026</small></p>
        <p>La plataforma líder en conexión de jugadores de League of Legends, <em>LoL DuoFinder</em>, anunció hoy que ha superado el medio millón de parejas formadas para partidas clasificatorias y modos recreativos.</p>
      </article>
      <hr className="border-secondary" />
      <article className="mb-4">
        <h4 className="text-warning">Nueva alianza estratégica con torneos de la comunidad</h4>
        <p className="text-muted"><small>SANTIAGO DE CHILE — 2 de febrero, 2026</small></p>
        <p>En su continuo esfuerzo por fortalecer la comunidad gamer en la región, <em>LoL DuoFinder</em> ha firmado un acuerdo de patrocinio con organizadores locales.</p>
      </article>
      <div className="p-3 bg-dark rounded border border-secondary">
        <h5 className="text-warning">Contacto para Medios</h5>
        <p className="mb-0">Email: <code>prensa@duofinder-fake.com</code></p>
      </div>
      <Button text="Volver al Inicio ▲" onClick={() => setVistaActual('catalogo')} variant="warning" className="mt-4 fw-bold" />
    </div>
  );
}