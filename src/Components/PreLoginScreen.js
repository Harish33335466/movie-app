import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { cleanup } from "../features/movies/MovieSlice";

const PreLoginScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("PreLoginScreen");
    return () => {
      dispatch(cleanup());
    };
  });
  return (
    <div>
      <Navbar />
      <MovieListing />
    </div>
  );
};

export default PreLoginScreen;
