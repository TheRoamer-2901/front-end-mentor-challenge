import styled from "styled-components";

export const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    padding-block: 0.5rem;
    border-radius: 6px;
    position: relative;


    div{
        padding: 0.5rem 1rem;
        width: 100%;
        box-shadow: 0 0 5px  rgba(0, 0, 0, 0.24);
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        align-items: center;
    }

    .search-value{
        display: flex;
        align-items: center;
        .search-icon {
            font-size: 20px;
            cursor: pointer;
            margin-inline: 8px;
            border-radius: 50%;
        }
        .search-icon:hover{
            background-color: hsl(0, 0%, 65%);
        }



        input{
            font-size: 14px;
            font-weight: bold;
            height: 100%;
            width: 100%;
            border: transparent;
            background-color: transparent;
        }
    
        input:focus{
            outline: none;
        }
    }

    .search-result{
        width: 100%;
        display: flex;
        text-align: center;
        position: absolute;
        padding: 0 0;
        overflow: hidden;
        top: 42px;
        margin-top: 0.5rem;
        flex-direction: column;
        z-index: 100;
        p{
            padding: 0.5rem 0.5rem;
            width: 100%;
        }
        p:hover{ 
            background-color: hsl(0, 0%, 75%);
        }
        p.selected{
            background-color: hsl(0, 0%, 75%);
        }
    }

`