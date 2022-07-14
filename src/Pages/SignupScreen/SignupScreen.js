import React, { useState } from "react";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import Loader from "../../Components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { showloading, isLoading } from "../../features/movies/MovieSlice";
const SignupScreen = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();

    dispatch(showloading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signin = (e) => {
    e.preventDefault();

    dispatch(showloading(true));

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signupScreen" style={{ marginTop: "100px" }}>
      {loading && <Loader />}
      <form>
        <h1 style={{ color: "white" }}>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signin}>
          Sign In
        </button>

        <h4 style={{ color: "white" }}>
          Don't have an account?
          <span
            className="signupScreen__link"
            style={{ color: "white", marginLeft: "40px" }}
            onClick={register}
          >
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
