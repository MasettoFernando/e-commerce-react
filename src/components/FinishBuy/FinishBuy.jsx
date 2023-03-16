import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
  return (
    <div>
      <h1>El id de tu compra es: {orderId}</h1>
      <Link to="/">Seguir Comprando</Link>
    </div>
  );
};

export default FinishBuy;
