import { Link } from "react-router-dom";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="container-cart">
        <FaShoppingCart
          style={{
            fontSize: "2rem",
            color: "#2f508b",
          }}
        />

        <div className="bubble-counter">
          <span>{getTotalItems()}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
