import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './global.css';

import Navbar from './components/navbar';
import Routes from './routes';

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
};