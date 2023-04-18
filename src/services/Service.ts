import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-qa3w.onrender.com/'
})          //https://blogpessoal-qa3w.onrender.com/usuarios/logar

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDados: any) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

