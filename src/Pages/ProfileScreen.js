import React from "react";
import HomeNav from "../Components/HomeNav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/movies/MovieSlice";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const userlogout = () => {
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <HomeNav />
      <div className="profileScreen__body">
        <h1>My Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <button className="profileScreen__signOut" onClick={userlogout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
