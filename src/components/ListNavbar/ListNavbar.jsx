import React from "react";

const ListNavbar = ({ title }) => {
  return (
    <li style={{ listStyle:"none", color: "#2f508b", fontWeight: "bold", textDecoration: "none" }}>
      {title}
    </li>
  );
};

export default ListNavbar;
