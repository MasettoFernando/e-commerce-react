import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PuffLoader } from "react-spinners";

import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const ItemCollection = collection(db, "products");

    if (categoryName) {
      const q = query(ItemCollection, where("category", "==", categoryName));

      getDocs(q)
        .then((res) => {
          const products = res.docs.map((products) => {
            return {
              ...products.data(),
              id: products.id,
            };
          });

          setItems(products);
        })

        .catch((err) => console.log("este es el error: " + err));
    } else {
      getDocs(ItemCollection)
        .then((res) => {
          const products = res.docs.map((products) => {
            return {
              ...products.data(),
              id: products.id,
            };
          });

          setItems(products);
        })

        .catch((err) => console.log("este es el error: " + err));
    }
  }, [categoryName]);

  console.log(items);
  
  const styleSpinner = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div>
      {items.length < 1 ? (
        <div style={styleSpinner}>
          <PuffLoader 
            color={"#477af0"}
            cssOverride={styles}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
