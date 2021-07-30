import styled from "styled-components"
import {Link} from "react-router-dom"
import axios from "axios"

import Course from "./Course.js"


export default function Courses(){
    
    return (
        <Wrapper>
            <Course/>
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