import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0086FF;

    header{
        width: 100%;
        height: 70px;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }

    .inputs, .botao{
        padding: 0 23px;
    }

    form{
        width: 100%;
        height: auto;
    }

    .inputs{
        width: 100%;
        height: auto;
        margin-top: 24px;

        input{
            width: 100%;
            height: 50px;
            border-radius: 5px;
            margin-bottom: 13px;
            padding: 0 16px;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            text-align: left;
            border: none;
            background-color: #FFFFFF;
        }
    }

    .botao{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            width: 100%;
            height: 46px;
            background-color: rgb(21, 72, 234);
            border-radius: 5px;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    p{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 20px;
        text-align: center;
    }
`;