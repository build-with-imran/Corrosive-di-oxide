import './CourseDetails.css';

const CourseDetails = () => {
  const courses = [
    {
      id: 1,
      name: 'HTML',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$99',
      description: 'Learn the fundamentals of HTML, the building block of web development. Master semantic HTML, forms, and accessibility.',
      modules: ['HTML Basics', 'Semantic Elements', 'Forms & Validation', 'HTML5 Features']
    },
    {
      id: 2,
      name: 'CSS',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$99',
      description: 'Master CSS for styling and responsive design. Learn Flexbox, Grid, and modern CSS techniques.',
      modules: ['CSS Basics', 'Flexbox Layout', 'CSS Grid', 'Responsive Design', 'Animations']
    },
    {
      id: 3,
      name: 'React JS',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$199',
      description: 'Build interactive user interfaces with React. Learn components, hooks, state management, and modern React patterns.',
      modules: ['React Basics', 'Components & JSX', 'Props & State', 'Hooks', 'React Router', 'State Management']
    },
    {
      id: 4,
      name: 'Node JS',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$149',
      description: 'Server-side JavaScript development with Node.js. Build scalable backend applications and APIs.',
      modules: ['Node Basics', 'File System', 'HTTP Server', 'NPM Packages', 'Middleware', 'Error Handling']
    },
    {
      id: 5,
      name: 'Express JS',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$149',
      description: 'Build robust REST APIs with Express.js framework. Learn routing, middleware, and best practices.',
      modules: ['Express Setup', 'Routing', 'Middleware', 'Error Handling', 'Request/Response', 'API Design']
    },
    {
      id: 6,
      name: 'MongoDB',
      duration: '5 weeks',
      level: 'Intermediate',
      price: '$129',
      description: 'Master MongoDB database design and operations. Learn document-based data storage and queries.',
      modules: ['MongoDB Basics', 'Collections', 'CRUD Operations', 'Indexing', 'Aggregation', 'Schema Design']
    }
  ];

  return (
    <div className="course-details">
      <div className="course-header">
        <h1>Our Courses</h1>
        <p>Choose from our comprehensive course catalog</p>
      </div>

      <section className="courses-section">
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-badge">{course.level}</div>
              <h2>{course.name}</h2>
              <div className="course-meta">
                <span className="duration">📚 {course.duration}</span>
                <span className="price">{course.price}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="modules">
                <h4>Course Modules:</h4>
                <ul>
                  {course.modules.map((module, idx) => (
                    <li key={idx}>✓ {module}</li>
                  ))}
                </ul>
              </div>
              <button className="enrollBtn">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="course-benefits">
        <h2>What You'll Get</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🎥</span>
            <h3>Video Lectures</h3>
            <p>Comprehensive video tutorials from industry experts</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📝</span>
            <h3>Assignments</h3>
            <p>Practical assignments to reinforce learning</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🤝</span>
            <h3>Mentorship</h3>
            <p>Personal guidance from experienced mentors</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📜</span>
            <h3>Certificate</h3>
            <p>Industry-recognized completion certificate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
