const App = () => {

const name = "Rocky Bhai "
const age = 28
const isvalue = true
const whenvalue = true

  return ( <>
   <h1>Welcome to the World of KGF</h1>
    <h2>His Name is, {name}!!!</h2>
    <p>He is  {age} years old.</p>
    <h3>{isvalue ? "He is a Monster" : "He is Very Very Good Monster "}</h3>
   
    <p>Avan Kurukka Yaarum Poidaadheenga sir.</p>
    <h2>{whenvalue && "Aiyayoooooooooo.....!!!!!!!"}</h2>
  </>
  )
}

export default App