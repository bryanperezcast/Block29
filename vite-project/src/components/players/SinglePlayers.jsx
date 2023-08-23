import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import DeletePlayer from "./DeletePlayer";

function singlePlayers({ playerId, setPlayerId }) {
  const [curPlayer, setCurPlayer] = useState([]);
  const [curTeam, setCurTeam] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function renderSinglePlayerId(player) {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-bnpx pre/players/${id}`,
        );
        const result = await response.json();
        const PlayerRender = result.data.player;
        const team = PlayerRender.team;
        setCurTeam(team);
        setCurPlayer(PlayerRender);
      } catch (err) {
        console.error("error: " + err);
      }
    }
    renderSinglePlayerId();
  }, []);

  return (
    <div className="player-card">
      <h1>{curPlayer.name}</h1>
      <img src={curPlayer.imageUrl} alt="pup-Image" className="pup-img" />
      <ul>Breed- {curPlayer.breed}</ul>
      <ul>Position- {curPlayer.status}</ul>
      <h3 className="team-card">Team</h3>
      {
        //<ul className="team-card">Team Number- {curPlayer.teamId}</ul>
        //<ul className="team-card">Team Name- {curTeam.name}</ul>
        //<ul className="team-card">Team Score- {curTeam.score}</ul>
      }
      <DeletePlayer />
    </div>
  );
}

export default singlePlayers;
