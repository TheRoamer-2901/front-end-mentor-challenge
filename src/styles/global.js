import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Nunito', sans-serif;    
        transition: all 0.75s ease-in;
    }

    .App{
        height: 100%;
        overflow-x: visible;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .body{
        width: 100%; 
        flex: 1;
        padding: 1.25rem 4.25rem;
        background-color: ${({theme}) => theme.body.backgroundColor};
    }

    .header{
        padding: 1.25rem 4.25rem;
        background-color: ${({theme}) => theme.container.backgroundColor};
        color: ${({theme}) => theme.container.textColor}
    }

    .card{
        background-color: ${({theme}) => theme.container.backgroundColor};
        color: ${({theme}) => theme.container.textColor};
    }

    .search-bar{
        div{
        background-color:  ${({theme}) => theme.search.backgroundColor};
        color: ${({theme}) => theme.search.textColor};
       }

        .search-value{
            .search-icon {
                color:  ${({theme}) => theme.search.textColor};
    
            }

            input{
                color: ${({theme}) => theme.search.textColor};
            }

            input::placeholder{
                color: ${({theme}) => theme.search.textColor};
            }
        }
    }

    .filter-bar {
        div{
            background-color:  ${({theme}) => theme.filter.backgroundColor};
            color: ${({theme}) => theme.filter.textColor};
        }
    }
     

    .detail{
        div{
            color: ${({theme}) => theme.container.textColor};
        }
        .btn{
            color: ${({theme}) => theme.container.textColor};
            background-color: ${({theme}) => theme.container.backgroundColor};
    }
    }    


    .pagination-list{
        li{
            color: ${({theme}) => theme.container.textColor};
            background-color:  ${({theme}) => theme.container.backgroundColor};
            border-color: ${({theme}) => theme.container.textColor};
        }
    }

    .h2{
        color: ${({theme}) => theme.container.textColor};
        font-size: 16px;
        margin: 16px 0;
    }

    @media (max-width: 500px) {
        .header{
            padding-inline: 1rem;
        }
        .body{
            padding-inline: 1.5rem;
        }
    }

`

