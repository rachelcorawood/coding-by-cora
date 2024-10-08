import React from "react";
import { Link } from 'react-router-dom'
import './Footer.css';
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links-div">
            <Link to='/' className='footer-logo'>
              <img src={logo} className="logo" alt="portfolio-photo" />
            </Link>
            <h2 className="footer-title"> Here to help you turning your website ideas into a reality.</h2>

            <h1 className="social-icons">
              <a href="https://www.linkedin.com/in/rachelcora/" target="_blank" >
                <i className="fa-brands fa-linkedin" /><i />
              </a>
              {/* <a href="https://www.youtube.com/@CodingByCora" target="_blank" >
                <i className="fa-brands fa-youtube" /><i />
              </a> */}
              {/* <a href="https://github.com/rachelcorawood" target="_blank" >
                <i className="fa-brands fa-github" /><i />
              </a> */}
              {/* <i className="fa-brands fa-dribbble" /> <i /> */}
              {/* <a href="https://drive.google.com/file/d/1AwQPIvjXehJyls0QMTw5oQjazWbF3Syl/view?usp=drive_link" target="_blank">
                <i className="fa-regular fa-file" /> <i /> </a> */}
              {/* <i className="fa-brands fa-x-twitter" /> <i /> */}
              <a href="mailto:codingbycora@gmail.com" target="_blank">
                <i className="fa-regular fa-envelope" /> <i /> </a>
            </h1>


            <p className="copyright">Handcrafted by Rachel Cora Wood <i className="fa-regular fa-copyright" /><i /> 2023 </p>

          </div>
        </div>

      </div>
    </>
  )

}

