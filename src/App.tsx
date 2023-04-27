import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer';
import CadastroUsuario from './Paginas/cadastroUsuario/CadastroUsuario';
import Home from './Paginas/Home/Home'
import Login from './Paginas/Login/Login'
import ListaTema from './components/Temas/ListaTema/ListaTema';
import ListaPostagem from './components/Postagens/ListaPostagem/ListaPostagem';
import DeletarTema from './components/Temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/Postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/Temas/cadastroTema/CadastroTema';
import CadastrarPostagem from './components/Postagens/cadastrarPostagem/CadastrarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  return (
    <Provider store = {store}>
    <ToastContainer />
    <BrowserRouter>

      <Navbar />

        <div style={{ minHeight: '100vh' }}>

        <Routes> 
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          
          <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

          <Route path="/temas" element={<ListaTema/>} />

          <Route path="/posts" element={<ListaPostagem/>} />

          <Route path="/formularioPostagem" element={<CadastrarPostagem/>} />

          <Route path="/formularioPostagem/:id" element={<CadastrarPostagem/>} />

          <Route path="/formularioTema" element={<CadastroTema/>} />

          <Route path="/formularioTema/:id" element={<CadastroTema/>} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>} />
          
          <Route path="/deletarTema/:id" element={<DeletarTema/>} />
        </Routes>

        </div>
          
      <Footer />
    </BrowserRouter>
  </Provider>

  );
}

export default App
