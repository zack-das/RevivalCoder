import { useState } from 'react'
import './Tools.css'

function Tools() {
 const tools = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Figma", "Penpot", "Linux", "Bash", "Git", 
  "jenkins", "Render", "SublimeText", "VS Code", "MongoDB", "PostgreSQL"
];
  return (
    <div className="tools-container">
      <div className="toolset">
      	<div>
      		<h3 className="toolssub"> Tools & <span class="techs">Technologies</span></h3>
      	<p>My arsenal for building digital products and <br/>solving technical challenges</p>
      	</div>
      	
      	<div className="tools">
      		{tools.map((tool) => (
            <div className="tool-name" key={tool}>
              <p>{tool}</p>
            </div>
            ))}
      	</div>	
      </div>
    </div>
  )
}

export default Tools