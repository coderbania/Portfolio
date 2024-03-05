import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Nav from './Components/Nav'
import {Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

export const App = () => {
  
  return (

    <>
      <Nav></Nav>
     <hr />
      <Routes>
         <Route path='/' element={<Home/>} /> 
        
         <Route path='/about' element={<About></About>} ></Route>
      </Routes>
    </>

  )
}






export default App
