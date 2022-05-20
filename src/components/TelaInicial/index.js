import { Container } from './style.js';

function TelaInicial() {

    function postDadosLogin(e){
        e.preventDefault();
    }

    return (  
        <Container>
            <p>Nome do App</p>
            <form onSubmit={postDadosLogin}>
                <div className='inputs'>
                    <input type="email" />
                    <input type="password" />
                </div>
                <div className='botoes'>
                    <button type='submit' />
                </div>
            </form>
            <p>Não possui cadastro? Faça cadastro agora</p>
        </Container>
    );
}

export default TelaInicial;