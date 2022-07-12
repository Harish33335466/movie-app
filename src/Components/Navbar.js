import React, { useState } from "react";
import logo from "../images/popcornflix.png";
import SignupScreen from "../Pages/SignupScreen/SignupScreen";
import "./Navbar.scss";

const Navbar = () => {
  const [signin, setsignin] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <button
          className="loginScreen__button"
          onClick={()=>{setsignin(!signin)}}
        >
          Sign In
        </button>
        
      </div>
      <div className="loginScreen__body">{signin ? <SignupScreen /> : ""}</div>
    </>
  );
};

export default Navbar;
