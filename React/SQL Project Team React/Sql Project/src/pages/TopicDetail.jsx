import { useParams, useNavigate } from 'react-router-dom';
import { ALL_TOPICS } from '../constants/topics';
import '../styles/TopicDetail.css';

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = ALL_TOPICS.find(t => t.id === parseInt(id));

  if (!topic) {
    return (
      <div className="topic-detail-container">
        <div className="topic-not-found">
          <h1>Topic Not Found</h1>
          <p>Sorry, we couldn't find this topic.</p>
          <button onClick={() => navigate('/dashboard')} className="back-btn">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const contentParagraphs = topic.content.split('\n').filter(p => p.trim());

  return (
    <div className="topic-detail-container">
      <div className="topic-detail-card">
        <button onClick={() => navigate('/dashboard')} className="back-btn">
          ← Back to Dashboard
        </button>

        <div className="topic-header">
          <div className="topic-icon">{topic.shortTitle.charAt(0).toUpperCase()}</div>
          <h1>{topic.title}</h1>
          <p className="topic-subtitle">{topic.description}</p>
        </div>

        <div className="topic-content">
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="content-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="topic-footer">
          <button onClick={() => navigate('/dashboard')} className="back-btn">
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
