import { useState } from "react"
import { useEffect } from "react";
import SinglePlayers from "./SinglePlayers"
import { useNavigate } from "react-router-dom";

function AllPlayers( {playerId, setPlayerId} ) {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        async function renderAllPlayers () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players");
                const result = await response.json();
                const playersRender = result.data.players;
                setPlayers(playersRender);
            } catch (err) {
                console.error(err)
            }
        }
        renderAllPlayers()
    },[])

    function routeChange(player) {
        const path = `/SinglePlayers/${player.id}`
        navigate(path);
    }
    function pleaseWork(player){
        const selPlayer = player.id;
        setPlayerId(selPlayer)
    }

  
    return (
        <div>
        {
            players.map((player)=>{
                return (
                    <div key={player.id} className="player-card">
                        <ul>{player.name}</ul>
                        <img src={player.imageUrl} alt="pup-Image" className="pup-img"/>
                        <button onClick={() => {
                            routeChange(player)
                        }} >hi</button>
                        
                    </div>
                )
            })
        }
    </div>
    )
  }
  
  export default AllPlayers