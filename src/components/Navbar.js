import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="dropdown mx-4">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Themes
            </button>
            <ul
              className="dropdown-menu text-center"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button
                  onClick={props.defaultTheme}
                  className="btn btn-light btn-outline-dark my-1 w-100"
                >
                  Default
                </button>
              </li>
              <li>
                <button
                  onClick={props.blueTheme}
                  className="btn btn-primary my-1 w-100"
                >
                  Dark Blue
                </button>
              </li>
              <li>
                <button
                  onClick={props.yellowTheme}
                  className="btn btn-warning my-1 w-100"
                >
                  Yellow
                </button>
              </li>
              <li>
                <button
                  onClick={props.greenTheme}
                  className="btn btn-success my-1 w-100"
                >
                  Dark Green
                </button>
              </li>
            </ul>
          </div>

          {/* <div className="form-check form-switch">
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"} mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
// search "react PropTypes" to know more about proptypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "your title here",
  aboutText: " about text here",
};
