import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Routes>
      <Route exact path="/" element={<><Header /><Home /></>} />
      <Route exact path="/checkout" element={<><Header /><Checkout /></>} />
    </Routes>
  );
}

export default App;
