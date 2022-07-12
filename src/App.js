import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomeScreen from "./Pages/HomeScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import LoginScreen from "./Pages/LoginScreen/LoginScreen";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  selectUser,
  loader,
  loading,
} from "./features/movies/MovieSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Loading from "./Components/Loading";
import Watchlist from "./Components/Watchlist/Watchlist";


function App() {
  const user = useSelector(selectUser);
  const loadings = useSelector(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      console.log(auth);
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            token: userAuth.accessToken,
          })
        );
        dispatch(loader());
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  console.log(user);
  return (
    <div className="App">
      {/* <HomeScreen /> */}

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        )}
      </Router>
      {loadings && <Loading />}
    </div>
  );
}

export default App;
