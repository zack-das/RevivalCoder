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

    const projects = [
        {
            id:1,
            name: "E-Commerce Platform",
            description: "A full-featured online store with Stripe payments, admin dashboard, and inventory management."
        },
        {
            id:2,
            name: "Brand Identity System",
            description: "Complete visual identity for a fintech startup including logo, guidelines, and social assets."
        },
        {
            id:2,
            name: "Linux Dev Environment",
            description: "Automated setup script for a perfect web development environment on Ubuntu."
        },

    ]

    const strengths = [
        {
            id:1,
            icon:,
            title:"Fast Delivery",
            how: "Most projects completed in 3–7 days without compromising quality."
        },
         {
            id:2,
            icon:,
            title:"Clean Code",
            how: "Readable, maintainable, and well-documented code that scales."
        },
         {
            id:3,
            icon:,
            title:"Modern Design",
            how: "Pixel-perfect implementations following the latest design trends."
        },
        {
            id:4,
            icon:,
            title:"Personalized",
            how: "Direct communication with me. No middlemen or agency bloat."
        },
        {
            id:5,
            icon:,
            title:"Affordable",
            how: "Competitive rates and transparent pricing. No hidden fees."
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

            <div className="recentWorkSection">
                <h1>Recent Work</h1>
                <p>A selection of projects that showcase my skills in development,design, and systems engineering.</p>
                <button className="viewAll">View All projects</button>

            </div>

            <div className="whyMe">
                <h1>Why Work With Me</h1>
                {strengths.map((strength) => (
                    <div className="whyCard" key={strength.id}>
                        
                    </div>
                    ))}

            </div>
    </section>
  )
}

export default Process;