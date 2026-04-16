import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SLA Institute</h1>
          <p>Your Gateway to Professional Excellence</p>
          <button className="cta-button">Start Learning Today</button>
        </div>
      </div>

      <section className="about-preview">
        <h2>About SLA Institute</h2>
        <p>
          SLA Institute is a premier educational platform dedicated to providing quality technical education. 
          We offer comprehensive courses in modern web development, including React JS, HTML, CSS, Node.js, 
          Express.js, and MongoDB. Our experienced instructors are committed to helping you achieve your career goals.
        </p>
      </section>

      <section className="features">
        <h2>Why Choose SLA Institute?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <h3>💻 Hands-on Projects</h3>
            <p>Build real-world projects and gain practical skills</p>
          </div>
          <div className="feature-card">
            <h3>🎓 Certification</h3>
            <p>Earn recognized certificates upon course completion</p>
          </div>
          <div className="feature-card">
            <h3>💼 Career Support</h3>
            <p>Get guidance for your career advancement</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
