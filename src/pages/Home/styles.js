import styled from "styled-components";
import backgroundImg from "../../assets/teste.png"

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};

    height: 100vh;

    .global {
        margin: 0 123px;
        margin-top: 150px;
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE};
    
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;

            
            h2 {
                margin-top: 90px;
                font-size: 38px;
                color: white;
            }

            p {
                max-width: 70%;
                margin-top: 35px;
                text-align: center;
                color: ${({theme}) => theme.COLORS.COLOR_TEXT};
            }
            
            span {
                margin-top: 40px;
                
                color: ${({theme}) => theme.COLORS.COLOR_TEXT};
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 300px;
                height: 50px;
                margin-top: 40px;
                background: none;
                color: ${({theme}) => theme.COLORS.COLOR_TEXT};
                border: solid 1px white;
                border-radius: 25px;
            }
        }
    }

    #sobre {
        margin-top: 120px;
        display: flex;
        gap: 300px;
        padding: 0 123px;
        height: 100vh;
    }
    
    .sobre-content {
        font-size: 25px;
        width: 30%;
        color: ${({theme}) => theme.COLORS.BACKGROUND_BLUE};
    
        .ball {
            margin-top: 70px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLUE};
        }
    }

    .sobre-p {
        width: 40%;
        text-align: justify;
        line-height: 30px;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};

        :nth-child(2) {
            margin-top: 45px;
        }

        button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 400px;
                height: 50px;
                margin-top: 40px;
                background: none;
                color: ${({theme}) => theme.COLORS.BACKGROUND_BLUE};
                border: solid 1px blue;
                border-radius: 25px;
            }
    }
    
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    height: 100%;
`;