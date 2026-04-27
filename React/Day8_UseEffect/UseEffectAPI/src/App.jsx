import { useEffect, useState } from "react"



const App = ()=> {
  const [data, setData] = useState([])
  
  useEffect(()=>{


    const fetchData = async () => {

      const getData = await fetch("https://dummyjson.com/products")
      const data = await getData.json()
      setData(data.products)

    }
    fetchData()},[])

  

  
  return (
<>
return 
    <>
      <h1>Product Table</h1>

      <table border="1" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    





  {data.map((e)=>(

    <p key={e.id}>{e.title}</p>
  ))}





</>






</>




  )}
export default App