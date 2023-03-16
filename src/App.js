import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


import Cart from "./components/Cart/Cart.jsx";

import CartContextProvider from "./context/CartContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  

  return (
    <BrowserRouter>

    <CartContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        
        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart"  element={ <Cart/> } />
        
        <Route path="/login" element={ <Login />} />
        <Route path="/sign-up" element={ <Register /> } />
        <Route path="*" element= { <h2>404 NOT FOUND</h2> }/>

      </Routes>
      </CartContextProvider>  
    </BrowserRouter>
  )
}

export default App;
