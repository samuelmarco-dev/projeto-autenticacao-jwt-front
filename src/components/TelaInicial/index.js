import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Botao from '../utils/Botao.js'
import Paragrafo from '../utils/Paragrafo.js'

import ContextUser from '../api/contextUser.js';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from './style.js';

import dotenv from 'dotenv';
dotenv.config();

function TelaInicial() {
    const arrayInputs = ['E-mail', 'Senha'];
    const [dadosLogin, setDadosLogin] = useState({
        email: '', password: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const URL = process.env.REACT_API; 
    const { dadosUsuario, setDadosUsuario } = useContext(ContextUser);

    function limparDadosLogin(){
        setDadosLogin({
            email: '', password: ''
        })
    }

    async function postDadosLogin(){
        try {
            const objLogin = {
                email: dadosLogin.email.trim(),
                password: dadosLogin.password
            };

            const response = await axios.post(`${URL}/sign-in`, objLogin);
            swal('Login realizado com sucesso!');
            setTimeout(()=>{
                const {data} = response;
                setDadosUsuario({...dadosUsuario, 
                    token: data.token, 
                    email: dadosLogin.email,
                    name: data.name
                });
                localStorage('token', data.token);
                localStorage('name', data.name);
                navigate('/');
            }, 1000);
        } catch (error) {
            swal('Erro ao fazer login');
            setTimeout(()=>{
                setDisable(false);
                setLoading(false);
                limparDadosLogin();
            }, 1000);
        }
    }

    console.log(dadosLogin, dadosUsuario); //apagar

    function enviarDados(e){
        e.preventDefault();
        setDisable(true);
        setLoading(true);

        postDadosLogin();
    }

    return (  
        <Container>
            <header>Your Memories</header>
            <form onSubmit={enviarDados}>
                <div className='inputs'>
                    <input type="email" placeholder={arrayInputs[0]} required
                    value={dadosLogin.email} disabled={disable}
                    onChange={(e)=>setDadosLogin({...dadosLogin, email: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[1]} required
                    value={dadosLogin.password} disabled={disable}
                    onChange={(e)=>setDadosLogin({...dadosLogin, password: e.target.value})} />
                </div>
                <div className='botao'>
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} />
                        : <Botao tipo='submit' conteudo='Entrar' disabled={disable} />
                    }
                </div>
            </form>
            <Link to='/sign-up'>
                <Paragrafo conteudo='Não possui cadastro? Faça agora'/>
            </Link>
        </Container>
    );
}

export default TelaInicial;