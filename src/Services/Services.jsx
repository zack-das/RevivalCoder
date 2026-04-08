import { useState } from "react";
import "./Services.css";
import { IoMdColorPalette } from "react-icons/io";
import {
  MdCode,
  MdVideoCameraBack,
  MdMemory,
  MdTerminal,
} from "react-icons/md";
import { FaBeer } from "react-icons/fa";

// import {}

function Services() {
  const services = [
    {
      id: 1,
      icon: MdCode, // Add your icon component or string here
      name: "Web Development",
      info: "Custom websites & web apps built with modern tech stacks.",
      link: "/web-dev",
    },
    {
      id: 2,
      icon: IoMdColorPalette,
      name: "Brand & Logo Design",
      info: "Visual identity that makes your brand unforgettable.",
      link: "/branding",
    },
    {
      id: 3,
      icon: FaBeer,
      name: "UI/UX Design",
      info: "Interfaces that feel intuitive and look premium.",
      link: "/ui-ux",
    },
    {
      id: 4,
      icon: MdVideoCameraBack,
      name: "Video Editing",
      info: "Professional edits for content creators & businesses.",
      link: "/video-editing",
    },
    {
      id: 5,
      icon: MdMemory,
      name: "Laptop Upgrades",
      info: "RAM, SSD upgrades and software optimization.",
      link: "/upgrades",
    },
    {
      id: 6,
      icon: MdTerminal,
      name: "Linux Installation",
      info: "Clean Linux setup, dual boot, system configuration.",
      link: "/linux",
    },
  ];
  return (
    <section className="services-section" id="services">
      <div className="services-head">
        <h1>
          What I <span>Build & Fix</span>
        </h1>
        <p>
          Comprehensive tech services for businesses and individuals. From code
          to hardware, I've got you covered.
        </p>
      </div>

      <div className="service-container">
        <div className="services">
          {services.map((service) => (
            <div className="serviceCard" key={service.id}>
              <div className="service-icon">
                {/* Render the icon component here */}
                <service.icon size={30} color="#007bff" />
              </div>
              <div className="service-name">
                <h1>{service.name}</h1>
              </div>
              <div className="service-info">
                <p>{service.info}</p>
              </div>
              <div className="service-link">
                <div className="cs-line"></div>
                <p>
                  <a href="#">Learn more </a>→
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
