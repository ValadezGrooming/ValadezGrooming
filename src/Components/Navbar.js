import React from 'react'
import {Link} from 'react-router-dom'
import  './Navbar.css'


export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/' className='title'>Valadez Family Grooming</Link>
        <ul>
            <li>
                <Link to='/booking' className='nav-link' >Booking</Link>
            </li>
            <li>
                <Link className='nav-link' to='/prices'>Prices</Link>
            </li>
        </ul>
    </nav>
  )
}
