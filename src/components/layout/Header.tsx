import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img style={{ padding: "0px 8px" }} src="/vite.svg" alt="logo" />
      </div>
      <nav className="nav">
        <Link to="/">- Inicio</Link>
        <Link to="/createProduct">- Agregar producto</Link>
      </nav>
    </div>
  );
};
