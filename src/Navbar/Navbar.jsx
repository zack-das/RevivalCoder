import { useState } from 'react'
import { HiMenu } from 'react-icons/hi' 
import './Navbar.css'

function Navbar() {
	const[open, setOpen] = useState(false)
  return (
    <div className="navContainer">

      <nav>
        <div className="logoContainer"><h1 className="logo">RevivalCode</h1></div>
 
      <ul className={`navList ${open ? 'open' : ''}`}>
      		<li className="listItem">Services</li>
      		<li className="listItem">Process</li>
      		<li className="listItem">Projects</li> 
      		<li className="listItem">Contact</li>
      		<li className="HireBtn">Hire Me</li>
      	</ul>
  <div className="harmMenu"><HiMenu
    className="menuIcon"
           size={30}       // icon size
        onClick={() => setOpen(!open)}
      /></div>
  
      </nav>
    </div>
  )
}

export default Navbar