import React from "react";
import "./Process.css";
import {
  MdOutlineMessage,
  MdFlashOn,
  MdOutlineBuild,
  MdOutlineRocketLaunch,
  MdCleaningServices,
  MdStar,
  MdOutlinePalette,
  MdPerson,
  MdAttachMoney,
} from "react-icons/md";

import comp from "../assets/images/comp.jpg";

function Process() {
  const processes = [
    {
      id: 1,
      cardNo: "01",
      icon: MdOutlineMessage,
      about: "Tell Me Your Idea",
      content:
        "We discuss your goals, requirements, and timeline. I ask the right questions to understand exactly what you need.",
    },
    {
      id: 2,
      cardNo: "02",
      icon: MdOutlineBuild,
      about: "I Build or Fix It",
      content:
        "I get to work using modern tools and best practices. You get regular updates and transparent communication.",
    },
    {
      id: 3,
      cardNo: "03",
      icon: MdOutlineRocketLaunch,
      about: "You Launch or Upgrade",
      content:
        "Final delivery, testing, and handoff. Whether it's a new site or a faster laptop, you're ready to go.",
    },
  ];

  const projects = [
    {
      id: 1,
      image: comp,
      name: "E-Commerce Platform",
      description:
        "A full-featured online store with Stripe payments, admin dashboard, and inventory management.",
    },
    {
      id: 2,
      image: comp,
      name: "Brand Identity System",
      description:
        "Complete visual identity for a fintech startup including logo, guidelines, and social assets.",
    },
    {
      id: 2,
      image: comp,
      name: "Linux Dev Environment",
      description:
        "Automated setup script for a perfect web development environment on Ubuntu.",
    },
  ];

  const strengths = [
    {
      id: 1,
      icon: MdFlashOn,
      title: "Fast Delivery",
      how: "Most projects completed in 3–7 days without compromising quality.",
    },
    {
      id: 2,
      icon: MdCleaningServices,
      title: "Clean Code",
      how: "Readable, maintainable, and well-documented code that scales.",
    },
    {
      id: 3,
      icon: MdOutlinePalette,
      title: "Modern Design",
      how: "Pixel-perfect implementations following the latest design trends.",
    },
    {
      id: 4,
      icon: MdPerson,
      title: "Personalized",
      how: "Direct communication with me. No middlemen or agency bloat.",
    },

    {
      id: 5,
      icon: MdAttachMoney,
      title: "Affordable",
      how: "Competitive rates and transparent pricing. No hidden fees.",
    },
  ];
  const clients = [
    {
      name: "Sarah.K",
      review:
        '"The website redesign completely transformed our business. The attention to detail and modern aesthetic is exactly what we needed."',
      image: "UserImage",
    },
    {
      name: "Sarah.K",
      review:
        '"The website redesign completely transformed our business. The attention to detail and modern aesthetic is exactly what we needed."',
      image: "UserImage",
    },
    {
      name: "Sarah.K",
      review:
        '"The website redesign completely transformed our business. The attention to detail and modern aesthetic is exactly what we needed."',
      image: "UserImage",
    },
    {
      name: "Sarah.K",
      review:
        '"The website redesign completely transformed our business. The attention to detail and modern aesthetic is exactly what we needed."',
      image: "UserImage",
    },
  ];
  return (
    <section className="Process" id="process">
      <div className="processHead">
        <h1>
          Simple Process. <span>Real Results.</span>
        </h1>
      </div>
      <div className="cardContainer">
        {processes.map((process) => (
          <div className="processCard" key={process.id}>
            <div className="processNo">{process.cardNo}</div>
            <div className="processIcon">
              <process.icon style={{}} size="1.5em" color="#00D4FF" />
            </div>
            <h3>{process.about}</h3>
            <p className="processInfo">{process.content}</p>
          </div>
        ))}
      </div>

      <div className="recentWorkSection" id="projects">
        <h1>
          Recent <span>Work</span>
        </h1>
        <p>
          A selection of projects that showcase my skills in development,design,
          and systems engineering.
        </p>
        <div className="viewBtn">
          <button className="viewAll">
            <p>View All projects</p>
          </button>
        </div>
        {projects.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="cardImage">
              <img src={project.image} />
            </div>

            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {/*<div className="myStack">{project.}*/}
          </div>
        ))}
      </div>

      <div className="whyMe">
        <h1>Why Work With Me</h1>
        {strengths.map((strength) => (
          <div className="whyCard" key={strength.id}>
            <div className="strengthIcon">
              <strength.icon />
            </div>
            <h1>{strength.title}</h1>
            <p className="strengthInfo">{strength.how}</p>
          </div>
        ))}
      </div>

      <div className="clientReviews">
        <h1>What Clients Say</h1>
      </div>
    </section>
  );
}

export default Process;
