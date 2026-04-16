import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    preferredCourse: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'React JS',
    'HTML',
    'CSS',
    'Node JS',
    'Express JS',
    'MongoDB'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobileNumber || !formData.preferredCourse) {
      alert('Please fill all fields');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    console.log('Form Data:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        mobileNumber: '',
        preferredCourse: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>Enroll in SLA Institute</h1>
        <p>Fill in your details to get started with your learning journey</p>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your enrollment request has been submitted successfully.</p>
            <p>We will contact you shortly at {formData.mobileNumber}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enrollment-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number *</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                pattern="\d{10}"
                required
              />
              <small>Enter a 10-digit mobile number</small>
            </div>

            <div className="form-group">
              <label htmlFor="preferredCourse">Preferred Course *</label>
              <select
                id="preferredCourse"
                name="preferredCourse"
                value={formData.preferredCourse}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a Course --</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-button">
              Submit Enrollment
            </button>
          </form>
        )}

        <div className="form-info">
          <h3>Why Enroll with Us?</h3>
          <ul>
            <li>✓ Industry-leading instructors</li>
            <li>✓ Flexible learning schedules</li>
            <li>✓ Job placement assistance</li>
            <li>✓ Lifetime course access</li>
            <li>✓ Money-back guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
