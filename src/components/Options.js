import styled from "styled-components"
import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

import Teacher from "./Teacher.js";
import Course from "./Course.js";



export default function Options(){
    const {majorId} = useParams();
    const [major,setMajor]= useState()
    const [tests,setTests]= useState()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_HOST}options/majors/${majorId}`).then(response =>{
            setMajor(response.data)
        }).catch(err =>{
            alert(err)
        })
        axios.get(`${process.env.REACT_APP_HOST}tests`).then(response =>{
            const sort = {}
            response.data.forEach(t=>{
                if(sort[t.teacher.id]){
                    sort[t.teacher.id]+=1
                }else{
                    sort[t.teacher.id]=1
                }
            })
            setTests(sort)
        }).catch(err =>{
            alert(err)
        })
    },[majorId])

    const periods=[1,2,3,4,5,6,7,8,9,10]

    if(!major||!tests){
        return <Wrapper>CARREGANDO</Wrapper>
    }
    

    return (
        <Wrapper>
            <Tittle>{major.name}</Tittle>
            <Columns>
                <InnerWrapper>
                    <h2>Professores</h2>
                    {major.teachers.map(teacher=> <Teacher name={teacher.name} id={teacher.id} quantity={tests[teacher.id]}></Teacher>)}
                </InnerWrapper>
                <InnerWrapper>
                    <h2>Matérias</h2>
                    
                    {periods.map(p=> <>
                        <p>{p} periodo</p>
                        {major.courses.filter(c=>c.period===p).map(course=> <Course name={course.name} id={course.id}></Course>)}
                    </>)}
                </InnerWrapper>
            </Columns>
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
`;

export const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    gap:5px;
    p{
        margin-top: 15px;
        color:grey;
    }
    h2{
        color:#1E1834;
        margin-bottom: 20px;
    }
`;

export const Columns = styled.div`
    display:flex;
    gap:50px;
`;

export const Tittle = styled.h1`
    color:#1E1834;
`;