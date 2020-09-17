import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        CID
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <NavLink className="nav-item nav-link" to="/current-projects">
            Current Projects
          </NavLink>
          <NavLink className="nav-item nav-link" to="/new-project">
            New Project
          </NavLink>
          <NavLink className="nav-item nav-link" to="/past-projects">
            Past Projects
          </NavLink>
          <NavLink className="nav-item nav-link" to="/library">
            Library
          </NavLink>
        </div>
      </div>
      <button type="button" className="btn btn-outline-dark">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-person-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>{" "}
        Logout
      </button>
    </nav>
  );
}
