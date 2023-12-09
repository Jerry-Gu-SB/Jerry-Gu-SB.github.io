// App.tsx
import React from 'react';
import CoinFlipper from './components/CoinFlipper';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Coin Flipper</h1>
      <CoinFlipper />
    </div>
  );
};

export default App;
