import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" style={{ height: '80px' }}>
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
            <ul className="navbar-nav" style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <li className="nav-item">
                <Link className="nav-link active" style={{ color: 'white' }} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'white' }} to="/j">CareerQuest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'white' }} to="/c">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'white' }} to="/a">AboutUs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
