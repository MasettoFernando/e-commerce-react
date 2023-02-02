import CartWidget from "../CartWidget/CartWidget"
import Navbar from "../Navbar/Navbar"
import Pokenjoy from "../../img/Pokenjoy.jpg"


const Header = ( ) => {

    return (
        <div style={{
                display: "flex", 
                width: "100%", 
                height: "8vh", 
                justifyContent: "space-between",
                alignItems: "center", 
                backgroundColor: "white"
            }}>

            <img style={{ height: "7vh" }} src={ Pokenjoy } />
            <Navbar />
            <CartWidget />
        </div>
    )
}

export default Header