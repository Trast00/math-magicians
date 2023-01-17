import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const RootLayout = () => (
  <div className="root-layout">
    <Navbar />
    <Outlet />
  </div>
);

export default RootLayout;
