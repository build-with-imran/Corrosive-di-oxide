import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 onClick={() => navigate('/landing')}>Vango</h1>
        </div>

        <div className="navbar-center">
          <button 
            className="nav-btn home-btn" 
            onClick={() => navigate('/landing')}
            title="Home"
          >
            🏠 Home
          </button>
          <button 
            className="nav-btn create-btn" 
            onClick={() => navigate('/create-post')}
            title="Create Post"
          >
            ➕ Create Post
          </button>
          <button 
            className="nav-btn explore-btn"
            title="Explore"
          >
            🔍 Explore
          </button>
        </div>

        <div className="navbar-right">
          <span className="navbar-user">{currentUser?.username}</span>
          <button onClick={handleLogout} className="navbar-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
