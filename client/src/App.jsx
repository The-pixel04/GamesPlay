import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import { Route, Routes } from 'react-router'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import GameCreate from './components/gameCrete/GameCreate.jsx'
import GameCatalog from './components/catalog/Catalog.jsx'
import GameDetails from './components/gameDetails/GameDetails.jsx'
import GameEdit from './components/gameEdit/GameEdit.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/games' element={<GameCatalog />} />
          <Route path='/games/:gameId/details' element={<GameDetails />} />
          <Route path='/games/:gameId/edit' element={<GameEdit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
