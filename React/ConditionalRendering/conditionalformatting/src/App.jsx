import { useState } from "react";

const App = () => {
const [color, setColor] = useState(true);


 
const handleclick = () => {
  setColor(!color);

}
  return (
    <>
    <div>
      <div className="bg-pink-400 flex flex-col gap-8 items-center justify-center h-80">
        <h1>Conditional Rendering Process</h1>
        <p>{color ? <p claassName="text-white bg-pink-400">Naaan dhaan daa LEO...... LEO dasssss </p> : <p className="text-white bg-blue-950">Naa Ready thaan varavaaa </p>}</p>

        
        <button onClick={handleclick} className="bg-white text-black w-50 h-8 cursor-pointer">
          Click me to change Color
        </button>
      </div>
      </div>
    </>
  );
};

export default App;