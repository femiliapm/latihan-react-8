import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to={"/"}>Home</Link>
        <Link to={"/add-product"}>Add Product</Link>
        <Link to={"/chart-example"}>Chart Example</Link>
      </div>
      <div className="btn-group">
        <Link to={"/login"} className="btn-login">
          Login
        </Link>
        <Link to={"/register"} className="btn-registe">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
