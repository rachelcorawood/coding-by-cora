import './AboutMe.css'
import photo from '../assets/portfolio-photo.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'




export default function AboutMe() {
  return (
    <>
      {/* <h1 className='homepage-title'>UX Designer and Web Developer</h1> */}
      <div className='top-logo'>
      <div className='logo-picture'>
        <img src={logo}  alt='logo-picture' />
      </div>
      </div>

<h2 className='title-description'>Hey, I'm so glad you looked me up...</h2>
      {/* <h2 className='title-description'>Let me guess… you're overwhelmed, right? You don’t have time to design or build a website, and you’re not even sure where to start. Maybe you want something that doesn’t look like every other site out there, but you’re tired of dealing with constant updates and annoying security snags.

Plus, you definitely don’t want to be stuck using Wix or Squarespace, limited by their cookie-cutter designs, or paying a monthly fee for something that just doesn't feel you.

Here’s what you really want: a site that’s not just pretty, but also unique, easy to use, and reflects your brand. Something that works smoothly, helps people find you, and doesn’t leave you frustrated with constant maintenance. You’re done with that old, clunky design and tired of your limited online presence.

You’re ready for a fresh, modern website that improves client engagement, makes appointment scheduling a breeze, and includes everyone with ease. But... where do you even start?</h2>  */}


      <div className='profile'>
        <img src={photo}  alt='profile-picture' />
      </div>
      <h1 className='bio-title'> I'm, Cora.</h1>

      <div className='bio'>

<div>
        <h2 className='bio-paragraph'>
        <div class="center-list">
    <ul>
        <li> I help you finally cross your website off the to-do list.</li>
        <br></br>
        <li>I build sites that not only look great but drive the results you want.</li>
        <br></br>
        <li>I take away the tech stress and bring your website vision to life.</li>

    </ul>
</div>


        </h2>
        </div>
       {/* <h2 className='bio-paragraph'>My Web Development and Design approach is like hitting two birds with one stone. I handle both the User Experience Design and Web Development, offering a cost-effective, efficient, and comprehensive solution.

By working directly with me, you’ll have the flexibility of personalized attention and direct communication, ensuring the process feels easy and adaptable to your evolving needs. My creativity, user research, and innovative ideas provide a fresh perspective, guaranteeing a website that truly resonates with your business goals and your users<br></br>
          <br></br>
          I've also acted and produced film for over fourteen years. I dealt with continuous hurdles and was nicknamed “the rock” for instilling patience in our cast, crew, and investors. My resourcefulness and problem-solving mindset, has helped numerous creative projects surpass the finish line and I'd love to help yours.
        </h2> */}
        <div className='top-contact-button-div'>
            <Link as={Link} to='/contact'>
              <button className='top-contact-button'> <i className="fa-solid fa-link"></i>Click Here To Contact Me</button>

            </Link>
        </div>
      </div>
    </>

  )
}


