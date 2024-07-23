import React, { useState } from "react";
import useClickOutside from "./hooks/useClickOutside";
import useToggle from "./hooks/useToggle";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, toggleVisible] = useToggle(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const ref = useClickOutside<HTMLDivElement>(handleClose);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <button onClick={toggleVisible}>Toggle</button>

      {isOpen && (
        <div
          ref={ref}
          style={{
            border: "1px solid black",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h2>Modal</h2>
          <p>Click outside this modal to close it.</p>
        </div>
      )}

      <div>
        {isVisible && (
          <>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
