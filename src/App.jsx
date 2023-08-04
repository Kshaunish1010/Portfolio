import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from './components/navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      </div>
    </>
  )
}

export default App
