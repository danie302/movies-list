import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getPopularMovies } from '../services/moviesService';
import { AuthContext } from '../store/auth-context'

const HomePage = () => {

  const [popularMovies, setPopularMovies] = useState({})
  const authCtx = useContext(AuthContext);
  const user = authCtx.user?.uid ? authCtx.user : JSON.parse(authCtx.user);
  console.log('renderizando');
  const movies = popularMovies?.results;
  useEffect(() => {
    const fetchMovies = async()=>{
      const data = await getPopularMovies();
      setPopularMovies(data);
    }
    fetchMovies()
      .catch(error => error)
  }, [])
  
  console.log(popularMovies);
  return (
    <div>
      {movies && movies.map((movie)=>{
        return <p key={movie.id}>{movie.title}</p>
      })}
    </div>
  )
}

export default HomePage