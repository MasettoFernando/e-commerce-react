import { useState,  } from "react";
import { Button } from "@mui/material";
import './FormCheckOut.css'
import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckOut = ({ cart, total, clearCart, setOrderId, tarjetaSeleccionada }) => {
  const [userInfo, setUserInfo] = useState({ email: "", phone: "" });

  console.log('FormCheckOut valor de cart:',cart)
  console.log('FormCheckOut valor de total:',total)

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      tarjeta: tarjetaSeleccionada,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));


    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    setTimeout(() => {
      console.log('Order object:', order);
    }, 9000);
    

    clearCart();
  };

  return (
    <div className="formCheckOut-container">
      

      <form  className="formCheckOut" onSubmit={handleSubmit}>
      <div >
        {cart.map((item) => {
          return (
            <div key={item.id} >
              <div >
                <span>{item.title} {item.category} Unidades: {item.quantity}</span>
                <h3>${item.price}</h3>
                
              </div>
            </div>
            );
        })}
        <h3>Tarjeta: {tarjetaSeleccionada}</h3>
        <h2>Total a pagar: ${total}</h2>
      </div>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <button variant="contained">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckOut;
