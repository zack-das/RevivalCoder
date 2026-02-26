import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Tools from './Tools/Tools'

function App() {
  return (

   <>
    <Navbar/>
    <Home/>
    <div className="scroll-indicator">⌄</div>
    <Tools/>
   </>
  )
}

export default App