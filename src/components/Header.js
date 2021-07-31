import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Header(){

    return (
        <Wrapper>
            <Link to="/">
                <Logo>
                    REPO PROVAS
                </Logo>
            </Link>
            <Link to="/add-test">
                <Button>
                    Adicionar uma Prova
                </Button>
            </Link>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    height: 100px;
    padding:0 20px;
    background-color: #1E1834;
    a{
        text-decoration: none;
        color:#BFACCA;
    }
`;

export const Logo = styled.h1`
    font-size: 30px;
`;

export const Button = styled.button`
    width:80px;
    height:80px;
    color:#1E1834;
    background-color: #727C98;
`;