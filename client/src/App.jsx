import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Home />
      </main>
    </div>
  )
}

export default App
