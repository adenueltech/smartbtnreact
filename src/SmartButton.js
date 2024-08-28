import React, { useState } from 'react';
import './SmartButton.css'; // Ensure this path is correct

const SmartButton = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };



  const handleReset = () => {
    setCount(0);
  };

  return (
    
    <div className="container">
        <h2 > SmartButton App  using React js</h2>
        
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="button-container">
        <button className="count-button" onClick={handleCount}>
          Count
        </button>

        <button className="count-button" onClick={handleDecrease}>
          Decrease
        </button>


        
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SmartButton;
