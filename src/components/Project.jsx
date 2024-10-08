import React from 'react'
import augmentedPhoto from '../assets/augmented.png'
import futurePicassos from "../assets/futurePicassos.png"
import hackForLA from "../assets/hack-for-la.png"
import thee from "../assets/thee.png"
import './Project.css'


export default function Project() {
  return (
    <>

      <h1 className="title">My Recent Work</h1>
      <h2 className="description">
      Here are some web development projects I’ve worked on to help businesses build user-friendly, responsive websites. Looking to create something similar or want to see more? <br></br>
        <a className="email-link" href="mailto:codingbycora@gmail.com" target="_blank" rel="noopener noreferrer"> Let’s connect!</a>
      </h2>


      <div className="wrapper">

        <div className="project-image">
          <img className="augmented" src={augmentedPhoto} alt="music-website-logo" />
          <div className="content">
            <h1>augmentEd</h1>
            <p>A peer-to-peer music teaching program.</p>
            <a href="https://augmented.onrender.com/lessons/1/slides/1" className="btn" target="_blank" rel="noopener noreferrer">Visit MVP Website</a>
          </div>
        </div>


        <div className="project-image">
          <img src={thee} className="thee-image" alt="theatre-website-logo" />
          <div className="content">
            <h1>Thee Productions</h1>
            <p>A subversive theater and film company that develops original works.</p>
            <a href="https://theeproductions.org/" className="btn" target="_blank" rel="noopener noreferrer">In Development</a>
          </div>
        </div>
        
        <div className="project-image">
          <img src={hackForLA} className="hack-image" alt="artist-website-logo" />
          <div className="content">
            <h1>Hack for LA</h1>
            <p>A place to collaborate with a team to design, develop, and maintain user-friendly web interfaces for civic tech projects that address local community needs.</p>
            <a href="https://www.hackforla.org/" className="btn" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>


        <div className="project-image">
          <img src={futurePicassos} className="future-image" alt="artist-website-logo" />
          <div className="content">
            <h1>Future Picasso's</h1>
            <p>An e-commerce site for developing visual artists.</p>
            <a href="https://github.com/Binturong-GH/Future-Picassos" className="btn" target="_blank" rel="noopener noreferrer">In Development</a>
          </div>
        </div>
        
       

      </div>

    </>
  )
}
