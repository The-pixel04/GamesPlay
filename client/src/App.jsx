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
import { UserContext } from './contexts/UserContext.js'

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler }}>
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
    </UserContext.Provider>
  )
}

export default App
