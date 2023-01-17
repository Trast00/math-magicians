import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* const router = createBrowserRouter([
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
) */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
