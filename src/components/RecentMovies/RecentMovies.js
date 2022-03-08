import React, { useState } from "react";
import { LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRecentMovies } from "../../services/moviesService";
import "./RecentMovies.css";
import MovieCard from "../MovieCard/MovieCard";

const RecentMovies = (props) => {
  const [hasMore, setHasMore] = useState(true);
  const [movies, setMovies] = useState(props.recent);
  const [page, setPage] = useState(2);

  const fetchMovies = async () => {
    const { results } = await getRecentMovies(page);
    setMovies([...movies, ...results]);
    if (results.length === 0 || results.length < 20) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <section id="recent_movies_section">
      <h2 className="section_title">Recent Movies</h2>

      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMovies}
        hasMore={hasMore}
        loader={<LinearProgress className="linear" />}
        endMessage={<p>There are no more recent movies</p>}
      >
        <div className="container_recent">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              src={
                props.conf.images.base_url +
                props.conf.images.poster_sizes[4] +
                (movie.poster_path ?? movie.backdrop_path)
              }
              title={movie.title}
            />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default RecentMovies;
