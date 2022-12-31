import React from 'react'
import Header from '../Header/Header';
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
      </div>
      <div className="right-h">Right</div>
    </div>
  )
}

export default Hero