import { BrowserRouter, Router, Route } from 'react-router-dom';

import TelaCadastro from './TelaCadastro';
import TelaGaleria from './TelaGaleria';
import TelaImage from './TelaImage';
import TelaInicial from './TelaInicial';

import '../assets/css/reset.css';

function App() {
    return (  
        <BrowserRouter>
            <Router>
                <Route path='/sign-in' element={<TelaInicial/> }/>
                <Route path='/sign-up' element={<TelaCadastro/> }/>
                <Route path='/' element={<TelaGaleria/> }/>
                <Route path='/image' element={<TelaImage/> }/>
            </Router>
        </BrowserRouter>
    );
}

export default App;