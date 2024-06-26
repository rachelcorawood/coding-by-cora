import React from "react"
import "./Skill.css"

export default function Skill() {
  return (
    <>
      <div className='skill-section'>
        <div className='skill-box' >
          <h2 className="skill-title"> Web Developer</h2>
          <p className="skill-description">I code things from scratch and enjoy bringing ideas to life in the browser. </p>
          <p className="skill-list-title">Languages I speak:</p>
          <ul className="skill-list">
            <li>Javascript, HTML, CSS, SASS, Git</li>
            <li> HTML & CSS</li>
            <li>SASS & Git</li>
            <li>Sequelize, Express, & PostGres</li>

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
        <div className='skill-box'>
          <h2 className="skill-title"> Associate Product Manager</h2>
          <p className="skill-description">I thrive on collaboration, using my background in film production to help companies bring their products to life.</p>
          <p className="skill-list-title">Experiences I draw from:</p>
          <ul className="skill-list">

            <li>Film & Theatre Producing</li>
            <li>Freelance Product Managment</li>
            <li>Bachelors in Communications from University of Maryland</li>
          </ul>
          <p className="skill-list-title">Project Stats:</p>
          <ul className="skill-list">
            <li>4 Years Experience</li>
            <li>$47,000 raised and allocated for projects</li>
            <li> Grace Hopper Software Engineer Graduate</li>
            <li> Managed & hired over 40 artists & creators </li>
          </ul>
        </div>
        {/* <div className='skill-box' >
          <h1 className="skill-title"> Designer</h1>
          <p className="skill-description"> I have my UX Design Certification from Google, I value design that is clean, simple, and equitable with a splash of well thought-out color. </p>
          <p className="skill-list-title">Things I enjoy designing:</p>
          <ul className="skill-list">
            <li>UX, UI, Web, & Apps </li>
          </ul>
          <p className="skill-list-title">Dev Tools:</p>
          <ul className="skill-list">
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Excalidraw</li>
          </ul>
        </div> */}

      </div>
    </>
  )

}
