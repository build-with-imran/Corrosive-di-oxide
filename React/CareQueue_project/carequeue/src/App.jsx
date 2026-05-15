import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { useAuth } from "./components/useAuth";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import SearchResults from "./components/SearchResults";
import BookAppointments from "./components/BookAppointments";
import BookingForm from "./components/BookingForm";
import MyAppointments from "./components/MyAppointments";
import About from "./components/About";

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <LandingPage /> : <AuthPage />} />
      <Route path="/search" element={isLoggedIn ? <SearchResults /> : <AuthPage />} />
      <Route path="/book-appointments" element={isLoggedIn ? <BookAppointments /> : <AuthPage />} />
      <Route path="/booking-form" element={isLoggedIn ? <BookingForm /> : <AuthPage />} />
      <Route path="/appointments" element={isLoggedIn ? <MyAppointments /> : <AuthPage />} />
      <Route path="/about" element={isLoggedIn ? <About /> : <AuthPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
