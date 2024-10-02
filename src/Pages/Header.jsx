import React from "react";
import "../App.css";
import img from "../../public/logo.png";
import { Link } from "react-router-dom";
import About from "./About";

function Header() {
  return (
    <div className="header">
      <header className="containerrr">
        <div className="logodiv">
          <img className="logo" src={img} alt="" />
          <h2>Admin</h2>
        </div>
        <nav>
          <ul className="nav-lust">
            <li className="nav-itms">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-itms">
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <label className="containerr">
            <svg
              className="bell-regular"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </label>

          <button>
            <svg
              aria-hidden="true"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Saqlash
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
