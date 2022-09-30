import React from 'react';
import ContextProvider from './helper/context';
import Body from './components/Body';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';


export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
          <div className="App">
            <Header />
            <Body />
          </div>
      </BrowserRouter>  
    </ContextProvider>
    

  );
}
