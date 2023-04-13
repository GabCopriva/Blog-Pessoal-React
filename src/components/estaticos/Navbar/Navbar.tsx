import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Navbar.css';

function Navbar() {
  return (
    <AppBar position="static" className='bg-menu'>
      <Toolbar className='container'>
        <Typography className='title' variant="h6">
          Blog Pessoal - Gabriel Copriva
        </Typography>
        <Typography className='home' variant='h6'>
          Home
        </Typography>
        <Typography className='post' variant='h6'>
          Postagens
        </Typography>
        <Typography className='tema' variant='h6'>
          Tema
        </Typography>
        <Typography className='cadastrar' variant='h6'>
          Cadastrar Tema
        </Typography>
        <Typography className='logout' variant='h6'>
          Logout
        </Typography>
        
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;