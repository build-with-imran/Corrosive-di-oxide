// components/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (validUser) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate("/home"); // redirect to home/dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white border-2 border-red-500 rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo Space */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 flex items-center justify-center">
            <img src={logo} alt="CareQueue logo" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-red-600">
          Don't have an account? <Link to="/signup" className="font-semibold hover:underline">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
