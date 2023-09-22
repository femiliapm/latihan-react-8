import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to={"/"}>Home</Link>
        <Link to={"/add"}>Add Product</Link>
      </div>
      <div className="btn-group">
        <div className="btn-login">Login</div>
        <div className="btn-registe">Register</div>
      </div>
    </nav>
  );
}

export default Navbar;
