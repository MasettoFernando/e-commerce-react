
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === categoryName
    );

    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);

      // reject(errorMessage);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("aca se rechazo: ", error);
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
