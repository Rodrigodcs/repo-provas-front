import styled from "styled-components"
import axios from "axios"
import { useEffect,useState } from "react"

import Major from "./Major.js"

export default function Landing(){
    const [majors,setMajors]=useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_HOST}options/majors`).then(response =>{
            setMajors(response.data)
        }).catch(err =>{
            alert(err)
        })
    },[])

    if(majors.length===0){
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