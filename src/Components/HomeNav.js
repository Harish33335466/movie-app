import React, { useEffect, useState } from "react";
import "./HomeNav.scss";
import { Link } from "react-router-dom";
const HomeNav = () => {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  console.log(show);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Apple_TV.svg/1920px-Apple_TV.svg.png"
            alt="logo"
            className="nav__logo"
          />
        </Link>
        <Link to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="nav__avatar"
          />
        </Link>
      </div>
    </nav>
  );
};

export default HomeNav;
