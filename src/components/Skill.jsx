import React from "react"
import "./Skill.css"

export default function Skill() {
  return (
    <>
      <div className='skill-section'>
        <div className='skill-box' >
          <h1 className="skill-title"> Web Developer</h1>
          <p className="skill-description">I code things from scratch and enjoy bringing ideas to life in the browser. I value design that is clean, simple, and equitable with a splash of well thought-out color. </p>
          <h2 className="skill-list-title">Things I enjoy developing & designing:</h2>
          <ul className="skill-list">
            <li>Websites</li>
            <li>Apps</li>
          </ul>
          <h2 className="skill-list-title">Languages I speak:</h2>
          <ul className="skill-list">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Git</li>
          </ul>
          <h2 className="skill-list-title">Dev Tools:</h2>
          <ul className="skill-list">
            <li>React/Redux</li>
            <li>Github</li>
            <li>Figma</li>
            <li>PostgreSQL</li>
            <li>Sequlize</li>
            <li>Express</li>
          </ul>
        </div>
        <div className='skill-box'>
          <h1 className="skill-title"> Creative Coach </h1>
          <p className="skill-description">I genuinely care about people, and love helping fellow web developers and filmmakers work on their craft.</p>
          <h2 className="skill-list-title">Experiences I draw from:</h2>
          <ul className="skill-list">
            <li>Web Development</li>
            <li>Film & Theatre Producing</li>
            <li>Freelancing</li>
          </ul>
          <h2 className="skill-list-title">Coaching Stats:</h2>
          <ul className="skill-list">
            <li>4 Years Experience</li>
            <li>$47,000 raised for creative projects</li>
            <li> Grace Hopper Coding Graduate</li>
            <li> Developed numerous websites & creative projects</li>
            <li> Managed & Hiredover 40 Artists & Creators </li>
          </ul>

        </div>
      </div>
    </>
  )

}
