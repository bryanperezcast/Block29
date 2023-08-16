import AllPlayers from '../players/AllPlayers'
import { useState } from 'react'

function Home() {
    const [playerId, setPlayerId] = useState([])
  
    return (
        <div>
            <AllPlayers playerId={playerId} setPlayerId={setPlayerId} />
        </div>
    )
  }
  
  export default Home
  
  