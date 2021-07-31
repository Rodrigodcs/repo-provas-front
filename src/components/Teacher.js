import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Teacher({name , id, quantity}){

    return (
        <Link to= {`/options/teachers/${id}/tests`}>
            <Button>
                {name} ({quantity?quantity:0})
            </Button>
        </Link>
    )
}

export const Button = styled.button`
    width:150px;
    height: 30px;
    background-color:#908699;
`;