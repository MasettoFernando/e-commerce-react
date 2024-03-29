import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

import Swal from "sweetalert2";

import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

    const { getTotalItems } = useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [cupon, setCupon] = useState('');
  const tarjetasDisponibles = ['Visa', 'MasterCard', 'American Express'];
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  const handleRadioChange = (tarjeta) => {
    setTarjetaSeleccionada(tarjeta);
  };

  const handleInputChange = (event) => {
    setCupon(event.target.value);
  };

  const handleApplyCupon = () => {
    setCupon('');
  };
  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado con exito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Carrito NO eliminado", "", "info");
      }
    });
  };

  const total = getTotalPrice();

  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }

  return (
    <div>
      {!buy ? (
        <div className="cart-container">
          {cart.length < 1 ? (
            <img src="/POKEMON/NoData/noData.jpg" alt="" />
          ) : (
            <div className="container-items">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt="" />
                    <div className="cart-item-info">
                      <h2>{item.name}</h2>
                      <h2>${item.price}</h2>
                      <h2>Unidades: {item.quantity}</h2>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="cart-info">
            <h2>Descripcion del carrito:</h2>
            <h3>Cantidad de productos: {getTotalItems()}</h3>
            <div className="cupon">
              <label>
                <h3>¿Tiene un cupón de descuento?</h3>
                <input
                  type="text"
                  value={cupon}
                  onChange={handleInputChange}
                  placeholder="Ingrese su cupón aquí"
                  className="custom-input"
                />
              </label>
              <Button variant="contained" onClick={handleApplyCupon}>
                Aplicar
              </Button>
            </div>
            <div>
              <h3>Seleccione su tarjeta:</h3>
              <div className="tarjeta-checkboxes">
                {tarjetasDisponibles.map((tarjeta) => (
                  <div key={tarjeta} className="tarjeta-checkbox">
                    <input
                      type="radio"
                      id={tarjeta}
                      name="tarjeta"
                      value={tarjeta}
                      checked={tarjetaSeleccionada === tarjeta}
                      onChange={() => handleRadioChange(tarjeta)}
                    />
                    <label htmlFor={tarjeta}>{tarjeta}</label>
                  </div>
                ))}
              </div>
            </div>
            <h1>Precio total: {total > 0 ? ('$' + total) : "No hay items"}</h1>
            

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={() => setBuy(true)}>
                  Ir al checkout
                </Button>
                <Button onClick={() => clearCartAlert()} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <FormCheckOut
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderId={setOrderId}
          tarjetaSeleccionada={tarjetaSeleccionada}
        />
      )}
    </div>
  );
};

export default Cart;
