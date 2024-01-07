import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial , onAdd , quantity, cardQuantity}) => {
  console.log('ItemCount cardQuantity el valor es :', cardQuantity)
  console.log('ItemCount initial el valor es:',initial)
  console.log('ItemCount quantity el valor es:',quantity)
  const initialQuantity = initial || 1;
  const [contador, setContador] = useState(initialQuantity);
  console.log('ItemCount initialQuantity el valor es:',initialQuantity)
  console.log('ItemCount stock el valor es:', stock)
  console.log('ItemCount el valor de contador es: ', contador)
  useEffect(() => {
    setContador(initialQuantity);
  }, [initialQuantity]);

  const sumar = () => {
    if (contador < stock && stock > cardQuantity) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const handleAddToCart = () => {
    if (contador <= stock && stock > cardQuantity){
    onAdd(contador); // Comunica el valor al componente padre
    setContador(1); // Reinicia el contador localmente
    } else {
      Swal.fire({
        icon: "error",
        title:`Lo sentimos, ya no hay más stock, 
        ya tiene la cantidad de: ${cardQuantity} productos en su carrito`,
      });
    }
  };
  

  return (
    <div>
      <h2>Cantidad: {contador}</h2>
      <div  className="btn-container">
        <Button className="btns" variant="outlined" onClick={restar} >
          -
        </Button>
        <Button variant="contained" onClick={handleAddToCart}>
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
