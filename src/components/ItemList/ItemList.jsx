import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        
        display: "grid", 
        gridTemplateColumns: "repeat(4, 2fr)",
        placeItems: "center"
        
      }}
    >
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </div>
  );
};

export default ItemList;
