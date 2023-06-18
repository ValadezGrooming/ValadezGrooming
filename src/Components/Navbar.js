import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import  './Navbar.css'

export default function Navbar() {
  
  return (
    <nav className='nav'>
        <Link to='/' className="title">Valadez Family Grooming</Link>
        <ul>
          <NavLink toName="/booking">Booking</NavLink>
          <NavLink toName="/pricing">Pricing</NavLink>
        </ul>
    </nav>
  )
}

function NavLink({toName, children}){
  const resolvedPath = useResolvedPath(toName)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className={isActive ? "active" : "nav-link"}>
      <Link to={toName}>
        {children}
      </Link>
    </li>
  )
}

