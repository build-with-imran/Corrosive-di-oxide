import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About SLA Institute</h1>
        <p>Building Careers, Creating Futures</p>
      </div>

      <section className="about-content">
        <div className="content-block">
          <h2>Our Mission</h2>
          <p>
            At SLA Institute, our mission is to empower individuals with in-demand technical skills 
            through comprehensive, practical education. We believe in bridging the gap between 
            academic learning and industry requirements.
          </p>
        </div>

        <div className="content-block">
          <h2>Our Vision</h2>
          <p>
            We envision a world where quality technical education is accessible to everyone, 
            regardless of their background. We aim to create professionals who are not just technically 
            proficient but also innovative thinkers and problem solvers.
          </p>
        </div>

        <div className="content-block">
          <h2>Why Us?</h2>
          <ul className="about-list">
            <li>✓ Industry-experienced instructors with 10+ years of expertise</li>
            <li>✓ Curriculum designed according to current market demands</li>
            <li>✓ One-on-one mentorship and personalized learning paths</li>
            <li>✓ Real-world project experience</li>
            <li>✓ Job placement assistance and career counseling</li>
            <li>✓ Flexible learning schedules (Online and Offline)</li>
            <li>✓ Affordable and transparent pricing</li>
            <li>✓ Lifetime access to course materials</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement">
              <h3>500+</h3>
              <p>Students Graduated</p>
            </div>
            <div className="achievement">
              <h3>85%</h3>
              <p>Job Placement Rate</p>
            </div>
            <div className="achievement">
              <h3>6</h3>
              <p>Core Courses</p>
            </div>
            <div className="achievement">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
