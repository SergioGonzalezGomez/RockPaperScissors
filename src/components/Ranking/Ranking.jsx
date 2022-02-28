import React from 'react';
import './Ranking.css';

export default function Ranking(props) {
    
    //sortPlayersData ordena los datos de los jugadores según sus victorias
    function sortPlayersData(data) {
        return data.sort((a, b) => b.gamesWon - a.gamesWon)
    }
    
    let sortedPlayers = sortPlayersData(props.playersData)
    let top10 = sortedPlayers.slice(0, 10)

    const rankedPlayers = top10.map(player => {  
        return (
            <div className="ranking-div__player">
                <h4 className="ranking-div__player--data">{ player.name }</h4>
                <h4 className="ranking-div__player--data">{ player.gamesWon }</h4>
            </div>
        )
    })

    // la variable from muestra qué destino tiene el botón exit dependiendo de en qué modalidad de juego estamos
    const from = props.isSpock ? "MainSpock" : "Main"
    
    return (
        <div className="ranking-container">
           <div className="ranking-exitButtonDiv" onClick={() => {props.toggleStart(from)}}>
               <img className="ranking-exitButtonImg" src="./images/exit.png" alt="exit"/>
            </div>
            <div className="ranking-div">
                <div className="ranking-div__headr">
                    <h2>Name</h2>
                    <h2>Wins</h2>
                </div>
                {rankedPlayers}
            </div>
        </div>
    )
}