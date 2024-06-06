import React, { useState, useEffect } from 'react';

const ButtonClickCounter = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Button clicked ${clicks} times`);
  }, [clicks]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        setClicks(clicks + 1);
      }}>
        Increase Count
      </button>
    </div>
  );
};

export default ButtonClickCounter;
