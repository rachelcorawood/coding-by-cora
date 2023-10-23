import './AboutMe.css'
import photo from '../assets/portfolio-photo.png'




export default function AboutMe() {
  return (
    <>
      <h1 className='homepage-title'>Web Developer, Designer, and Creative Coach</h1>
      <h3 className='title-description'>I code and design simple beautiful sites to help those in health & wellness and the arts reach their audience.</h3>

      <div className='image'>
        <img src={photo} alt="portfolio-photo" />

      </div>
    </>

  )
}


