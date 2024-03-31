
import { useEffect, useRef } from "react";
import "./App.css";

function App() {

  // Создаем ссылку с помощью хука useRef
  const inputRef = useRef<HTMLInputElement>(null);

  // Пример использования ссылки
  useEffect(() => {
    // Устанавливаем фокус на элемент при монтировании компонента

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Пустой массив зависимостей означает, что эффект будет за

  return (
    <>
      {/* Привязываем ссылку к элементу input */}
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>Установить фокус</button>
    </>
  );
}

export default App;
