import axios from "../../api/Movieapi";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { watchlist, watchlistmovies } from "../../features/movies/MovieSlice";
import swal from "sweetalert";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovie] = useState([]);
  // let movies = useSelector(getmoviesforhome);
  let uniquemovie = useSelector(watchlistmovies);

  const dispatch = useDispatch();

  function clickhandler(id, movie) {
    if (uniquemovie.find((item) => item.id === id)) {
      swal({
        title: "Already in your watchlist",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      return;
    }

    swal({
      title: "Added to your watchlist",
      icon: "success",
      button: "OK",
    });

    dispatch(watchlist(movie));

    //how to handle particular added movie

    console.log(id);
    // console.log(movie);
  }

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl, dispatch]);
  console.log(movies);
  // console.log(movie);
  return (
    <div
      className="row"
      style={{ position: "relative", top: "200px", right: "10px" }}
    >
      <h2>{title}</h2>

      <div className="row__posters" style={{ height: "200%" }}>
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />

                <div className="watchlist-button">
                  {
                    <button
                      className="btn"
                      onClick={() => clickhandler(movie.id, movie)}
                    >
                      {/* clicked && movie.id ? <span>&#10003;</span> : */}
                      {<span>+</span>}
                    </button>
                  }
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default Row;