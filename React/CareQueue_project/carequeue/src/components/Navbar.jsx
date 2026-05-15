// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { CONSULTATION_TYPES } from "../data/consultations";

const SERVICES = ["blood tests", "ultrasound", "scans", "x-ray", "ecg", "echocardiogram", ...CONSULTATION_TYPES];

const Navbar = () => {
  const { logout } = useAuth();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const handleLogout = () => {
    logout();
  };

  const filteredServices = SERVICES.filter(s => s.toLowerCase().includes(query.toLowerCase()));

  const handleSelectService = (service) => {
    setQuery(service);
    setShowSuggestions(false);
    navigate(`/search?service=${encodeURIComponent(service)}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav style={styles.nav}>
      
      {/* Left - Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="CareQueue logo" style={styles.logoImage} />
          <span>CareQueue</span>
        </Link>
      </div>

      {/* Center - Search */}
      <div style={styles.searchContainer} ref={searchRef}>
        <input
          type="text"
          placeholder="Search tests, scans, consultations, doctors..."
          style={styles.input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && (
          <div style={styles.dropdown}>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div 
                  key={index} 
                  style={styles.dropdownItem}
                  onClick={() => handleSelectService(service)}
                  onMouseEnter={(e) => e.target.style.background = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  {service}
                </div>
              ))
            ) : (
              <div style={styles.dropdownItemEmpty}>No matching services found</div>
            )}
          </div>
        )}
      </div>

      {/* Right - Menu */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/book-appointments" style={styles.link}>Book Appointment</Link>
        <Link to="/appointments" style={styles.link}>My Appointments</Link>
        <Link to="/about" style={styles.link}>About</Link>

        {currentUser ? (
          <>
            <span style={styles.user}>Hi, {currentUser.email}</span>
            <button onClick={handleLogout} style={styles.btn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.btn}>Login</Link>
            <Link to="/signup" style={styles.btn}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "white",
    color: "#1f2937",
    borderBottom: "1px solid #e5e7eb",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#dc2626",
  },
  logoLink: {
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    whiteSpace: "nowrap",
  },
  logoImage: {
    width: "42px",
    height: "42px",
    objectFit: "contain",
    display: "block",
  },
  searchContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  input: {
    width: "60%",
    padding: "10px 16px",
    borderRadius: "20px",
    border: "1px solid #d1d5db",
    outline: "none",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    width: "60%",
    marginTop: "8px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
    overflow: "hidden",
    textAlign: "left",
  },
  dropdownItem: {
    padding: "12px 16px",
    cursor: "pointer",
    color: "#374151",
    borderBottom: "1px solid #f3f4f6",
    transition: "background 0.2s",
  },
  dropdownItemEmpty: {
    padding: "12px 16px",
    color: "#9ca3af",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#1f2937",
    textDecoration: "none",
  },
  btn: {
    background: "#dc2626",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
  },
  user: {
    fontSize: "14px",
    color: "#1f2937",
  },
};
