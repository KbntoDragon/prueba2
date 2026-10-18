// Base de datos simulada de pases de chat
export const productosIniciales = [
  { id: 1, nombre: 'Pase Chat Rápido (15 min)', precio: 3000, desc: 'Chat rápido para romper el hielo y conocerse.', popular: false },
  { id: 2, nombre: 'Pase Cita Completa (1 Hora)', precio: 8000, desc: 'Una hora de chat privado + partida en la Grieta.', popular: true },
  { id: 3, nombre: 'Pase Duo VIP (Toda la noche)', precio: 18000, desc: 'Acceso directo a Discord + Coach y citas ilimitadas.', popular: false }
];

export const getProductos = () => {
  const datos = localStorage.getItem('pases_chat');
  return datos ? JSON.parse(datos) : productosIniciales;
};

export const agregarProducto = (nuevo) => {
  const lista = getProductos();
  lista.push({ ...nuevo, id: Date.now() });
  localStorage.setItem('pases_chat', JSON.stringify(lista));
};

export const eliminarProducto = (id) => {
  const lista = getProductos().filter(p => p.id !== id);
  localStorage.setItem('pases_chat', JSON.stringify(lista));
};