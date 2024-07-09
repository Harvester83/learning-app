import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Send from './Send';

test('Fee element value changes after amount value changes', () => {
  // Рендеринг компонента
  render(<Send />);

  // Находим поле ввода для Amount и вводим значение '1'
  const amountInput = screen.getByLabelText<HTMLInputElement>('Amount');
  userEvent.type(amountInput, '1');

  expect(screen.getByLabelText<HTMLInputElement>('Fee').value).toBe('0.01');
});
