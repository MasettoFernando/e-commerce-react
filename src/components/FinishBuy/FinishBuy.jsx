import React from "react";
import { Button } from "@mui/material";
import { useNavigate} from 'react-router-dom'
import './FinishBuy.css'

const FinishBuy = ({ orderId }) => {
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="finishBuy-container">
      <div className="finishBuy">
        <h1>El id de tu compra es: {orderId}</h1>
        <h2>¡Gracias por su compra!</h2>
      </div>
      
      <Button variant="contained" onClick={handleContinueShopping}>
        Seguir Comprando
      </Button>
      
    </div>
  );
};

export default FinishBuy;
