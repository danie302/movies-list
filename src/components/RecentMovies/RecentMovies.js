import React from 'react';
import './RecentMovies.css';

const RecentMovies = (props) => {
   return (
    <section id="recent_movies_section">
      <h2 className='section_title'>Recent Movies</h2>
      <div className="container_recent">
        {        
          props.recent.map((movie)=>(
            <div key={movie.id} >
            <img src={props.conf.images.base_url +
              props.conf.images.poster_sizes[4] + movie.poster_path} alt="" />
              <p>{movie.title}</p>
            </div>
            
          ))
        }
        
      </div>
      
    </section>
  )
}

export default RecentMovies