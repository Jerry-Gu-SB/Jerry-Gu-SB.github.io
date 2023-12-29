import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-[500px] bg-blue-500 flex flex-col items-center justify-center text-white">
      <img src={require('./images/profile.jpg')} alt="Your face" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl mb-2">Jerry Gu</h1>
      <p className="text-center">IT'S JOEVER IT'S JOEVER IT'S JOEVER</p>
    </div>
  );
};

export default Home;
