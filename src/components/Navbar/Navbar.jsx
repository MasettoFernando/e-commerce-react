import "./Navbar.css";
import ListNavbar from "../ListNavbar/ListNavbar";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";



const Navbar = ( ) => {

    const { user } = useContext(UserContext);

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
            {user ? (
                <Link  to="/logout">
                    <ListNavbar title="Log out" />
                </Link>
            ) : (
                <Link  to="/login">
                    <ListNavbar title="Log in" />
                </Link>
            )

            }
            



        </ul>
    )
}

export default Navbar

