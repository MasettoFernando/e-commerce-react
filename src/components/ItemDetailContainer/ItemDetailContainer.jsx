import React, { useEffect, useState, useContext } from "react";

import ItemDetail from "../ItemDetail/ItemDetail.jsx";

import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

import { useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  
  const { addToCart, getQuantityById } = useContext(CartContext);
  

  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {

    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);

    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);
  
  const quantity = getQuantityById(product.id);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };

    addToCart(obj);
    
    Swal.fire({
      icon: "success",
      title: "Se agrego su producto al carrito",
    });
  };

  return <ItemDetail product={product} onAdd={onAdd} initial={quantity}/>;
};

export default ItemDetailContainer;
