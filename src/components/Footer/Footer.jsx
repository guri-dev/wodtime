import React from 'react'
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="footer">
            <div className="social-links">
              <img src={Github} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
            </div>
            <div className="logo-f">
              <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer