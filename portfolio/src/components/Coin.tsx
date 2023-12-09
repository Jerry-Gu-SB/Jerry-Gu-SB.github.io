import React from 'react';
import './Coin.css';

interface CoinProps {
  side: string;
  flipCount: number;
}

const Coin: React.FC<CoinProps> = ({ side, flipCount }) => {
  const startFlip = flipCount % 2 === 0 ? 'rotateX(0deg)' : 'rotateX(180deg)';
  const endFlip = `rotateX(${flipCount * 180}deg)`;

  return (
    <div id="coin" className={side} style={{ '--start-flip': startFlip, '--end-flip': endFlip } as React.CSSProperties}>
      <div className="side-a">
        <h2>TAIL</h2>
      </div>
      <div className="side-b">
        <h2>HEAD</h2>
      </div>
    </div>
  );
};

export default Coin;
