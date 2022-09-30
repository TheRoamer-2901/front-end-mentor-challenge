import styled from 'styled-components'

export const StyledFilter = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    color: hsl(200, 15%, 8%);
    font-weight: bold;
    position: relative;

    div{
        display: flex;
        box-shadow: 0 0 5px  rgba(0, 0, 0, 0.24);
        border-radius: 6px;
        padding: 0.5rem 0.5rem;
        font-size: 14px;
    }

    .filter-value{
        cursor: pointer;
        margin-block: 5px;
        align-items: center;
        justify-content: space-between;
    }

    .filter-option{
        z-index: 100;
        width: 100%;
        padding: 0 0;
        position: absolute;
        top: 48px;
        gap: 0.5rem;
        flex-direction: column;
        cursor: pointer;
        overflow: hidden;

        p{
            width: 100%;
            height: 100%;
            padding: 0.5rem 0.5rem;
        }
        p:hover{
            background-color: hsl(0, 0%, 52%);
        }
    }

`