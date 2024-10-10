import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({selectedTab, setSelectedTab}) {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li onClick={() => { setSelectedTab("Home") }}>
              <a href="#" className="nav-link px-2 text-secondary">Home</a>
            </li>
          <li onClick={ () => {setSelectedTab("Routes")}}>
              <a href="#" className="nav-link px-2 text-white">Routes</a>
            </li>
          <li onClick={() => { setSelectedTab("graviance") }}>
            <a href="#" className="nav-link px-2 text-white">Graviance</a>
            </li>
            <li onClick={() => { setSelectedTab("Contact") }}>
              <a href="#" className="nav-link px-2 text-white">Contact</a>
            </li>
            <li onClick={() => { setSelectedTab("About") }}>
              <a href="#" className="nav-link px-2 text-white">About</a>
            </li>
          </ul>


          <div className="text-end">
            <a onClick={ () => {setSelectedTab("Login")}} className="btn btn-outline-light me-2">Login</a>
            <a href="/signup" className="btn btn-light">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

