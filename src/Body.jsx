import React from 'react'
import HeroImage from './Resources/HeroImage.svg'

function Body() {
  return (
    <>
        <div class="Herotext" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', width: '85vw', marginTop: '20px', height: '60vh', }}> 
          <h1>Welcome to Fitness Fanatics</h1>
          <p>Looking for a place where you can get fit, have fun, and make new friends? Join our sports club today! </p>
          <div class="CTA">
            <div class= "Button2b"> Enrol Today</div>
            <div class= "Button2"> Learn More</div>
          </div>
      </div>
    </>
  )
}

export default Body