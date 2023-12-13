
import React from "react";
import './CallToAction.css';
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <>

      <div className="call-to-action-container">

        <div className="align-items">
          <div className="item"><h1>Start a project</h1></div>



          <div className="item"><p >Intersted in working together?
            We should queue up a time to chat. I'll buy the coffee.</p>
          </div>
          <div className="item">
            <Link as={Link} to='/contact'>
              <button className='project-contact-button'> <i class="fa-solid fa-link"></i>Let's do this</button>

            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
