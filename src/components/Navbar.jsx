import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Navbar.css'
// import Dropdown from './Dropdown'


export default function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          CODING BY CORA
        </Link>
      </nav>
    </>

  );
}
