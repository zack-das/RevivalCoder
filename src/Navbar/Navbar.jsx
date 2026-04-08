import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navContainer">
      {/* Overlay for mobile menu */}
      {open && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="logoContainer">
          <h1 className="logo">RevivalCode</h1>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="navItems">
          <li className="listItem">Services</li>
          <li className="listItem">Process</li>
          <li className="listItem">Projects</li>
          <li className="listItem">Contact</li>
          <li className="HireB">Hire Me</li>
        </ul>

        {/* Mobile Navigation - Hidden on desktop */}
        <ul className={`navList ${open ? "open" : ""}`}>
          <li className="listItem" onClick={closeMenu}>
            Services
          </li>
          <li className="listItem" onClick={closeMenu}>
            Process
          </li>
          <li className="listItem" onClick={closeMenu}>
            Projects
          </li>
          <li className="listItem" onClick={closeMenu}>
            Contact
          </li>
          <li className="HireBtn" onClick={closeMenu}>
            Hire Me
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="harmMenu" onClick={() => setOpen(!open)}>
          {open ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
