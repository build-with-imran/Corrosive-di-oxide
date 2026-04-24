import { Link } from 'react-router-dom';
import logo from './assets/1.jpg';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Services</Link>
        <Link to="/" className="nav-link">Contact</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/auth" className="auth-btn">Login / Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;