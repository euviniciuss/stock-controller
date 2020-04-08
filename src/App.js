import React from 'react';

import './global.css';

import Navbar from './components/navbar';
import Routes from './routes';

export default function App() {
  return(
    <>
      <Navbar />
      <Routes />
    </>
  );
};