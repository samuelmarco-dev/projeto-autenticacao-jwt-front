import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Botao from '../utils/Botao.js'
import Paragrafo from '../utils/Paragrafo.js'

import { ThreeDots } from 'react-loader-spinner';
import { Container } from '../TelaInicial/style.js';

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirmar Senha'];
    const [dadosCadastro, setDadosCadastro] = useState({
        name: '', email: '', password: '', confirm: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const URL = 'http://localhost:5000'; 

    function limparDadosCadastro(){
        setDadosCadastro({
            email: '', name: '', password: '', confirm: ''
        })
    }

    async function postDadosCadastro(){
        try {
            const objCadastro = {
                name: dadosCadastro.name.trim(),
                email: dadosCadastro.email.trim(),
                password: dadosCadastro.password,
                confirm: dadosCadastro.confirm
            };

            await axios.post(`${URL}/sign-up`, objCadastro);
            swal('Cadastro realizado com sucesso!');
            setTimeout(()=>{
                navigate('/sign-in');
            }, 1000);
            
        } catch (error) {
            swal('Erro ao fazer cadastro');
            setTimeout(()=>{
                setDisable(false);
                setLoading(false);
                limparDadosCadastro();
            }, 1000);
        }
    }

    console.log(dadosCadastro); //apagar

    function enviarDados(e){
        e.preventDefault();
        setDisable(true);
        setLoading(true);

        postDadosCadastro();
    }

    return (  
        <Container>
            <header>Your Memories</header>
            <form onSubmit={enviarDados}>
                <div className='inputs'>
                    <input type="text" placeholder={arrayInputs[0]} required
                    value={dadosCadastro.name} disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})} />

                    <input type="email" placeholder={arrayInputs[1]} required
                    value={dadosCadastro.email} disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})} />

                    <input type="password" placeholder={arrayInputs[2]} required
                    value={dadosCadastro.password} disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})} />

                    <input type="password" placeholder={arrayInputs[3]} required
                    value={dadosCadastro.confirm} disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, confirm: e.target.value})} />
                </div>
                <div className='botao'>
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} />
                        : <Botao tipo='submit' conteudo='Cadastrar' disabled={disable} />
                    }
                </div>
            </form>
            <Link to='/sign-in'>
                <Paragrafo conteudo='Já possui cadastro? Faça login'/>
            </Link>
        </Container>
    );
}

export default TelaCadastro;