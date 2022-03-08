import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { getCast, getConfiguration, getMovieDetails } from "../services/moviesService";

export const MovieDetailPage = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [config, setConfig] = useState(location.state);
  const [cast, setCast] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetail = await getMovieDetails(id);
      const castData = await getCast(id);
      if (!config) {
        const conf = await getConfiguration();
        setConfig(conf);
      }
      setCast(castData);
      setMovie(movieDetail);
    };

    fetchMovie().catch((error) => error);
  }, [id, config]);

  return (
    <section>
      {movie && config && cast && (
        <MovieDetail
          movie={movie}
          images={
            config.images
          }
          cast={cast}
        />
      )}
    </section>
  );
};
