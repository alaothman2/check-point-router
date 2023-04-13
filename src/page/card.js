import React from 'react'


function Card(props) {
  return (
    <div>
       <p className="card-text ">
          {props.movie.description}
          </p>
          <video src={props.movie.trailer} class="object-fit-contain" autoplay></video>
          
    </div>
  )
}

export default Card
