import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.type === "scroll") {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (location.pathname) {
      setOpen(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
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
          <li className="disabled">Shop</li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li className="disabled">Journal</li>
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
