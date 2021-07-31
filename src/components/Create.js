import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"


export default function Create(){
    const [testName, setTestName] = useState("")
    const [pdfLink,setPdfLink]=useState("")
    const [testType,setTestType]=useState("")
    const [courseId,setCourseId]=useState("")
    const [teacherId,setTeacherId]=useState("")

    const [types,setTypes]=useState()
    const [majors,setMajors]=useState()
    const [courses,setCourses]=useState()
    const [teachers,setTeachers]=useState()
    const history = useHistory()


    useEffect(()=>{
        axios.get(`http://localhost:4000/options/majors`).then(response =>{
            setMajors(response.data)
        }).catch(err =>{
            console.log(err)
        })
        axios.get(`http://localhost:4000/tests/types`).then(response =>{
            setTypes(response.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])
    
    function sendTest(e){
        e.preventDefault()
        const body={
            testName,
            pdfLink,
            testType: parseInt(testType),
            courseId: parseInt(courseId),
            teacherId:parseInt(teacherId)
        }

        axios.post(`http://localhost:4000/test`,body).then(response =>{
            history.push("/")
        }).catch(err =>{
            console.log(err)
        })
    }

    function majorSelected(e){
        axios.get(`http://localhost:4000/options/majors/${e.target.value}`).then(response =>{
            setCourses(response.data.courses)
        }).catch(err =>{
            console.log(err)
        })
    }

    function courseSelected(e){
        setCourseId(e.target.value)
        axios.get(`http://localhost:4000/options/courses/${e.target.value}`).then(response =>{
            setTeachers(response.data.teachers)
        }).catch(err =>{
            console.log(err)
        })
    }

    if(!majors || !types){
        return <Tittle>Insira os dados da prova</Tittle>
    }

    return (
        <Wrapper>
            <Tittle>Insira os dados da prova</Tittle>
            <Form onSubmit={sendTest}>
                <Input type="text" placeholder="nome da prova" value={testName} onChange={e=>setTestName(e.target.value)}></Input>
                <Input type="text" placeholder="link do pdf" value={pdfLink} onChange={e=>setPdfLink(e.target.value)}></Input>
                <h3>Tipo da prova:</h3>
                <div>
                    
                    {types.map(t=>
                        <Radio>
                            <input type="radio" id={t.name} name="test_type" value={t.id} onChange={e=>setTestType(e.target.value)}></input>
                            <label for={t.name}>{t.name}</label>
                        </Radio>
                    )}
                </div>
                <h3>Selecione o curso:</h3>
                <div>
                    
                    {majors.map((m)=>  
                        <Radio>
                            <input type="radio" id={m.name} name="major" value={m.id} onChange={e=>majorSelected(e)}></input>
                            <label for={m.name}>{m.name}</label>
                        </Radio>
                    )}
                </div>
                <h3>Selecione a disciplina:</h3>
                <div>
                    {courses?
                        courses.map((c)=>  
                            <Radio>
                                <input type="radio" id={c.name} name="course" value={c.id} onChange={e=>courseSelected(e)}></input>
                                <label for={c.name}>{c.name}</label>
                            </Radio>
                        )
                        :<p>Selecione o curso primeiro</p>
                    }
                </div>
                <h3>Selecione o professor:</h3>
                <div>
                    
                    {teachers?
                        teachers.map((t)=>  
                            <Radio>
                                <input type="radio" id={t.name} name="teacher" value={t.id} onChange={e=>setTeacherId(e.target.value)}></input>
                                <label for={t.name}>{t.name}</label>
                            </Radio>
                        )
                        :<p>Selecione o curso primeiro</p>
                    }
                </div>
                <Button type="submit">Enviar prova</Button>
            </Form>
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

const Form= styled.form`
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    div{
        display:flex;
        justify-content: center;

        flex-wrap: wrap;
        gap:10px;
        p{
            margin-right: 30px;
        }
    }
    h3{
        margin-top: 15px;
    }
`

const Input = styled.input`
    height: 58px;
    width: 100%;
    max-width: 600px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    ::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #696969;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    max-width: 300px;
    background: #474747;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    cursor: pointer;
`;

export const Tittle = styled.h1`
    color:grey;
`;

export const Radio = styled.div`

`