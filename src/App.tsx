import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import CadastroUsuario from './Paginas/cadastroUsuario/CadastroUsuario';
import Home from './Paginas/Home/Home'
import Login from './Paginas/Login/Login'
import './App.css'
import ListaTema from './components/Temas/ListaTema/ListaTema';
import ListaPostagem from './components/Postagens/ListaPostagem/ListaPostagem';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

        <Routes> 
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />
          
          <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

          <Route path="/temas" element={<ListaTema/>} />

          <Route path="/posts" element={<ListaPostagem/>} />
          
          </Routes>
          
      <Footer />
    </BrowserRouter>
        

  );
}

export default App
