import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail/MovieDetail';
import {getMovieDetails} from '../services/moviesService'

export const MovieDetailPage = () => {
  const [movie, setMovie] = useState({})
  const {id} = useParams();
  const location = useLocation(); 

  useEffect(() => {
    const fetchMovie = async ()=>{
      const movieDetail = await getMovieDetails(id)
      setMovie(movieDetail)
    }
    fetchMovie().catch(error=>error);
    
  }, [id,location])
  
  return (
    <>
      {movie && <MovieDetail title={movie.title} overview={movie.overview} />}
    </>
  )
}
