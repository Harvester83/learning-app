import { useState, useEffect } from "react";
import Greeting from "./components/Greeting";

const ButtonClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Button clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <Greeting />
    </div>
  );
};

export default ButtonClickCounter;
