import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TelaCadastro from './TelaCadastro';
import TelaGaleria from './TelaGaleria';
import TelaImage from './TelaImage';
import TelaInicial from './TelaInicial';

import ContextUser from './api/contextUser';

import '../assets/css/reset.css';

function App() {
    const [dadosUsuario, setDadosUsuario] = useState(null);

    return (  
        <ContextUser.Provider value={{dadosUsuario, setDadosUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/sign-in' element={<TelaInicial/> }/>
                    <Route path='/sign-up' element={<TelaCadastro/> }/>
                    <Route path='/' element={<TelaGaleria/> }/>
                    <Route path='/image' element={<TelaImage/> }/>
                </Routes>
            </BrowserRouter>
        </ContextUser.Provider>
    );
}

export default App;