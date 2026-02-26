import { useState } from 'react'
import './Tools.css'

function Tools() {
  return (
    <div className="tools-container">
      <div className="toolset">
      	<div>
      		<h3 className="toolssub"> Tools & <span class="techs">Technologies</span></h3>
      	<p>My arsenal for building digital products and <br/>solving technical challenges</p>
      	</div>
      	
      	<div className="tools">
      		<div className="tool-name"><p>HTML5</p></div>
      		<div className="tool-name"><p>CSS3</p></div>
      		<div className="tool-name"><p>JavaScript</p></div>
      		<div className="tool-name"><p>TypeScript</p></div>
      		<div className="tool-name"><p>React</p></div>
      		<div className="tool-name"><p>Next.js</p></div>
      		<div className="tool-name"><p>Node.js</p></div>
      		<div className="tool-name"><p>Figma</p></div>
      		<div className="tool-name"><p>Penpot</p></div>
      		<div className="tool-name"><p>Linux</p></div>
      		<div className="tool-name"><p>Bash</p></div>
      		<div className="tool-name"><p>Git</p></div>
      		<div className="tool-name"><p>jenkins</p></div>
      		<div className="tool-name"><p>Render</p></div>
      		<div className="tool-name"><p>SublimeText</p></div>
      		<div className="tool-name"><p>VS Code</p></div>
      		<div className="tool-name"><p>MongoDB</p></div>
      		<div className="tool-name"><p>PostgreSQL</p></div>
      	</div>	
      </div>
    </div>
  )
}

export default Tools