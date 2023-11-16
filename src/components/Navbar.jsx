import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <header>
      {open ? (
        <img
          src="images/menu.png"
          className={open ? "open" : "close"}
          onClick={handleClick}
        />
      ) : (
        <img
          src="images/close.png"
          className={open ? "open" : "close"}
          onClick={handleClick}
        />
      )}
      <nav className={!open ? "active" : ""}>
        <span>
          <Link to="/">Estudio Persona</Link>
        </span>

        <ul>
          <li>
            <Link to="/studio">Studio</Link>
          </li>
          <li className="disabled">Shop</li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li className="disabled">Journal</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
