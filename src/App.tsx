import { useState, useEffect } from "react";

const ButtonClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Button clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default ButtonClickCounter;
