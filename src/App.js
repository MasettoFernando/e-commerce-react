import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


import Cart from "./components/Cart/Cart.jsx";


function App() {
  

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        
        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart"  element={ <Cart/> } />
        
        <Route path="*" element= { <h2>404 NOT FOUND</h2> }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
