import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>CareerConnect</a>
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/view" style={{ color: 'white' }}>
                  View
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/m" style={{ color: 'white' }}>
                  Chatlink
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/joblist" style={{ color: 'white' }}>
                  JobLists
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/l" style={{ color: 'white' }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
