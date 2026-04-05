import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Tools from './Tools/Tools'
import Services from './Services/Services'
import Process from './Process/Process' 

function App() {
  return (

   <>
    <Navbar/>
    <Home/>
    <div className="scroll-indicator">⌄</div>
     <Tools/>
    <Services/>
    <Process/>
   </>
  )
}

export default App