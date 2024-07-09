import React, { useState } from 'react';

const Send = () => {
  const [amount, setAmount] = useState('');
  const [fee, setFee] = useState('0.01'); // Изначальное значение для примера

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
    // Пример расчета нового значения fee на основе amount
    // В реальном приложении это будет зависеть от логики вашего приложения
    setFee((parseFloat(value) * 0.01).toFixed(2)); // Простой пример расчета fee
  };

  return (
    <div>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="text" value={amount} onChange={handleAmountChange} />
      <br />
      <label htmlFor="fee">Fee</label>
      <input id="fee" type="text" value={fee} readOnly />
    </div>
  );
};

export default Send;
