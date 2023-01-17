import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home'
import Calculator from './pages/Calculator';
import Quote from './pages/Quote'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter className="App">
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
