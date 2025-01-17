import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Experiments from './pages/Experiments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/experiments" element={<Experiments />} />
    </Routes>
  );
}

export default App;
