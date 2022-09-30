import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 6px;
    box-shadow: 0 0 5px  rgba(0, 0, 0, 0.24);
    background-color: hsl(0, 0%, 100%);
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: hsl(200, 15%, 8%);
    margin-right: 8px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.05);
    }

`