import React from "react";
import { useSelector } from "react-redux";
import { watchlistmovies } from "../../features/movies/MovieSlice";
import HomeNav from "../HomeNav";
import "./Watchlist.css";

const Watchlist = () => {
  const movies = useSelector(watchlistmovies);
  console.log(movies);
  return (
    <div>
      <HomeNav />
      <div>
        <div className="watchlist-title">
          <h1>My Favourite List </h1>
        </div>
        <div className="movie-list" >
          {movies.map((movie) => {
            return (
              <div className="movie-list-item">
                <div className="container">
                  <div className="card">
                    <div className="card__header">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="card__image"
                        className="card__image"
                        width="600"
                      />
                    </div>
                    <div className="card__body">
                      <h4>{movie.name}</h4>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
