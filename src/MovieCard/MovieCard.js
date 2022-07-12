import React from "react";
import "./MovieCard.scss";

const MovieCard = ({data}) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}  alt={data.title} />
        </div>
        <div className="card-bottom" style={{marginTop:"40px"}}>
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
