import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { isUserLoggedIn, user } = useAuth();

  return (
    <nav
      className="navbar has-shadow py-3 is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a style={{ marginLeft: 15 }} className="navbar-item" href="/">
          <strong style={{ fontWeight: "700", fontSize: 24 }}>
            Adventurers
          </strong>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div class="navbar-start">
          <Link to={{ pathname: "destinations" }} class="navbar-item">
            Destinations
          </Link>
          <Link to={{ pathname: "book" }} class="navbar-item">
            Book a Table
          </Link>
          <Link to={{ pathname: "places" }} class="navbar-item">
            Places to Visit
          </Link>
          <Link to={{ pathname: "restaurants" }} class="navbar-item">
            Restaurants
          </Link>
          <Link to={{ pathname: "email" }} class="navbar-item">
            Email
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {isUserLoggedIn() ? (
              <>
                <div
                  style={{ color: "white", fontSize: 20 }}
                  className="navbar-item"
                >
                  {user.email}
                </div>
                <a
                  onClick={() => {
                    localStorage.setItem("token", "");
                  }}
                  href="/login"
                  className="navbar-item button"
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                  <span>Log Out</span>
                </a>
              </>
            ) : (
              <>
                <div className="navbar-item">
                  <Link
                    to={{ pathname: "/signup" }}
                    className="button is-info is-light"
                  >
                    <strong>SignUp</strong>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link
                    to={{ pathname: "/login" }}
                    className="button is-info is-light"
                  >
                    <strong>Log in</strong>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
