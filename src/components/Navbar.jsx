import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            CareerConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add" style={{ color: 'white' }}>
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view" style={{ color: 'white' }}>
                  View
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/v" style={{ color: 'white' }}>
                  INTERVIEW
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/m" style={{ color: 'white' }}>
                  CHAT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Confirmation" style={{ color: 'white' }}>
                  Job Appicants
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
