import React, { useEffect } from "react";
import "./LoginScreen.css";
import PreLoginScreen from "../../Components/PreLoginScreen";
import { cleanup } from "../../features/movies/MovieSlice";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(cleanup());
      console.log("I am unmounting");
    };
  });

  return (
    <div className="loginScreen">
      <PreLoginScreen />
    </div>
  );
};

export default LoginScreen;
