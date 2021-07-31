import styled from "styled-components"

export default function Test({name , link, complement}){
    return (
        <a href={link}>
            <Button>
                {name} {complement}
            </Button>
        </a>
    )
}

export const Button = styled.button`
    width:200px;
    height: 30px;
    background-color:#908699;
    color:#1E1834;
`;