import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../features/movies/MovieSlice";
import { getallmovies } from "../features/movies/MovieSlice";
import "./MovieListing.scss";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  let movies = useSelector(getallmovies);
  console.log(movies);
  let rendermovies = "";
  rendermovies =
    movies.page === 1
      ? movies.results.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      : "";
  return (
    <div className="movie-wrapper" style={{paddingTop:"80px"}}>
      <div className="movie-list" >
        <div className="movie-container">{rendermovies}</div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div> */}
    </div>
  );
};

export default MovieListing;
