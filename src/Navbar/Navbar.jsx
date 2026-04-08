import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' // Import HiX
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  // Function to close menu
  const closeMenu = () => setOpen(false);

  return (
    <div className="navContainer">
      {/* 1. The Overlay: Only visible when menu is open */}
      {open && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav>
        <div className="logoContainer"><h1 className="logo">RevivalCode</h1></div>

        <ul className={`navList ${open ? 'open' : ''}`}>
          <li className="listItem" onClick={closeMenu}>Services</li>
          <li className="listItem" onClick={closeMenu}>Process</li>
          <li className="listItem" onClick={closeMenu}>Projects</li> 
          <li className="listItem" onClick={closeMenu}>Contact</li>
          <li className="HireBtn" onClick={closeMenu}>Hire Me</li>
        </ul>

        <div className="harmMenu">
          {/* 2. Switch Icon based on state */}
          {open ? (
            <HiX className="menuIcon" size={30} onClick={() => setOpen(false)} />
          ) : (
            <HiMenu className="menuIcon" size={30} onClick={() => setOpen(true)} />
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar