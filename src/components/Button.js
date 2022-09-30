import React from "react";
import { StyledButton  } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";

export default function Button({className, content, path}){
    const navigate = useNavigate();
    return (
        <StyledButton className={className} 
            onClick={() => navigate(`${path}`)}
        >
            {content}
        </StyledButton>
    )
}