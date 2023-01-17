import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

/*const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children: [
      {
        path: 'calculator',
        element: <Calculator />
      },
      {
        path: 'quote',
        element: <Quote />
      }
    ]
  }
])

createRoot(root).render(
  <RouterProvider router={router} />
)*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
