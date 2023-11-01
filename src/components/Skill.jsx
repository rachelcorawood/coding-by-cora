import React from "react"
import "./Skill.css"

export default function Skill() {
  return (
    <>
      <div className='skill-section'>
        <div className='skill-box' >
          <h1 className="skill-title"> Web Developer</h1>
          <p className="skill-description">I code things from scratch and enjoy bringing ideas to life in the browser. </p>
          <p className="skill-list-title">Languages I speak:</p>
          <ul className="skill-list">
            <li>Javascript, HTML, CSS, SASS, Git</li>
          </ul>
          <p className="skill-list-title">Dev Tools:</p>
          <ul className="skill-list">
            <li>React/Redux</li>
            <li>Github</li>
            <li>PostgreSQL</li>
            <li>Sequlize</li>
            <li>Express</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className='skill-box' >
          <h1 className="skill-title"> Designer</h1>
          <p className="skill-description"> I value design that is clean, simple, and equitable with a splash of well thought-out color. </p>
          <p className="skill-list-title">Things I enjoy designing:</p>
          <ul className="skill-list">
            <li>UX, UI, Web, & Apps </li>
          </ul>
          <p className="skill-list-title">Dev Tools:</p>
          <ul className="skill-list">
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Excalidraw</li>
            <li>Pen & Paper</li>
          </ul>
        </div>
        <div className='skill-box'>
          <h1 className="skill-title"> Creative Coach </h1>
          <p className="skill-description">I genuinely care about people, and love helping fellow web developers, filmmakers, and artists work on their craft and reach their projects finish lines.</p>
          <p className="skill-list-title">Experiences I draw from:</p>
          <ul className="skill-list">
            <li>Web Development</li>
            <li>Film & Theatre Producing</li>
            <li>Freelancing</li>
          </ul>
          <p className="skill-list-title">Coaching Stats:</p>
          <ul className="skill-list">
            <li>4 Years Experience</li>
            <li>$47,000 raised for creative projects</li>
            <li> Grace Hopper Coding Graduate</li>
            <li> Developed numerous websites & creative projects</li>
            <li> Managed & hired over 40 artists & creators </li>
          </ul>
        </div>
      </div>
    </>
  )

}
