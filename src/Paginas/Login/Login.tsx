import React, { useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UsuarioLogin from '../../models/UsuarioLogin';

import './Login.css';

import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {

    let navigate= useNavigate(); 

    const dispatch = useDispatch();

    const [token, setToken] = useState('');  //hooks que vão manipular o nosso local storage para gravar o token
    const [userLogin, setUserLogin] = useState<UsuarioLogin>({ //useState define como uma determinada variavel será utilizada quando o comp. for renderizado

        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

        //useEffect é um hook de efeito colateral, sempre executa uma função quando o que estiver no seu array é diferente
        useEffect(() => {
            if (token !== '') {
                dispatch(addToken(token));
                navigate('/Home')
            }
        }, [token])

        //função que junto com a setUserLogin irá atualizar o valor inicial da userLogin
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
        
        async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
            e.preventDefault();

            try{
                await login('/usuarios/logar', userLogin, setToken)
                alert('Usuário logado com sucesso!');

            } catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid item xs={6}>
                <img className='imagem' alt="" style={{ width: '800px', height: '400px' }} />
            </Grid>
            <Grid xs={6} alignItems='center'>
                <Box px={20}>

                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                            Entrar
                        </Typography>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastroUsuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;