import React from 'react'
import "./Header.css"
import { Link,NavLink } from "react-router-dom";

function Header() {
  return (
   <>
   <div className='nav'>
  <ul>
  <li><NavLink to="/home">Home</NavLink></li>

          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/filter">Filter</NavLink></li>
          <li><NavLink to="/user/anil">Anil</NavLink></li>
          <li><NavLink to="/user/peter">Peter</NavLink></li>

  </ul>
   </div>
   </>
  )
}

export default Header