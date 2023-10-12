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
        <li className="shop">Shop</li>
        <li>
          <NavLink to="/index">Index</NavLink>
        </li>
        <li className="journal">Journal</li>
      </ul>
    </nav>
  );
}

export default Navbar;
