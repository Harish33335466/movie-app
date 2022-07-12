import React, { useEffect, useState } from "react";
import requests from "../../api/request";
import axios from "../../api/Movieapi";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const watchlisthandler = () => {
    navigate("/watchlist");
  };
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header className="banner">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.title}
          style={{
            width: "100%",
            height: "500px",
          }}
          className="banner--fadeBottom"
        />
        <div
          className="banner__contents"
          style={{ position: "relative", bottom: "500px" }}
        >
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button" onClick={watchlisthandler}>
              My List
            </button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>

      {/* <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" /> */}
    </header>
  );
};

export default Banner;
