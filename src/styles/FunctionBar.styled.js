import styled from "styled-components";

export const FunctionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 4.25rem; 

    @media(max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
        margin-inline: 0;
    }

`