import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "90vh",
        flexWrap: "wrap",
        gap: "30px",
        paddingTop: "30px"
      }}
    >
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </div>
  );
};

export default ItemList;
