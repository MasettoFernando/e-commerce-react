import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

  let numeroDeCompra = 3

  return (
    <div style={{
        display: "flex", 
        width: "5%", 
        alignItems: "flex-end"/* , 
        backgroundColor: "burlywood" */
    }}>
     
      <FaShoppingCart  /> 
      <h2 style={ {color:" #2f508b "}}>{numeroDeCompra}</h2>
    </div>
    
  )
}

export default CartWidget