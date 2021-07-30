import styled from "styled-components"
import {Link} from "react-router-dom"
import axios from "axios"


export default function Options(){
    
    return (
        <Wrapper>
            <Link to="/teachers">
                <Button>
                    Professores
                </Button>
            </Link>
            <Link to="/courses">
                <Button>
                    Matéria
                </Button>
            </Link>
        </Wrapper>
    )
}


export const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:100%;
    height: 100vh;
`;

export const Button = styled.button`
    width:100px;
    height: 50px;
    background-color:red;
`;