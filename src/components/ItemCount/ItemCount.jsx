import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css";

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return (
    <div>
      <h2>Cantidad: {contador}</h2>
      <div  className="btn-container">
        <Button className="btns" variant="outlined" onClick={restar} >
          -
        </Button>
        <Button variant="contained" onClick={() => onAdd(contador)}>
          agregar al carrito
        </Button>
        <Button  className="btns" variant="outlined" onClick={sumar} >
          +
        </Button>
        
      </div>
    </div>
  );
};

export default ItemCount;
