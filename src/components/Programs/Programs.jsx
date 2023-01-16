import React from 'react'
import './Programs.css';
import {programsData} from '../../data/programsData';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Program</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">okoko
          {programsData.map((program) => (
            <div className="category">
              {program.image}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs