import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";


test('renders Greeting component with correct text', () => {

    // Рендеринг компонента
    render(<Greeting greeting="Hello World" />);
   
    // Поиск загловка
    const headingElement = screen.getByText(/Greeting/i);

    // проверка искомого теста
    expect(headingElement).toBeInTheDocument()

  });