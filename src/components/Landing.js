import styled from "styled-components"
import axios from "axios"
import {Link} from "react-router-dom"

export default function Landing(){
    function testing(){
        axios.get(`http://localhost:4000/4/teachers`).then(response =>{
        //axios.get(`https://repo-provas-back.herokuapp.com/test`).then((response)=>{
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        <Wrapper>
            <Button onClick={()=>testing()}>
                    TESTAR
            </Button>
            <Link to="/add-test">
                <Button>
                    Adicionar
                </Button>
            </Link>
            <Link to="/options">
                <Button>
                    Buscar
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