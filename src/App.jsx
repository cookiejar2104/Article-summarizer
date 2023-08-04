import React from 'react'
import Main from './components/Main'
import Nav from './components/Nav';
import "./App.css";

const App = () => {
  
  return (
    <>
    <body className='bg-gradient-to-r from-red-200 to-white h-full' >
      
      <div>
        <Nav/>
        <Main/>
      </div>
    </body>
    </>
  )
}

export default App