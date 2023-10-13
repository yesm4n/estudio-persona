import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <span>
        <NavLink to="/">Estudio Persona</NavLink>
      </span>

      <ul>
        <li>
          <NavLink to="/studio">Studio</NavLink>
        </li>
        <li style={{ cursor: "not-allowed" }}>Shop</li>
        <li>
          <NavLink to="/index">Index</NavLink>
        </li>
        <li style={{ cursor: "not-allowed" }}>Journal</li>
      </ul>
    </nav>
  );
}

export default Navbar;
