import styled from "styled-components";

export const StyledPagination = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 50px;
    flex-wrap: wrap;

    li{
        aspect-ratio: 1;
        text-align: center;
        width: 35px;
        padding: 0.5rem 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        border: 1.5px solid;
        font-weight: bold;
    }

    li:hover{
        background-color: hsl(0, 0%, 52%);
    }
`