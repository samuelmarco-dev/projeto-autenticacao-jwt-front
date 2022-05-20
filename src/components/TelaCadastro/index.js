import { Container } from '../TelaInicial/style.js';

function TelaCadastro() {

    function postDadosLogin(e){
        e.preventDefault();
    }

    return (  
        <Container>
            <p>Nome do App</p>
            <form onSubmit={postDadosLogin}>
                <div className='inputs'>
                    <input type="text" />
                    <input type="email" />
                    <input type="password" />
                    <input type="password" />
                </div>
                <div className='botoes'>
                    <button type='submit' />
                </div>
            </form>
            <p>Já possui cadastro? Faça login agora</p>
        </Container>
    );
}

export default TelaCadastro;