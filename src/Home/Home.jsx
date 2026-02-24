import { useState } from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-section">
      <div className="hero-container">
      	<div className="hero"><p><span>.</span>Available for new projects</p></div>

      	<div className="hero-headline"><h1>Build. Upgrade. Optimize.</h1></div>

      	<div className="hero-info"><p>Full-stack development,
      	 creative design, and hands-on tech support.
      	  I turn complex problems into clean, high-performance solutions.
      	</p>
      	 </div>
      	 <div className="hero-cta">
      	 	<button className="start-btn">
      	 		Start a Project
      	 	</button>
      	 	<button className="view-services">
      	 		view Services
      	 	</button>
      	 </div>
    </div>
   </div>
  )
}

export default Home