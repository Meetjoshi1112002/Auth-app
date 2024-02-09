import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
