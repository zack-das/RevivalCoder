import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Tools from './Tools/Tools'
import Services from './Services/Services'

function App() {
  return (

   <>
    <Navbar/>
    <Home/>
    <div className="scroll-indicator">⌄</div>
    <Tools/>
    <Services/>
   </>
  )
}

export default App