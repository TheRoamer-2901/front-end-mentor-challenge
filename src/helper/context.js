import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const themeContext = createContext({});
export const dataContext = createContext({});
const API = "https://restcountries.com/v3.1/all";


export default function ContextProvider( {children} ) {
    const [data, setData] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    useEffect(() => {
        axios.get(API)
        .then(res => {
            setData(res.data);
            setIsLoading(false);
        });
    }, [])

    return (
        <themeContext.Provider value={ {darkTheme, toggleTheme} }>
            <dataContext.Provider value={ {data, setData} }>
                {isLoading ? <>Loading...</> : children}
            </dataContext.Provider>
        </themeContext.Provider>
    )
}

