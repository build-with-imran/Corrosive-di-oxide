import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Landing.css';

export default function Landing() {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' or 'reels'
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [likedReels, setLikedReels] = useState({});
  const [reels] = useState([
    {
      id: 1,
      author: 'Alex Chen',
      avatar: '👨‍💻',
      title: 'Amazing sunset at the beach',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+1',
      likes: 342,
      liked: false,
      views: 1250,
      comments: 45
    },
    {
      id: 2,
      author: 'Sarah Creative',
      avatar: '🎨',
      title: 'Art studio tour',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+2',
      likes: 521,
      liked: false,
      views: 2100,
      comments: 67
    },
    {
      id: 3,
      author: 'Travel Vibes',
      avatar: '✈️',
      title: 'Exploring Tokyo streets',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+3',
      likes: 892,
      liked: false,
      views: 3450,
      comments: 128
    },
    {
      id: 4,
      author: 'Foodie Life',
      avatar: '🍕',
      title: 'Making homemade pizza',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+4',
      likes: 456,
      liked: false,
      views: 1890,
      comments: 89
    },
    {
      id: 5,
      author: 'Fitness Coach',
      avatar: '💪',
      title: 'Morning workout routine',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+5',
      likes: 678,
      liked: false,
      views: 2340,
      comments: 156
    },
    {
      id: 6,
      author: 'Music Producer',
      avatar: '🎵',
      title: 'Beat drop compilation',
      videoUrl: 'https://via.placeholder.com/400x700?text=Video+6',
      likes: 734,
      liked: false,
      views: 2890,
      comments: 203
    }
  ]);

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  const toggleLikePost = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleLike = (reelId) => {
    setLikedReels(prev => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  return (
    <div className="landing">
      <Navbar />
      <div className="landing-container">
        <div className="feed-tabs">
          <button 
            className={`tab-btn ${activeTab === 'feed' ? 'active' : ''}`}
            onClick={() => setActiveTab('feed')}
          >
            📰 Feed {posts.length > 0 && `(${posts.length})`}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reels' ? 'active' : ''}`}
            onClick={() => setActiveTab('reels')}
          >
            🎬 Reels
          </button>
        </div>

        {activeTab === 'feed' && (
          <div className="posts-section">
            {posts.length === 0 ? (
              <div className="empty-state">
                <h3>📝 No posts yet!</h3>
                <p>Create your first post to get started</p>
              </div>
            ) : (
              <div className="posts-feed">
                {posts.map(post => (
                  <div key={post.id} className="post-card">
                    <div className="post-header">
                      <div className="post-author">
                        <span className="post-avatar">{post.avatar}</span>
                        <div className="author-info">
                          <h4>{post.author}</h4>
                          <span className="post-time">{post.timestamp}</span>
                          {post.location && <span className="post-location">📍 {post.location}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="post-caption">
                      {post.caption}
                    </div>

                    <div className="post-image">
                      <img src={post.imageUrl} alt={post.caption} />
                    </div>

                    <div className="post-stats">
                      <span className="stat">{post.likes} likes</span>
                      <span className="stat">{post.comments} comments</span>
                      <span className="stat">{post.shares} shares</span>
                    </div>

                    <div className="post-actions">
                      <button 
                        className={`action-btn like-btn ${likedPosts[post.id] ? 'liked' : ''}`}
                        onClick={() => toggleLikePost(post.id)}
                      >
                        {likedPosts[post.id] ? '❤️' : '🤍'} Like
                      </button>
                      <button className="action-btn">
                        💬 Comment
                      </button>
                      <button className="action-btn">
                        📤 Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'reels' && (
          <div className="reels-grid">
            {reels.map(reel => (
              <div key={reel.id} className="reel-card">
                <div className="reel-header">
                  <div className="author-info">
                    <span className="avatar">{reel.avatar}</span>
                    <div className="author-details">
                      <h3>{reel.author}</h3>
                      <p>{reel.title}</p>
                    </div>
                  </div>
                </div>

                <div className="reel-video">
                  <img src={reel.videoUrl} alt={reel.title} />
                  <div className="video-overlay">
                    <span className="views-badge">👁️ {reel.views}</span>
                  </div>
                </div>

                <div className="reel-footer">
                  <div className="reel-stats">
                    <span className="stat-item">💬 {reel.comments}</span>
                    <span className="stat-item">👀 {reel.views}</span>
                  </div>

                  <button
                    className={`like-btn ${likedReels[reel.id] ? 'liked' : ''}`}
                    onClick={() => toggleLike(reel.id)}
                  >
                    <span>{likedReels[reel.id] ? '❤️' : '🤍'}</span>
                    <span className="like-count">
                      {reel.likes + (likedReels[reel.id] ? 1 : 0)}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
