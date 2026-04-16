import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <h2 className="navbar-title">SLA Institute</h2>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          <li>
            <Link to="/courses" className="navbar-link">Course Details</Link>
          </li>
          <li>
            <Link to="/form" className="navbar-link">Enroll Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
