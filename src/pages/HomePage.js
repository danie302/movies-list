import React, { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel/Carrousel";
import RecentMovies from "../components/RecentMovies/RecentMovies";
import {
  getConfiguration,
  getPopularMovies,
  getRecentMovies,
} from "../services/moviesService";

const HomePage = () => {
  const [moviesAndConf, setMoviesAndConf] = useState({
    popular: {},
    recent: {},
    conf: {},
  });
  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await getPopularMovies();
      const recent = await getRecentMovies();
      const conf = await getConfiguration();
      const data = {
        popular,
        recent,
        conf,
      };
      setMoviesAndConf(data);
    };
    fetchMovies().catch((error) => error);
  }, []);

  return (
    <React.Fragment>
      <h2>Movies List</h2>
      {moviesAndConf.popular.results && (
        <Carrousel
          items={moviesAndConf.popular.results}
          conf={moviesAndConf.conf.images}
          path="poster_path"
          effect={"coverflow"}
          autoplay={true}
          className={'.swiper-slide'}
          />
      )}
      {moviesAndConf.recent.results && (
        <RecentMovies
          recent={moviesAndConf.recent.results}
          conf={moviesAndConf.conf}
        />
      )}
    </React.Fragment>
  );
};

export default HomePage;
