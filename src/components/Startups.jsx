import React from 'react'
import './Startups.css'
import augmentedPhoto from "../assets/augmented.png"



export default function Startups() {
  return (
    <>
      <div className='bio'>
        <h1 className='bio-title'>My Startup Projects</h1>
        <p className='bio-paragraph'>I'm a bit of a digital app junky. For a while now, I've used hundreds of web and mobile apps in different industries and verticals to help add value and efficiency to my life. Eventually, I decided that it would be a fun challenge to try designing and building my own.</p>
      </div>

      <div className='startup-container'>
        <div className="box-container">
          <div className="box">
            <img className="daily-health-quiz" src={augmentedPhoto} alt="daily-health-logo" />
            <h3>Daily Health Quiz</h3>
            <p>According to Ayurvedic Medicine asking yourself these questions daily can help you maintain a happy and healthy life. Based on users responses we provide daily health suggestions they could easily follow.</p>
            <br></br>
            <i className="fa-solid fa-wrench"><p className='in-development-text'>In Development</p></i>
          </div>

          <div className="box">
            <img className="venting-machine" src={augmentedPhoto} alt="venting-machine-logo" />
            <h3>Venting Machine</h3>
            <p>We provide a video platform that digitally distorts your image and voice so you can anonymously vent about whatever you want.</p>
            <br></br>
            <i className="fa-solid fa-wrench"><p className='in-development-text'>In Development</p></i>
          </div>

          <div className="box">
            <img className="meet-me-halfway" src={augmentedPhoto} alt="meet-me-half-logo" />
            <h3>Meet Me Halfway</h3>
            <p>Helps groups of long-distance friends find the closest town that is an equal distance from each other.</p>
            <br></br>
            <i className="fa-solid fa-wrench"><p className='in-development-text'>In Development</p></i>
          </div>
        </div>
      </div>

    </>

  )
}
