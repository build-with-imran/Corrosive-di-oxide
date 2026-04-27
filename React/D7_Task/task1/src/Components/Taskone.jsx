import { useState } from "react";

const Taskone = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <button onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button>

      <p>
        {show ? "Paartha Nyaabagam Illayooooooo" : ""}
      </p>

    </div>
  );
};

export default Taskone;