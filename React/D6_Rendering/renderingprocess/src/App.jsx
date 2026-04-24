import { useState } from "react";

const App = () => {

  const[name, setName] = useState('');
  const [clickCount, setClickCount] = useState("");
  const handleChange = (e) => { 

    setName(e.target.value);
  }
  const handleClick = (e) => {

    e.preventDefault();
    setClickCount(name);
    
  }
  
  
  return (<>
  <div>

    <div><h1 className="flex justify-center text-center items-center w-full h-40 bg-blue-900 text-orange-300 text-7xl" >This Is Form Handling</h1></div>
  <div> 
    <form>
      
      <input  onChange={handleChange} type="text" placeholder="Enter Your Name" className="border-2 border-blue-900 rounded-lg p-2 m-2"/>
      <button onClick={handleClick}>Click To See the value</button>


    </form>

     </div>
  
   {/* <h1>{name}</h1> */}
  
  <h1 className="bg-green-950 text-amber-100 font-bold">{clickCount}</h1>
  
  </div>
  
  
  </>)
}

export default App