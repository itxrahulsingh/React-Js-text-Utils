import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.sitename}
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <div className="form-check form-switch float-end">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
            />
            <label className={`form-check-label text-${props.mode=== 'dark' ? 'light' : 'dark'}`}>
              {props.mode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  sitename: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  sitename: "React App",
};
