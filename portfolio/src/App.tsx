// App.tsx
import React from 'react';
import CoinFlipper from './components/CoinFlipper';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Coin Flipper</h1>
      {/* Forked from https://codesandbox.io/p/sandbox/coin-flip-react-example-01j7q?file=%2Fsrc%2FApp.js%3A32%2C17 */}
      <CoinFlipper /> 
    </div>
  );
};

export default App;
