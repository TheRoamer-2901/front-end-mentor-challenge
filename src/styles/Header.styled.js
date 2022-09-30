import styled from "styled-components";


export const StyledHeader = styled.div`
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.24);
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    h2 {
        font-size: 1.25rem;
        font-weight: bold;
    }

    div {   

        display: flex;
        align-items: center;

        .dark-mode-icon{
            font-weight: 500;
            font-size: 20px;
            padding: 2px 2px;
            margin-right: 5px;
            border-radius: 50%;
        }
        .dark-mode-icon:hover{
            background-color: hsl(0, 0%, 52%);

        }

        p{
            font-size: 14px;
            font-weight: bold;
        }
    }

    @media (max-width: 500px){
        h2{
            font-size: 1rem
        }       
    }
`