import React from 'react'
import augmentedPhoto from '../assets/augmented.png'
import futurePicassos from "../assets/futurePicassos.png"
import thee from "../assets/thee.png"
import './Project.css'


export default function Project() {
  return (
    <>

      <h1 className="title">My Recent Work</h1>
      <p className="description">Here are a few past web development projects I've worked on. Want to see more?
        <a className="email-link" href="mailto:codingbycora@gmail.com">Email me</a>
        .
      </p>


      <div className="wrapper">

        <div className="project-image">
          <img className="augmented" src={augmentedPhoto} alt="music-website-logo" />
          <div className="content">
            <p>A peer-to-peer music teaching program.</p>
            <a href="https://augmented.onrender.com/" className="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>


        <div className="project-image">
          <img src={thee} className="thee-image" alt="theatre-website-logo" />
          <div className="content">
            <p>A subversive theater and film company that develops original works for thee and me.</p>
            <a href="https://theeproductions.org/" className="btn" target="_blank" rel="noopener noreferrer">In Development</a>
          </div>
        </div>


        <div className="project-image">
          <img src={futurePicassos} className="future-image" alt="artist-website-logo" />
          <div className="content">
            <p>Future Picasso's is an e-commerce site for developing visual artists.</p>
            <a href="https://github.com/Binturong-GH/Future-Picassos" className="btn" target="_blank" rel="noopener noreferrer">In Developement</a>
          </div>
        </div>

      </div>

    </>
  )
}
