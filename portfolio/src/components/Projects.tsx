import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectList from "./ProjectList"; // Path to your projects file

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
  };

  // Create an array of boolean values for hover state of each project
  const [isHovered, setIsHovered] = useState(new Array(ProjectList.length).fill(false));

  return (
    <section id="Projects" className="p-10">
      <h2 className="text-4xl mb-10">Projects</h2>
      <Slider {...settings}>
        {ProjectList.map((project, index) => (
          <div 
            key={index} 
            className="relative h-full p-4 hover:child:translate-y-0 hover:child:scale-110" 
            onPointerEnter={() => setIsHovered(prevState => prevState.map((val, idx) => idx === index ? true : val))} 
            onPointerLeave={() => setIsHovered(prevState => prevState.map((val, idx) => idx === index ? false : val))}
          >
            <div
              className={`h-full flex-grow rounded-lg transition-transform duration-300 transform-gpu ${isHovered[index] ? '-translate-y-full scale-110' : ''}`}
            >
              <img src={project.image} alt={project.title} className="rounded-lg w-full h-full object-cover" />
            </div>
            <div className="z-[-10] absolute height top-4 p-4 rounded-lg">
              <h3 className="text-xl">{project.title}</h3>
              <ul className="mt-2 space-y-2">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
