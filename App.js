import React from 'react';
import {Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Home from './components/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
  );
}

export default App;
