import React from 'react'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>
              Shape 
            </span>
            <span>
               Your 
            </span>            
          </div>
          <div><span>Ideal body</span></div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to the fullest</span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span> Members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Fitness programs</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="bts">Get Started</button>
          <button className="bts">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
      </div>
    </div>
  )
}

export default Hero