import React from 'react';
import { Link } from 'react-scroll';

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center transform transition-transform duration-500 ease-in-out hover:translate-x-10">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Jerry.
          <br className="hidden lg:inline-block" />I love to build amazing
          apps.
        </h1>
        <p className="mb-8 leading-relaxed">
          HOLD UP LEMME COOK BABYYYYYYYYYYYYYYYYYY THAT'S WHAT I'M TALKING ABOUT
          SOMEBODY PLEEEEEEEEEEEEEASE GIVE ME A JOB
        </p>
        <div className="flex justify-center">
          <Link
            to="contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            smooth={true}
            duration={500}
          >
            Work With Me
          </Link>
          <Link
            to="projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            smooth={true}
            duration={500}
          >
            See My Past Work
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./coding.svg"
        />
      </div>
    </section>
  );
}

export default About;
