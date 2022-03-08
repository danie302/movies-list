import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { getConfiguration, getMovieDetails } from "../services/moviesService";

export const MovieDetailPage = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [config, setConfig] = useState(location.state);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetail = await getMovieDetails(id);
      if (!config) {
        const conf = await getConfiguration();
        setConfig(conf);
      }
      setMovie(movieDetail);
    };

    fetchMovie().catch((error) => error);
  }, [id, config]);

  return (
    <section>
      {movie && config && (
        <MovieDetail
          movie={movie}
          imgPath={
            config.images.base_url +
            config.images.poster_sizes[4] +
            movie.poster_path
          }
        />
      )}
    </section>
  );
};
