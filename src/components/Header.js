import React from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";

export default function Header() {
    const { toggleTheme } = useTheme();
    const navigate = useNavigate();
    return (
        <StyledHeader className="header">
            <h2 onClick={() => navigate('/')}>Where in the world?</h2>
            <div className="theme-switch" onClick={toggleTheme}>
                <DarkModeOutlinedIcon className='dark-mode-icon' />
                <p>Dark Mode</p>
            </div>
        </StyledHeader>
    )
}