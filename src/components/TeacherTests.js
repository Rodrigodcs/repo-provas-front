import styled from "styled-components"
import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

import Test from "./Test.js"

export default function TeacherTests(){
    const {teacherId} = useParams();
    const [tests,setTests]= useState()
    const [types,setTypes]= useState()
    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_HOST}tests/teacher/${teacherId}`).then(response =>{
            setTests(response.data)
        }).catch(err =>{
            alert(err)
        })
        axios.get(`${process.env.REACT_APP_HOST}tests/types`).then(response =>{
            setTypes(response.data)
        }).catch(err =>{
            alert(err)
        })
    },[teacherId])
    if(!tests||!types){
        return <Wrapper>CARREGANDO</Wrapper>
    }
    return (
        <Wrapper>
            {!tests[0]?
                <Tittle>Nenhuma prova cadastrada</Tittle>:
                <Tittle>{tests[0].teacher.name}</Tittle>
            }
            {types.map(type=>
                <>
                    <p>{type.name}</p>
                    {tests.filter(t=> t.type.id===type.id).map(t=> <Test name={t.name} link={t.link} complement={t.course.name}/>)}
                </>
            )}
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    margin-top:120px;
    display:flex;
    align-items: center;
    flex-direction: column;
    width:100%;
    gap:20px;
    p{
        color:grey;
        margin-top: 15px;
    }
`;

export const Tittle = styled.h1`
    color:#1E1834;
`;
