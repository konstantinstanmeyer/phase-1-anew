import { useState, useRef } from 'react'
import './App.css'

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
      <form onSubmit={handleSubmit} >
        <input ref={nameRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
