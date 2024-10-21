// src/Footer.js
import './About.css';
const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Routes</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Grievances</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact us</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Sangharash</p>
      </footer>
    </div>
  );
};

export default Footer;
