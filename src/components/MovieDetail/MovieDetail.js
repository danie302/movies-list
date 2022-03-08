import React from 'react'
import Carrousel from '../Carrousel/Carrousel';

const MovieDetail = (props) => {
  console.log(props.images);
  console.log(props.cast);
  const castArray = props.cast.cast
  return (
    <div>
      <img src={props.images.base_url +
            props.images.poster_sizes[4] +
            props.movie.poster_path} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.overview}</p>
      {
        <Carrousel items={castArray} conf={props.images} path={"profile_path"} />        
      }
    </div>
  )
}

export default MovieDetail