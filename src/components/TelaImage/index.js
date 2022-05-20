import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Botao from '../utils/Botao.js'
import Paragrafo from '../utils/Paragrafo.js'

import ContextUser from '../api/contextUser.js';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from './style.js';

function TelaImage() {
    const arrayInputs = ['URL da imagem'];
    const [dadosImagem, setDadosImagem] = useState({
        image: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const URL = 'http://localhost:5000'; 
    const { dadosUsuario } = useContext(ContextUser);
    
    function limparDadosImage(){
        setDadosImagem({ image: '' });
    }

    async function postDadosImagem(){
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${dadosUsuario.token ? dadosUsuario.token : localStorage.getItem('token')}`
                }
            }

            await axios.post(`${URL}/photos`, dadosImagem, config);
            swal('Imagem cadastrada com sucesso!');
            setTimeout(()=>{
                navigate('/');
            }, 1000);
        } catch (error) {
            swal('Erro ao cadastrar imagem. Tente novamente');
            setTimeout(() => {
                setDisable(false);
                setLoading(false);
                limparDadosImage();
                navigate('/');
            } , 1000);
        }
    }

    function enviarDados(e){
        e.preventDefault();
        setDisable(true);
        setLoading(true);

        postDadosImagem();
    }
    
    return (  
        <Container>
            <header>Adicionar imagem</header>
            <form onSubmit={enviarDados}>
                <div className='inputs'>
                    <input type="text" placeholder={arrayInputs[0]} required
                    value={dadosImagem.image} disabled={disable}
                    onChange={(e)=>setDadosImagem({...dadosImagem, image: e.target.value})} />
                </div>
                <div className='botao'>
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} />
                        : <Botao tipo='submit' conteudo='Adicionar Imagem' disabled={disable} />
                    }
                </div>
            </form>
            <Link to='/'>
                <Paragrafo conteudo='Voltar para galeria?'/>
            </Link>
        </Container>
    );
}

export default TelaImage;