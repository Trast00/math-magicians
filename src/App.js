import React from 'react';
import {createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from "react-router-dom";
import './App.css';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home'
import Calculator from './pages/Calculator';
import Quote from './pages/Quote'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='calculator' element={<Calculator />} />
    <Route path='quote' element={<Quote />} />
  </Route>
))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RouterProvider router={router} />
    );
  }
}

export default App;
