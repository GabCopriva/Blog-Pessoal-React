import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import Home from './Paginas/Home/Home'
import Login from './Paginas/Login/Login'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          </Routes>
          
      <Footer />
    </BrowserRouter>
        

  );
}

export default App
