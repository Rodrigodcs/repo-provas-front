//import {GlobalStyle} from "./GlobalStyle"
import axios from "axios"

export default function App(){
    
    function testing(){
        axios.get(`https://repo-provas-back.herokuapp.com/test`).then((response)=>{
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    return (
        <button onClick={()=>testing()}>
            test
        </button>
        
    )
}