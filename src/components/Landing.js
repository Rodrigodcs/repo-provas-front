import styled from "styled-components"
import axios from "axios"
import { useEffect,useState } from "react"

import Major from "./Major.js"

export default function Landing(){
    const [majors,setMajors]=useState([])
    useEffect(()=>{
        axios.get(`https://repo-provas-back.herokuapp.com/options/majors`).then(response =>{
        //axios.get(`https://repo-provas-back.herokuapp.com/test`).then((response)=>{
            setMajors(response.data)
        }).catch(err =>{
            alert(err)
        })
    },[])

    if(!majors){
        return <Wrapper>CARREGANDO</Wrapper>
    }
    return (
        <Wrapper>
            <h1>ESCOLHA UM CURSO</h1>
            {majors.map(major=> <Major key={major.id} name={major.name} id={major.id}></Major>)}
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    margin-top: 120px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:100%;
    h1{
        color:#1E1834;
    }
`;