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
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const filteredServices = SERVICES.filter((service) =>
    service.toLowerCase().includes(query.toLowerCase())
  );

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  const handleSelectService = (service) => {
    setQuery(service);
    setShowSuggestions(false);
    closeMenu();
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

  const navLinks = (
    <>
      <Link to="/" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-600">
        Home
      </Link>
      <Link to="/book-appointments" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-600">
        Book
      </Link>
      <Link to="/appointments" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-600">
        Appointments
      </Link>
      <Link to="/about" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-600">
        About
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 md:flex-nowrap md:px-6">
        <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-2 text-lg font-extrabold text-red-600">
          <img src={logo} alt="CareQueue logo" className="h-10 w-10 shrink-0 object-contain" />
          <span className="truncate">CareQueue</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <div className="order-3 w-full md:order-none md:min-w-64 md:flex-1" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search tests, scans, consultations..."
              className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white text-left shadow-xl">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <button
                      type="button"
                      key={`${service}-${index}`}
                      className="block w-full border-b border-slate-100 px-4 py-3 text-left text-sm text-slate-700 last:border-b-0 hover:bg-slate-50"
                      onClick={() => handleSelectService(service)}
                    >
                      {service}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-slate-400">No matching services found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks}
          {currentUser ? (
            <>
              <span className="max-w-36 truncate px-2 text-sm text-slate-500" title={currentUser.email}>
                {currentUser.email}
              </span>
              <button onClick={handleLogout} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                Login
              </Link>
              <Link to="/signup" className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-3">
            {navLinks}
            {currentUser && (
              <p className="break-all px-3 py-2 text-xs font-medium text-slate-500">
                Signed in as {currentUser.email}
              </p>
            )}
            {currentUser ? (
              <button onClick={handleLogout} className="mt-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white">
                Logout
              </button>
            ) : (
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link to="/login" onClick={closeMenu} className="rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white">
                  Login
                </Link>
                <Link to="/signup" onClick={closeMenu} className="rounded-lg border border-red-200 px-4 py-3 text-center text-sm font-semibold text-red-600">
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
