import React from 'react';


const Home: React.FC = () => {
  return (
    <div className="h-[500px] bg-blue-500 flex flex-col items-center justify-center text-white">
      <img src={require('./images/profile.jpg')} alt="Your face" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl mb-2">Jerry Gu</h1>
      <p className="text-center">IT'S JOEVER IT'S JOEVER IT'S JOEVER</p>
      <div className="mt-4 flex space-x-2">
        <a href="https://www.linkedin.com/in/jerry-gu-uva/" target="_blank" rel="noopener noreferrer">
          <img src={require("./images/linkedin.png")} alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://github.com/Jerry-Gu-SB/" target="_blank" rel="noopener noreferrer">
          <img src={require("./images/github.png")} alt="GitHub" className="w-8 h-8" />
        </a>
        <a href={require("./misc-files/Jerry_Gu_Resume.pdf")} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
