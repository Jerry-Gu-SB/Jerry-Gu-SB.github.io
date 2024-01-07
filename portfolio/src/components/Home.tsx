import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Home: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      background: {
        position: "top",
        color: {
          value: "#031629",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          attract: {
            distance: 1000,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#a67584",
        },
        links: {
          color: "#d4e2ed",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 3, max: 7 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="h-[500px] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
      )}
      <img
        src={require("./images/profile.jpg")}
        alt="Your face"
        className="w-32 h-32 rounded-full mb-4 mt-10"
      />
      <div className="w-2/3 h-auto bg-gray">
        <h1 className="text-4xl mb-2 ">Jerry Gu</h1>
        <p className="text-center text-2xl">Hey there! I'm a current student at the University of Virginia School of Engineering studying computer science looking for an internship for Summer 2024. 
        I've created games, websites, and more so far in my software engineer journey and I'm always looking for opportunities to let me express myself in my work!
        In my free time I love to create videos on YouTube and practice Kendo. I'm always looking for new things to learn and new people to meet, so feel free to use the contact form or links below to get in touch with me!
        </p>
      </div>
      <div className="mt-4 flex space-x-2">
        <a
          href="https://www.linkedin.com/in/jerry-gu-uva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./images/linkedin.png")}
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://github.com/Jerry-Gu-SB/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./images/github.png")}
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a
          href={require("./misc-files/Jerry_Gu_Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./images/resume.png")}
            alt="Resume"
            className="w-8 h-8"
            />
          
        </a>
      </div>
    </div>
  );
};

export default Home;
