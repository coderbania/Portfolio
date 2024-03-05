import { useState } from 'react'
import './App.css'
import React from 'react'
import Nav from './Components/Nav'
import {Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'

export const App = () => {
  
  return (

    <>
      <Nav></Nav>
     
      <Routes>
         <Route path='/' element={<Home/>} /> 
        
         <Route path='/about' element={<About></About>} ></Route>
         <Route path='/projects' element={<Projects></Projects>}>  </Route>
         <Route path='/resume' element={<Resume></Resume>}> </Route>
      </Routes>
    </>

  )
}






export default App
