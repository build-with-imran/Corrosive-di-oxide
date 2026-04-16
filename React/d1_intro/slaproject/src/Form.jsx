import { useState } from 'react';
import './Formtype.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      alert('Mobile number must be 10 digits');
      return;
    }
    setSubmitted(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setFormData({ name: '', mobile: '', course: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <h1>Enroll Now</h1>
      {submitted ? (
        <div className="success-message">
          ✓ Thank you {formData.name}! Your enrollment request has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number (10 digits)"
            value={formData.mobile}
            onChange={handleChange}
            maxLength="10"
            required
          />
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Preferred Course</option>
            <option value="React JS">React JS</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Node JS">Node JS</option>
            <option value="Express JS">Express JS</option>
            <option value="MongoDB">MongoDB</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}