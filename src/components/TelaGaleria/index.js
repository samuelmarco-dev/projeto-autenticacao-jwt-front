import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import ContextUser from '../api/contextUser.js';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container } from './style.js';

function TelaGaleria() {
    const [imagens, setImagens] = useState([]);
    
    const navigate = useNavigate();
    const URL = 'http://localhost:5000';
    const { dadosUsuario } = useContext(ContextUser);

    useEffect(() => {
        if(localStorage.getItem('token') === null){
            swal('Você precisa estar logado para acessar essa página');
            setTimeout(() => {
                navigate('/sign-in');
            } , 1000);
        }
        getImagens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getImagens() {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${dadosUsuario.token ? dadosUsuario.token : localStorage.getItem('token')}`
                }
            };

            const response = await axios.get(`${URL}/photos`, config);
            setImagens(response.data);
        } catch (error) {
            swal('Erro ao carregar imagens. Tente novamente');
            setTimeout(() => {
                navigate('/sign-in');
            } , 1000);
        }
    }

    function nomeProprio(nomeProprio) {
        return `Seja bem-vindo(a), ${nomeProprio.charAt(0).toUpperCase() + nomeProprio.slice(1)}`;
    }

    return (  
        <Container>
            <header>
                <h1>{nomeProprio(localStorage.getItem('name'))}</h1>
                <IoIosAddCircleOutline className='icon' onClick={()=>navigate('/image')}/>
            </header>
            <main>
                <h1>Galeria de fotos</h1>
                <section>
                    {
                        imagens.length > 0 ?
                        imagens.map(imagem => {
                            const { _id, image, date } = imagem;
                            return(
                                <div key={_id}>
                                    <img src={image} alt='Imagem'/>
                                    <p>Data: {date}</p>
                                </div>
                            )
                        })
                        : 
                        <article className='galeria-vazia'>
                            <p>Não há fotos para serem exibidas. Cadastre suas fotos!</p>
                        </article>
                    }
                </section>
            </main>
        </Container>
    );
}

export default TelaGaleria;