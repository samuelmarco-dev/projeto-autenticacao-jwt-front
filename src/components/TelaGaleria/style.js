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
    overflow-y: scroll;

    header{
        width: 100%;
        height: 11vh;
        position: fixed;
        padding: 0 23px;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        background-color: rgb(21,72,234);
        
        h1{
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
        }

        .icon{
            font-size: 30px;
        }
    }

    main{
        width: 100%;
        height: 90vh;
        margin-top: 15vh;

        h1{
            width: 100%;
            height: 7vh;
            font-weight: 700;
            font-size: 22px;
            line-height: 18px;
            color: #FFFFFF;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        section{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-content: center;    
            padding: 0 23px;
            margin-top: 12px;

            .galeria-vazia{
                width: 100%;
                height: calc(100vh - 11vh - 15vh - 12px - 7vh);
                display: flex;
                justify-content: center;
                align-items: center;
                
                p{
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 28px;
                    color: #FFFFFF;
                    margin-top: 20px;
                    text-align: center;
                }
            }
            
            div{
                width: 100%;
                height: 180px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                background-color: #DCDCDC;
                border-radius: 10px;
                margin-bottom: 12px;

                img{
                    width: 100%;
                    height: 80%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                p{
                    font-size: 18px;
                    line-height: 18px;
                    font-weight: 400;
                    padding: 5px 0;
                }
            }
        }
    }
`;