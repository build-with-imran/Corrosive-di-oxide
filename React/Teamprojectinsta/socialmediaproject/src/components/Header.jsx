import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Vango</h1>
        </div>
        {currentUser && (
          <div className="user-section">
            <span className="username">Welcome, {currentUser.username}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
