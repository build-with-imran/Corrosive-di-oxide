import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = (email, password, name) => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.find(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    // Store new user
    const newUser = { id: Date.now(), email, password, name };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Auto-login
    setUser({ id: newUser.id, email, name });
    localStorage.setItem('user', JSON.stringify({ id: newUser.id, email, name }));
    return newUser;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    const loggedInUser = { id: foundUser.id, email: foundUser.email, name: foundUser.name };
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    return loggedInUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
