import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // Helper for mobile scrolling (since li handles the click there)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className="navContainer">
      {/* Overlay for mobile menu */}
      {open && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="logoContainer">
          <h1 className="logo">RevivalCode</h1>
        </div>

        {/* Desktop Navigation - Using <a> tags with your existing classes */}
        <ul className="navItems">
          <li className="listItem">
            <a href="#services">Services</a>
          </li>
          <li className="listItem">
            <a href="#process">Process</a>
          </li>
          <li className="listItem">
            <a href="#projects">Projects</a>
          </li>
          <li className="listItem">
            <a href="#contact">Contact</a>
          </li>
          <li className="HireB">
            <a href="#contact">Hire Me</a>
          </li>
        </ul>

        {/* Mobile Navigation - Using IDs in the scrollToSection function */}
        <ul className={`navList ${open ? "open" : ""}`}>
          <li className="listItem" onClick={() => scrollToSection("services")}>
            Services
          </li>
          <li className="listItem" onClick={() => scrollToSection("process")}>
            Process
          </li>
          <li className="listItem" onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li className="listItem" onClick={() => scrollToSection("contact")}>
            Contact
          </li>
          <li className="HireBtn" onClick={() => scrollToSection("contact")}>
            Hire Me
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="harmMenu" onClick={() => setOpen(!open)}>
          {open ? (
            <HiX size={30} color="white" />
          ) : (
            <HiMenu size={30} color="white" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
