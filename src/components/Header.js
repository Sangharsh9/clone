import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ selectedTab, setSelectedTab }) {
  return (
    <header className="p-1" style={{ backgroundColor: '#c9c4c9' }}> {/* Reduced padding */}
      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            {/* College Logo and Name */}
            <div className="d-flex align-items-center me-3">
              <img src="https://icosst.in/img/Web-Logo.png" alt="College Logo" width="50" height="50" className="me-2" /> {/* Reduced logo size */}
              <h5 className="text-dark" style={{ fontSize: '1.2rem' }}>Sanjivani Institutes Bus Service </h5> {/* Adjusted font size */}
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li onClick={() => { setSelectedTab("Home") }}>
                <a href="#" className="nav-link px-2 text-dark">Home</a>
              </li>
              <li onClick={() => { setSelectedTab("Routes") }}>
                <a href="#" className="nav-link px-2 text-dark">Routes</a>
              </li>
              <li onClick={() => { setSelectedTab("graviance") }}>
                <a href="#" className="nav-link px-2 text-dark">Graviance</a>
              </li>
              <li onClick={() => { setSelectedTab("Contact") }}>
                <a href="#" className="nav-link px-2 text-dark">Contact</a>
              </li>
              <li onClick={() => { setSelectedTab("About") }}>
                <a href="#" className="nav-link px-2 text-dark">About</a>
              </li>
            </ul>
          </div>

          {/* Right-aligned buttons */}
          <div className="text-end">
            <a onClick={() => { setSelectedTab("Login") }} className="btn btn-outline-dark me-2">Login</a>
            <a href="/signup" className="btn btn-light">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
