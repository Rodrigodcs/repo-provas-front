import styled from "styled-components"
import {Link} from "react-router-dom"
import axios from "axios"

import Teacher from "./Teacher.js"


export default function Teachers(){
    
    return (
        <Wrapper>
            <Teacher/>
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