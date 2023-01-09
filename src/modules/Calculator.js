import React from 'react';

export default class Calcuclator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="calculator">
        <div className="flex-center result">0</div>
        <div className="calculator-btns">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="backgroundOrange">/</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="backgroundOrange">x</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="backgroundOrange">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="backgroundOrange">+</button>

          <button type="button" className="btn-zero">0</button>
          <button type="button">.</button>
          <button type="button" className="backgroundOrange">=</button>
        </div>
      </main>
    );
  }
}
