import React from 'react';

export default class Calcuclator extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <main className='calculator'>
        <Result />
        <div className='calculator-btns'>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className='backgroundOrange'>/</button>
          
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='backgroundOrange'>x</button>
          
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className='backgroundOrange'>-</button>
          
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className='backgroundOrange'>+</button>
          
          <button className='btn-zero'>0</button>
          <button>.</button>
          <button className='backgroundOrange'>=</button>
        </div>
      </main>
    )
  }
}

const Result = () => {
  return <div className='flex-center result'>0</div>
}