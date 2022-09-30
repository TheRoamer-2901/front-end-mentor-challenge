import styled from "styled-components";

export const StyledDetail = styled.div`
    .col div{
        margin-block: 8px;
    }

    .back-btn{
        margin-block: 4.25rem;
    }

    .flag{
        aspect-ratio: 3 / 2;
        width: 450px;
        min-width: 400px;
        img{
            width: 100%;
            object-fit: cover;
        }
    }


    .border-text{
        align-self: flex-start;
        margin-top: 6px;
    }


    .border-list{
        max-width: 450px;
        .btn{
            margin-bottom: 8px;
            margin-inline: 8px;
        }
    }

    .info .layer2{
        width: fit-content;
    }

    @media (max-width: 1100px) {
        .layer1{
            flex-direction: column;
        } 
    }
 
    @media (max-width: 600px) {
        .layer1{
            gap: 3rem;
        }
        .layer2{
            flex-direction: column;
            gap: 2rem;
            display: flex;
            align-items: flex-start;
        }
        .back-btn{
            margin-bottom: 2rem;
        }
        .flag{
            width: 90vw;
            min-width: 250px;
        }
    }

`