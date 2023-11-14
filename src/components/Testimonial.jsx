import React, { useState, useEffect } from "react";
import './Testimonial.css'
import { people } from '../data/data.js'



export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
      <div>
        <br /><hr className="testimonial-line" /><br />
      </div>

      <section className="testimonial-section">

        <div className="testimonial-title">
          <h1>Testimonials</h1>
          <p className='title-description'>People I've worked with have said some nice things...</p>
        </div>

        <div className="section-center">
          {people.map((item, indexPeople) => {
            const { id, image, name, title, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide"
            }
            if (indexPeople === index - 1 || (index === 0 & indexPeople === people.length - 1)) {
              position = "lastSlide"
            }
            return (
              <article className={position} key={id}>
                <img src={image} atl={name} className="person-img" />
                <h3>{name}</h3>
                <p className="testimonial-title">{title}</p>
                <p className="testimonail-text">"{quote}"</p>

              </article>
            )
          })}

          <button className="prev" onClick={() => setIndex(index - 1)}>
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button className="next" onClick={() => setIndex(index + 1)}>
            <i className="fa-solid fa-chevron-right" />
          </button>

        </div>
      </section>
    </>
  )
}
