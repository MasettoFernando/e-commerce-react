import { useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial , onAdd , quantity, cardQuantity}) => {

  const [contador, setContador] = useState(1);

  useEffect(() => {
    setContador(contador);
  }, [contador]);

  const navigate = useNavigate();

  const mostrarError = () => {
    let errorMessage;
    let footerCart;

    if (cardQuantity === stock) {
      errorMessage = `Ya has alcanzado la cantidad máxima en el carrito. Tienes ${cardQuantity} productos`;
      footerCart = `Ir al carrito!`;
    } else if (cardQuantity === 0 && contador === stock) {
      errorMessage = `Has seleccionado la cantidad máxima ${contador}.`;
    } else if (cardQuantity + contador === stock) {
      errorMessage = "Has seleccionado la cantidad máxima entre el carrito y el contador.";
    };

    Swal.fire({
      icon: "warning",
      title: "Stock agotado.",
      text: errorMessage,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      footer: footerCart,
      customClass: {
        popup: 'custom-popup-class',
      },
      didOpen: () => {
        const linkElement = document.querySelector('.custom-popup-class .swal2-footer');
        if (linkElement) {
          linkElement.addEventListener('click', () => {
            navigate('/cart');
            Swal.close();
          });
        }
      },
    });
  };

  const sumar = () => {
    if (contador < stock  && stock > cardQuantity + contador) {
      setContador(contador + 1);     
    } else {
      mostrarError();
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const handleAddToCart = () => {
    if (contador <= stock && stock > cardQuantity){
    onAdd(contador); 
    setContador(1); 
    } else {
      mostrarError();
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
