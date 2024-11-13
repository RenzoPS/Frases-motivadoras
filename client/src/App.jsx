import { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [frase, setFrase] = useState("");
  const [key, setKey] = useState(Date.now()); 
  const obtenerFrase = async () => {
    const response = await axios.get('http://localhost:3000/frase-aleatoria');
    setFrase(response.data.frase);
    setKey(Date.now());
  }
  return (
    <>
      <div className='container'>
            <h1>Frase Inspiradora</h1>
            <button onClick={obtenerFrase}>Clickea aqui</button>
            {frase && <p className="frase" key={key}>{frase}</p>}
      </div>
    </>
  )
} 

export default App
