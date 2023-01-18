import React, { useState } from 'react';
import calculate from '../components/logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickBtn = (event) => {
    const btnName = event.currentTarget.textContent;
    const result = calculate({ total, next, operation }, btnName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const getResult = () => next || (total || '0');

  return (
    <main className="row calculator-wrapper">
      <div className="calculator-histories">
        <h2>Let s do some maths</h2>
      </div>
      <div className="calculator">
        <div className="flex-center result">{getResult()}</div>
        <div className="calculator-btns">
          <button type="button" onClick={onClickBtn} className="backgroundBtns-secondary">AC</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">+/-</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">%</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">&divide;</button>

          <button type="button" onClick={onClickBtn}>7</button>
          <button type="button" onClick={onClickBtn}>8</button>
          <button type="button" onClick={onClickBtn}>9</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">x</button>

          <button type="button" onClick={onClickBtn}>4</button>
          <button type="button" onClick={onClickBtn}>5</button>
          <button type="button" onClick={onClickBtn}>6</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">-</button>

          <button type="button" onClick={onClickBtn}>1</button>
          <button type="button" onClick={onClickBtn}>2</button>
          <button type="button" onClick={onClickBtn}>3</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns">+</button>

          <button type="button" onClick={onClickBtn} className="btn-zero">0</button>
          <button type="button" onClick={onClickBtn} className="backgroundBtns-secondary">.</button>
          <button type="button" onClick={onClickBtn} className="btn-equal">=</button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
