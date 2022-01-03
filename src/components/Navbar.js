import React from "react";
import './body.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="navbar fixed-top shadow rounded navbar-expand-lg navbar-lighthover-overlay hover-zoom hover-shadow ripple bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand head" to="/">
            NewsHash
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active child" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/general">
                General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/sport">
                  Sport
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link child" to="/technology">
                  Technology
                </Link>
              </li>          
            </ul>
            <Link to="/profile"><img src="https://img.icons8.com/fluency/48/000000/test-account.png" alt="."/></Link>
            <Link to="/login"><button class="btn btn-outline-success " type="button">Sign In</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
