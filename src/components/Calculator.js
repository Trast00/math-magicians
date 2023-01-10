import React from 'react';
import calculate from './logic/calculate';

export default class Calcuclator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    this.setState({});
  }

  onClickBtn = (event) => {
    const btnName = event.currentTarget.textContent;
    this.setState((state) => calculate(state, btnName));
  }

  getResult = () => {
    const { next, total } = this.state;
    return next || (total || '0');
  }

  render() {
    return (
      <main className="calculator">
        <div className="flex-center result">{this.getResult()}</div>
        <div className="calculator-btns">
          <button type="button" onClick={this.onClickBtn}>AC</button>
          <button type="button" onClick={this.onClickBtn}>+/-</button>
          <button type="button" onClick={this.onClickBtn}>%</button>
          <button type="button" onClick={this.onClickBtn} className="backgroundOrange">&divide;</button>

          <button type="button" onClick={this.onClickBtn}>7</button>
          <button type="button" onClick={this.onClickBtn}>8</button>
          <button type="button" onClick={this.onClickBtn}>9</button>
          <button type="button" onClick={this.onClickBtn} className="backgroundOrange">x</button>

          <button type="button" onClick={this.onClickBtn}>4</button>
          <button type="button" onClick={this.onClickBtn}>5</button>
          <button type="button" onClick={this.onClickBtn}>6</button>
          <button type="button" onClick={this.onClickBtn} className="backgroundOrange">-</button>

          <button type="button" onClick={this.onClickBtn}>1</button>
          <button type="button" onClick={this.onClickBtn}>2</button>
          <button type="button" onClick={this.onClickBtn}>3</button>
          <button type="button" onClick={this.onClickBtn} className="backgroundOrange">+</button>

          <button type="button" onClick={this.onClickBtn} className="btn-zero">0</button>
          <button type="button" onClick={this.onClickBtn}>.</button>
          <button type="button" onClick={this.onClickBtn} className="backgroundOrange">=</button>
        </div>
      </main>
    );
  }
}
