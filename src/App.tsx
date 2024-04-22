import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        Установить фокус
      </button>
    </>
  );
}

export default App;
