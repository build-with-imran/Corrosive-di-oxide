import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1>
        {isLoggedIn ? "Welcome, User!" : "Please Login"}
      </h1>

      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>
  );
};

export default App;