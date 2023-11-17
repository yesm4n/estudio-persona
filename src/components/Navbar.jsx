import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed!", location.pathname);

    if (location.pathname) {
      setOpen(false);
    }
  }, [location]);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className={open ? "active" : ""}>
      <nav>
        <span>
          <Link to="/" className={open ? "active" : ""}>
            Estudio Persona
          </Link>
        </span>

        <ul className={open ? "active" : ""}>
          <li>
            <Link to="/studio">Studio</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li>
            <Link>Journal</Link>
          </li>
        </ul>

        {open ? (
          <img src="close.png" className="close" onClick={handleOpen} />
        ) : (
          <img src="menu.png" className="open" onClick={handleOpen} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
