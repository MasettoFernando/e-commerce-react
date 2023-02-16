import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>{contador}</h1>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(contador)}>Agregar Al carrito</button>
    </div>
  );
};

export default ItemCount;
