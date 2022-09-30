import React from "react";
import { StyledButton  } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";

export default function Button({className, content, path}){
    const navigate = useNavigate();
    return (
        <StyledButton className={className} 
            onClick={() =>{
                if(path !== '/') navigate(`/country/${path}`); 
                else navigate('/');}}
        >
            {content}
        </StyledButton>
    )
}