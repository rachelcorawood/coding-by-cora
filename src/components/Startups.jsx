import React from 'react'
import './Startups.css'




export default function Startups() {
  return (
    <>
      <div className='startup-intro'>
        <h1 className='startup-title'>My Startup Projects</h1>
        <h3 className='startup-paragraph'>I've always been a digital app enthusiast, constantly exploring new web and mobile apps across different industries to enhance my life. After using so many, I figured it would be a fun and rewarding challenge to design and build my own apps.</h3>
      </div>

      <div className='startup-container'>
        <div className="box-container">
          <div className="box">
            {/* <img className="daily-health-quiz" src={augmentedPhoto} alt="daily-health-logo" /> */}
            <h3>Daily Health Quiz</h3>
            <p>According to Ayurvedic Medicine asking yourself these questions daily can help you maintain a happy and healthy life.</p>
            <br></br>
            <a href="https://github.com/D-H-Q-App/dailyHealth" target="_blank" rel="noopener noreferrer" className='development-link'><i className="fa-solid fa-wrench"><p className='in-development-text'>In Development & GitHub</p></i></a>
          </div>

          <div className="box">
            {/* <img className="venting-machine" src={augmentedPhoto} alt="venting-machine-logo" /> */}
            <h3>Venting Machine</h3>
            <p>We provide a video platform that digitally distorts your image and voice so you can anonymously vent about whatever you want.</p>
            <br></br>
            <i className="fa-solid fa-wrench"><p className='in-development-text'>In Development</p></i>
          </div>

          <div className="box">
            {/* <img className="meet-me-halfway" src={augmentedPhoto} alt="meet-me-half-logo" /> */}
            <h3>Cosmic Bloom</h3>
            <p>An e-commerce tea shop where you can find herbs, blends, and upcoming events</p>
            <br></br>
            <i className="fa-solid fa-wrench"><p className='in-development-text'>In Development</p></i>
          </div>
        </div>
      </div>

    </>

  )
}
