import React from 'react'
import Main from './components/Main'
import Ai from './components/Ai';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  
  return (
   
    <BrowserRouter>
    <React.Fragment>
    <body>
      
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/ai' element={<Ai/>}/>
        </Routes>
        
      </div>
    </body>
    </React.Fragment>
    </BrowserRouter>
   
  )
}

export default App