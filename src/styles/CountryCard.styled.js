import styled from 'styled-components';

export const StyledCard = styled.div`
        font-size: 14px;
        width: 300px;
        max-width: 325px;
        border-radius: 6px; 
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.24);
        cursor: pointer;

        
        &:hover{
            scale: 1.05;
        }
    
        .flag{
            width: 100%;
            height: 50%;
            img{
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
        }
    
        .info{
            display: flex;
            flex-direction: column;
            padding: 1.5rem 1rem 2rem 1rem;
            height: 50%;
    
            h2{
                padding-bottom: 1.25rem;
            }
    
            p{
                padding-bottom: 6px;
            }
    
            span{
                font-weight: bold;
            }
        }
    
  
`