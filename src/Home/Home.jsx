import { useState } from 'react'
import './Home.css'
import '../App.css'

function Home() {
  return (
    <div className="home-section">
      <div className="hero-container">
      	<div className="hero-in"><div className="glowdot"></div> <p>Available for new projects</p></div>

      	<div className="hero-headline"><h1 className="headin">Build. <span class="upgrade" >Upgrade.</span> Optimize.</h1></div>

      	<div className="hero-info"><p>Full-stack development,creative design,<br/> and hands-on tech support.I turn<br/> complex problems into clean, high-<br/>performance solutions.
      	</p>
      	 </div>
      	 <div className="hero-cta">

      	 <div className="start">
            <p>Start a Project</p>
          <div className="arrow"><p>→</p></div> 
         </div>

      	 	<div className="view-services">
      	 		<p>View Services</p>
      	 	</div>
      	 </div>
    </div>
   </div>

  )
}

export default Home