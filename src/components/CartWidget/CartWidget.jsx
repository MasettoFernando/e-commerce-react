import { Link } from 'react-router-dom';
import "./CartWidget.css"
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

  let numeroDeCompra = 8

  return (
    <Link to="/cart">
      <div class="container-cart" >
     
      <FaShoppingCart 
        style={{
          fontSize: "2rem",
          color: "#2f508b",
        }}
      /> 
     
      <div className="bubble-counter">
          <span>{numeroDeCompra}</span>
        </div>
    </div>
    </Link>
  )
}

export default CartWidget