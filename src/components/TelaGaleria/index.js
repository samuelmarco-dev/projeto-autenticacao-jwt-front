import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import { ContextUser } from '../api/contextUser';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container } from './style.js';

function TelaGaleria() {
    const [imagens, setImagens] = useState([]);
    
    const navigate = useNavigate();
    const URL = process.env.REACT_API;
    const { dadosUsuario } = useContext(ContextUser);

    useEffect(() => {
        if(dadosUsuario.token === null && localStorage.getItem('token') === null){
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

    return (  
        <Container>
            <header>
                <h1>Seja bem-vindo(a), João</h1>
                <IoIosAddCircleOutline className='icon' onClick={()=>navigate('/image')}/>
            </header>
            <main>
                <h1>Galeria de fotos</h1>
                <section>
                    {
                        imagens.length > 0 ?
                        <>
                            <div>
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                                <p>Data: 01/05/2022</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                                <p>Data: 01/05/2022</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                                <p>Data: 01/05/2022</p>
                            </div>
                        </>
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