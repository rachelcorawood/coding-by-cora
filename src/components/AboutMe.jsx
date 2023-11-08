import './AboutMe.css'
import photo from '../assets/portfolio-photo.png'





export default function AboutMe() {
  return (
    <>
      <h1 className='homepage-title'>Web Developer, Designer, and Creative Coach</h1>

      <h3 className='title-description'>I code and design simple beautiful sites to help those in health, wellness, and the arts reach their audiences.</h3>

      <div className='image'>
        <img src={photo} alt="portfolio-photo" />
      </div>


      <div className='bio'>
        <h1 className='bio-title'> Hi, I'm Cora. Nice to meet you.</h1>
        <h2 className='bio-paragraph'>Prior to freelancing as a Web Developer, I was an Administrative Assistant and Medical Receptionist for a celebrity-acclaimed plastic surgeon. This work required extreme organization and obsessive attention to detail because one wrong mistake on a medical file could lead to a potentially fatal error. These skills of being precise and solution-oriented under pressure would make me an ideal candidate to handle building your site with preparedness and ease.<br></br>
          <br></br>
          I've also acted and produced film for over fourteen years. I dealt with continuous hurdles and was nicknamed “the rock” for instilling patience in our cast, crew, and investors. My resourcefulness and problem-solving mindset, has helped numerous creative projects surpass the finish line and I'd love to help yours. </h2>
      </div>
    </>

  )
}


