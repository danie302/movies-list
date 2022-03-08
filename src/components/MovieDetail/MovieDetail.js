import React from 'react'

const MovieDetail = (props) => {
  return (
    <div>
      <img src={props.imgPath} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.overview}</p>
    </div>
  )
}

export default MovieDetail