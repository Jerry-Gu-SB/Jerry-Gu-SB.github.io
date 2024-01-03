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
          value: "#0d47a1",
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
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
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
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-4xl mb-2">Jerry Gu</h1>
      <p className="text-center">IT'S JOEVER IT'S JOEVER IT'S JOEVER</p>
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
          className="bg-white text-black px-4 py-2 rounded"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
