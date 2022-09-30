import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetail from '../pages/CountryDetail';
import Error from '../pages/Error';
import { GlobalStyle } from '../styles/global';
import { useTheme } from '../hooks/useTheme';
import { lightThemeStyles, darkThemeStyles } from '../styles/themeStyles';

export default function AppBody() {
    const {darkTheme} = useTheme();
    return (
        <div className="body">
            <GlobalStyle theme={darkTheme ? darkThemeStyles : lightThemeStyles}/>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/:continent' element={ <Home />} />
                <Route path='/country/:name' element={ <CountryDetail />} />
                <Route path='*' element={ <Error />} />
            </Routes>
        </div>
    )
}
