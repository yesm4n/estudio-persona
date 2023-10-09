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
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/index">Index</NavLink>
        </li>
        <li>
          <NavLink to="/journal">Journal</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
