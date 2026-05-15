import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-500">CareQueue</h2>
          <p className="text-slate-400">
            Modern Healthcare Simplified for You. We help you book appointments, manage your health records, and connect with top doctors seamlessly.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-slate-400 hover:text-red-400 transition-colors">Home</Link></li>
            <li><Link to="/book-appointments" className="text-slate-400 hover:text-red-400 transition-colors">Services</Link></li>
            <li>
              <button 
                onClick={() => navigate(-1)} 
                className="text-slate-400 hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit"
              >
                ← Go Back
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-slate-400 mb-2">Email: support@carequeue.com</p>
          <p className="text-slate-400">Phone: +91-9876543210</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} CareQueue. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors focus:outline-none shadow-lg"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
