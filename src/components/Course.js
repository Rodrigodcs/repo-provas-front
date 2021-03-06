import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Course({name, id}){
    
    return (
        <Link to= {`/options/courses/${id}/tests`}>
            <Button>
                {name}
            </Button>
        </Link>
    )
}

export const Button = styled.button`
    width:150px;
    height: 30px;
    background-color:#908699;
`;