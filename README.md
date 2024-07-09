

## Тестирование
юнит тесты самый простой пример

Then, create a file named sum.test.js. This will contain our actual test:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### Настройка окружение тестрование (React)   

Cannot find name 'test'. Do you need to install type definitions for a test runner? Try
`npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.ts(2582)


[Как я перестал беспокоиться и полюбил тестирование React-компонентов](https://habr.com/en/companies/elbrusbootcamp/articles/651033/)


```js

import { render, screen } from '@testing-library/react';
import Send from './index';
 
test('From element: exist in the DOM', () => {
  render(<Send />)
  expect(screen.getByLabelText<HTMLSelectElement>('From')).toBeInTheDocument();
});

```

Тест — это функция, которая принимает два аргумента: название теста и callback-функцию с логикой.

Внутри callback необходимо вызвать функцию render, которая импортируется из библиотеки и принимает тестируемый React-компонент.

Дальше идет главная конструкция для теста — функция expect, которую можно описать так:

expect(<реальное состояние>).toBe(<ожидаемое состояние>);

В данном случае нам необходимо убедиться, что выпадающее меню с кошельками <реальное состояние> было отрисовано в HTML-разметке <ожидаемое состояние>.

Чтобы получить этот элемент разметки, необходимо воспользоваться методами объекта screen, который мы также импортировали из библиотеки. Он содержит различные методы для взаимодействия с DOM-деревом. В данном случае мы вызываем метод «getByLabelText», который осуществляет поиск элемента, который ассоциирован с тегом <label>, в котором есть текст «From».

Выполнив поиск элемента, дописываем логическое выражение. В данном случае вызовом функции .toBeInTheDocument().

Поисковые методы по DOM-дереву, которые предоставляет screen, делятся на три категории: 

1. getBy — поиск элемента на странице;

2. queryBy — поиск элемента, которого нет на странице;

3. findBy — поиск элемента на странице, который зависит от асинхронного кода.


Сборщик имеет следующую файловую структуру:


## useContext

useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().

```js
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

``
