import React from 'react'
import Button from './Button'

function Card(props) {
    return (
      <>
          <div className="cardContent">
              <div className="cardBox">
                  <div > <img className='cardImage' src={props.image} /> </div>
                  <div>{props.copy}</div>
                  <Button />
              </div>
          </div>
      </>
    )
  }

export default Card