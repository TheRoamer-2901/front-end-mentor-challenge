 import styled from "styled-components";

export const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    gap: ${({gap}) => gap};
    align-items: center;

    .col{
        max-width: 300px;
    }

    .flag{
        height: 375x;
        width: 500px;

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

    }         

    span{
        font-weight: bold;
    }


`