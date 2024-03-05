 import React from 'react'
 import "./Nav.css"
 import { NavLink } from 'react-router-dom'
 import Home from './Home'
 import About from './About'
 
 function Nav() {
   return (
     <>
      { <div className="nav">
        <div className="logo">Logo</div>

       <div className="links">
        
        
        <NavLink to="/" element={<Home/>} >  Home </NavLink>
        <NavLink to="/about" element={<About/>} > About</NavLink>


       </div>
      </div> 
       
      
      
      }


     </>
   )
 }
 
 export default Nav