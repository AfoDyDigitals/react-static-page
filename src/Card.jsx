import React from 'react'

function Card(props) {
    return (
      <>
          <div class="cardContent">
              <div class="cardBox">
                  <div > <img class='cardImage' src={props.image} /> </div>
                  <div>{props.copy}</div>
                  <Button />
              </div>
          </div>
      </>
    )
  }

export default Card