import { useState } from 'react'
import './App.css'
import { NavBar } from './Component/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <NavBar />
      </main>
      
    </>
  )
}

export default App
