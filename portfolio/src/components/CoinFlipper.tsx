import React, { useState } from 'react';
import Coin from './Coin';

const CoinFlipper: React.FC = () => {
  const [result, setResult] = useState('');
  const [flipping, setFlipping] = useState(false);
  const [flipCount, setFlipCount] = useState(0); // Track the number of flips

  const coinToss = () => {
    setFlipping(true);
    const isHeads = Math.random() < 0.5;
    const newFlipCount = flipCount + (isHeads ? 1 : 2); // Increment by 1 for heads, 2 for tails

    setTimeout(() => {
      setResult(isHeads ? 'heads' : 'tails');
      setFlipCount(newFlipCount);
      setFlipping(false);
    }, 0); // This duration should match the half-duration of your flip animation
  };

  const coinClass = flipping ? 'flipping' : result;
  console.log(result);
  return (
    <div className="CoinFlipper">
      <Coin side={coinClass} flipCount={flipCount} />
      <h1>Flip a coin</h1>
      <button id="btn" onClick={coinToss}>
        Coin Toss
      </button>
        <p>{result}</p>
    </div>
  );
};

export default CoinFlipper;
