import React from 'react'
import HeroImage from './Resources/HeroImage.svg'
import "./style.css"


function Body() {
  return (
    <>
        <div className="Herotext"> 
          <h1>Welcome to Fitness Fanatics</h1>
          <p>Looking for a place where you can get fit, have fun, and make new friends? Join our sports club today! </p>
          <div className="CTA">
            <div className= "Button2b"> Enrol Today</div>
            <div className= "Button2"> Learn More</div>
          </div>
      </div>
    </>
  )
}

export default Body