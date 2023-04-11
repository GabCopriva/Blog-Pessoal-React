import { useState } from 'react'
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import Home from './Paginas/Home/Home'
import './App.css'

function App() {
  return (
    <>
     <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App
