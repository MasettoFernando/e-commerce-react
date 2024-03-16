import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Login  from "./components/Login/Login.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Register from "./components/Register/Register.jsx";



import Cart from "./components/Cart/Cart.jsx";

import CartContextProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext.jsx";
import AuthForm from "./components/AuthForm/AuthForm.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";


function App() {

  return (
    <BrowserRouter>

    <UserContextProvider>
    <CartContextProvider>
      <Header />
      <Welcome/>
      <Routes>
        <Route path="/auth" element={ <AuthForm/> } />
        <Route path="/" element={ <ItemListContainer /> } />

        <Route path="/login" element={<Login />} />
        <Route path= "/logout" element={<Logout />} />
        <Route path="/sign-up" element={<Register />} />
        
        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart"  element={ <Cart/> } />
        <Route path="*" element= { <h2>404 NOT FOUND</h2> }/>

      </Routes>
    </CartContextProvider>  

    </UserContextProvider>
      
    </BrowserRouter>
  )
}

export default App;
