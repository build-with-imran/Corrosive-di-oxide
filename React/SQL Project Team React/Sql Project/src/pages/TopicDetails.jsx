import { useParams, useNavigate } from 'react-router-dom';
import { ALL_TOPICS } from '../constants/topics';
import '../styles/TopicDetails.css';

export default function TopicDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the topic based on the ID from the URL
  const topic = ALL_TOPICS.find(t => t.id === parseInt(id));

  if (!topic) {
    return (
      <div className="topic-details-page">
        <div className="topic-not-found">
          <h2>Topic not found</h2>
          <button className="back-button" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-details-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        &larr; Back to Dashboard
      </button>
      
      <header className="topic-header">
        <h1>{topic.title}</h1>
        <p className="topic-description">{topic.description}</p>
      </header>
      
      <main className="topic-content-body">
        {topic.content.split('\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </main>
    </div>
  );
}
