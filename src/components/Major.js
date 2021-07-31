import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Major({name, id}){
    
    return (
        <Link to={`/options/${id}`}>
            <Button>
                {name}
            </Button>
        </Link>
    )
}

export const Button = styled.button`
    width:100px;
    height: 50px;
    background-color:#908699;
`;