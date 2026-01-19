import { useState, useRef } from 'react'
import './App.css';
import Drinks from './Drinks/Drinks';



function App() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if(nameRef.current){
      setName(nameRef.current.value);
    }
  }

  return (
    <>
      <p>{name}</p>
      <Drinks />
      <form onSubmit={handleSubmit} >
        <input ref={nameRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
