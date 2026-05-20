import { useNavigate } from 'react-router-dom';

export default function TopicCard({ topic, isSelected, onSelect }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/topic/${topic.id}`);
  };

  return (
    <div
      className={`topic-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(topic)}
    >
      <div className="card-icon">
        {topic.shortTitle.charAt(0)}
      </div>
      <h3>{topic.shortTitle}</h3>
      <p>{topic.description}</p>
      <button className="card-button" onClick={(e) => {
        e.stopPropagation();
        handleLearnMore();
      }}>
        Learn More
      </button>
    </div>
  );
}
