import React from 'react'
import './ContactButton.css'
import { Link } from 'react-router-dom'

export default function ContactButton() {
  return (
    <Link as={Link} to='/contact'>
      <button className='contact-button'> Say Hello</button>
    </Link>
  )
}
