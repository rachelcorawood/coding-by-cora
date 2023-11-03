import React from "react";
import './Testimonial.css'
import kara from '../assets/kara.png'



export default function Testimonial() {

  return (
    <>
      <br />​<hr className="testimonial-section" />​​​​​​​​​​​​​​​​​​​<br />
      <h1 className="title">Testimonials</h1>
      <p className='title-description'>People I've worked with have said some nice things...</p>

      <section className="container">
        <div className="testimonial">
          <div className="testi-content">
            <div className="slide">
              <img src={kara} alt="photo-of-female-kara-cavanaugh" className="testimonial-image" />

              <p><i className="fa fa-quote-left" aria-hidden="true"></i> Creative, curious, and kind, Cora has been an excellent...teammate...She brought an intuitive approach to problem-solving...and was able to face challenges with excitement and optimism. <i class="fa fa-quote-right" aria-hidden="true"></i></p>


              <div className="details">
                <span className="name">Kara</span> <br></br>
                <span className="employer"> Grace Hopper</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
