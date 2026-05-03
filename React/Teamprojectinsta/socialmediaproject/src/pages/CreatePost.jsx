import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/CreatePost.css';

export default function CreatePost() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const [formData, setFormData] = useState({
    caption: '',
    imageUrl: '',
    location: ''
  });
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const url = e.target.value;
    setFormData(prev => ({
      ...prev,
      imageUrl: url
    }));
    setPreview(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.caption.trim()) {
      setMessage('Please add a caption');
      return;
    }

    if (!formData.imageUrl.trim()) {
      setMessage('Please provide an image URL');
      return;
    }

    // Create new post
    const newPost = {
      id: Date.now(),
      author: currentUser.username,
      avatar: '👤',
      caption: formData.caption,
      imageUrl: formData.imageUrl,
      location: formData.location,
      timestamp: new Date().toLocaleDateString(),
      likes: 0,
      liked: false,
      comments: 0,
      shares: 0
    };

    // Get existing posts
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.unshift(newPost); // Add to beginning
    localStorage.setItem('posts', JSON.stringify(posts));

    setMessage('Post created successfully! Redirecting...');
    setTimeout(() => {
      navigate('/landing');
    }, 1500);
  };

  return (
    <div className="create-post-page">
      <Navbar />
      <div className="create-post-container">
        <div className="create-post-box">
          <h2>Create New Post</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>📸 Add Image</h3>
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleImageChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              {preview && (
                <div className="image-preview">
                  <img src={preview} alt="Post preview" />
                </div>
              )}
            </div>

            <div className="form-section">
              <h3>✍️ Add Caption</h3>
              <div className="form-group">
                <textarea
                  name="caption"
                  value={formData.caption}
                  onChange={handleChange}
                  placeholder="Write a caption... (max 300 characters)"
                  maxLength="300"
                  rows="5"
                  required
                />
                <div className="char-count">
                  {formData.caption.length}/300
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>📍 Location (Optional)</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Add location..."
                />
              </div>
            </div>

            {message && (
              <div className={message.includes('successfully') ? 'success-msg' : 'error-msg'}>
                {message}
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn-post">
                Share Post ✨
              </button>
              <button 
                type="button" 
                className="btn-cancel"
                onClick={() => navigate('/landing')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
