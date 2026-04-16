import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';
import Form from './Form';

import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseDetails />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>&copy; 2024 SLA Institute. All rights reserved. | Contact: info@slainstitute.com</p>
      </footer>
    </Router>
  );
}

export default App; 
