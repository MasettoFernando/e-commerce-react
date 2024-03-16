import CartWidget from "../CartWidget/CartWidget";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "8vh",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "10px 0px 10px 1px #2f508b",
      }}
    >
      <Link to="/">
        <img style={{ height: "7vh" }} src={"/POKEMON/LOGO/Pokenjoy.jpg"} alt="nav img" />
      </Link>
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
