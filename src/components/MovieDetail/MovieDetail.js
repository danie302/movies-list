import React from 'react'

const MovieDetail = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
    </div>
  )
}

export default MovieDetail