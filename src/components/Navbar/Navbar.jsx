import "./Navbar.css";
import ListNavbar from "../ListNavbar/ListNavbar";
import { Link } from "react-router-dom";


const Navbar = ( ) => {

    return (
        <ul className="categories" >
            
            <Link  to="/">
                <ListNavbar title="Todos" />
            </Link>
            <Link to="/category/card">
                <ListNavbar title="Cartas" />
            </Link>
            <Link to="/category/peluche">
                <ListNavbar title="Peluches" />
            </Link>


        </ul>
    )
}

export default Navbar

