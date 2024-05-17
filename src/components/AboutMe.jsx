import './AboutMe.css'
import photo from '../assets/portfolio-photo.png'
import ReactPlayer from 'react-player'




export default function AboutMe() {
  return (
    <>
      <h1 className='homepage-title'>Web Developer and Product Manager</h1>

      <h3 className='title-description'>I code, design, and manage simple beautiful sites to help those in health, wellness, and the arts reach their audiences.</h3>

      <div className='video'>
        <ReactPlayer controls={true} url="https://vimeo.com/907654075?share=copy#t=0" alt='portfolio-video' />
      </div>


      <div className='bio'>
        <h1 className='bio-title'> Hi, I'm Cora. Nice to meet you.</h1>
        <h2 className='bio-paragraph'>As a Web Developer and Associate Product Manager, I combine technical skills with a passion for storytelling. I love collaborating with clients, users, team members, and stakeholders to create digital experiences that are not only functional but also engaging. My dedication to this process ensures every project tells the companys story and delivers exceptional user experiences.<br></br>
          <br></br>
          {/* I've also acted and produced film for over fourteen years. I dealt with continuous hurdles and was nicknamed “the rock” for instilling patience in our cast, crew, and investors. My resourcefulness and problem-solving mindset, has helped numerous creative projects surpass the finish line and I'd love to help yours. */}
        </h2>
      </div>
    </>

  )
}


