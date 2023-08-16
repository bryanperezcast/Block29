import './App.css'
import { useState } from 'react'
import Home from './components/nav/Home'
import Search from './components/nav/Search'
import Form from './components/nav/Form'
import SinglePlayers from './components/players/SinglePlayers'
import AllPlayers from './components/players/AllPlayers'
import { Routes, Route, Link } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'

function App() {
  const [playerId, setPlayerId] = useState(null)
  const [player, setPlayer] = useState(null)

  return (
    <div className='container'>
      <div id="navbar">
        <Link to= "/Home" ><AiOutlineHome /></Link>
        <Link to= "/Search" ><AiOutlineSearch /></Link>
        <Link to= "/Form" ><MdOutlineCreate /></Link>
      </div>
      <div>
      <Link to= "/SinglePlayers" ></Link>
      </div>

      <div className='main-section'>
        <Routes>
          <Route path='/Home' element= {<Home />} />
          <Route path='/Search' element= {<Search/>} />
          <Route path='/Form' element= {<Form/>} />
          <Route path="/SinglePlayers/:id" element= {<SinglePlayers />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
