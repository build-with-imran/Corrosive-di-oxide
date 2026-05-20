import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopicCard from '../components/TopicCard';
import { SQL_TOPICS, REACT_TOPICS } from '../constants/topics';
import '../styles/Dashboard.css';

export default function Dashboard() {

  const [activeTab, setActiveTab] = useState('sql');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const displayTopics = activeTab === 'sql' ? SQL_TOPICS : REACT_TOPICS;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Learn SQL & React</h1>
          <p>Master SQL & React Concepts</p>
        </div>
        <div className="header-right">
          <span className="user-greeting">Welcome, {user?.name}!</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="topics-section">
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'sql' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('sql');

              }}
            >
              SQL Topics ({SQL_TOPICS.length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'react' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('react');

              }}
            >
              React Topics ({REACT_TOPICS.length})
            </button>
          </div>

          <div className="tab-content">
            <h2>{activeTab === 'sql' ? 'SQL Topics' : 'React Topics'}</h2>
            <p className="topics-subtitle">Click on any topic to learn more</p>
            
            <div className="topics-grid">
              {displayTopics.map(topic => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  isSelected={false}
                  onSelect={(topic) => navigate(`/topic/${topic.id}`)}
                />
              ))}
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
