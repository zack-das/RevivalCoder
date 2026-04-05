import React from 'react'
import "./Process.css"
import { 
  MdOutlineMessage,      
  MdOutlineBuild,        
  MdOutlineRocketLaunch  
} from "react-icons/md";


function Process() {
    const processes=[
        {   id: 1,
            cardNo:"01",
            icon: MdOutlineMessage,
            about: "Tell Me Your Idea",
            content:"We discuss your goals, requirements, and timeline. I ask the right questions to understand exactly what you need."
        },
        {   id: 2,
            cardNo:"02",
            icon: MdOutlineBuild,
            about: "I Build or Fix It",
            content: "I get to work using modern tools and best practices. You get regular updates and transparent communication.",
        },
        {   id: 3,
            cardNo:"03",
            icon: MdOutlineRocketLaunch,
            about: "You Launch or Upgrade",
            content: "Final delivery, testing, and handoff. Whether it's a new site or a faster laptop, you're ready to go.",
        }
    ]
  return (
    <section className='Process'>
       <div className='processHead'>
         <h1>Simple Process. <span>Real Results.</span></h1>
    
       </div>
       <div className='cardContainer'>
                {processes.map((process) => (
                    <div className='processCard' key={process.id}>
                         <div className='processNo'>{process.cardNo}</div>
                        <div className='processIcon'><process.icon  style={{ 
      
    }}
    size="1.5em"
      color="#00D4FF" 
      /></div>
                        <h3>{process.about}</h3>
                        <p className='processInfo'>{process.content}</p>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Process;