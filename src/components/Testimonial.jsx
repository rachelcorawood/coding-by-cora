import React from "react";
import './Testimonial.css'
import kara from '../assets/kara.png'

export default function Testimonial() {
  return (
    <>
      <h1 className="title">Testimonials</h1>
      <p className='title-description'>People I've worked with have nice things to say...</p>
      <section className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="slide">
              <img src={kara} alt="photo-of-female-kara-cavanaugh" className="testimonial-image" />

              <p>Creative, curious, and kind, Cora has been an excellent...teammate...She brought an intuitive approach to problem-solving...and was able to face challenges with excitement and optimism. As a skilled, eager-to-learn-everything software engineer, I know she can accomplish anything she sets her mind to.</p>
              <i class="fa fa-quote-right" aria-hidden="true"></i>

              <div className="testimonial-details">
                <span className="name">Kara</span>
                <span className="name"> Grace Hopper</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
