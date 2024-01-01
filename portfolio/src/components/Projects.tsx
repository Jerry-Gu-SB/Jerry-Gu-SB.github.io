import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectList from './ProjectList'; // Path to your projects file

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

  return (
    <section className="p-10">
      <h2 className="text-4xl mb-10">Projects</h2>
        <Slider {...settings}>
          {ProjectList.map((project, index) => (
            <div key={index} className="relative p-4">
              <div className={`bg-cover bg-center flex-grow rounded-lg p-4 hover:bg-gray-400 transition-colors duration-300`}>
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
