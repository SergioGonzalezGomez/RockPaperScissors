import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Ranking from './components/Ranking/Ranking';

export default function App() {
  //Este estado sirve para decidir si se muestra home o main
  const [start, setStart] = React.useState("Home")

  //Este estado hace get a players en el localStorage cada vez que se arranca la app. Y si no encuentra el array es vacío
  const [playersData, setPlayersData] = React.useState(
    () => JSON.parse(localStorage.getItem("players")) || []
  )

  //Este estado hace referencia al nombre del jugador activo
  const [playerName, setPlayerName] = React.useState("")

  //Este estado dice en qué modalidad de juego estás
  const [isSpock, setIsSpock] = React.useState(false)

  //Este useEffect se ejecuta cada vez que playersData cambia para sincronizarlo con el localStorage
  React.useEffect(() => {
    localStorage.setItem("players", JSON.stringify(playersData))
  }, [playersData])

  //La funcion toggleStart hará que el estado Start cambie y con eso se navegue entre Main y Home
  function toggleStart(whereTo) {
    setStart(whereTo)
    if (whereTo === "MainSpock") {
      setIsSpock(true)
    } else if (whereTo === "Main") {
      setIsSpock(false)
    }
  }

  //La funcion findCurrentPlayer buscará en playersData el nombre del jugador para devolver todos los datos del jugador
  function findCurrentPlayer() {
    const playerRecord = playersData.find(player => player.name === playerName)
    return playerRecord
  }

  //La funcion createNewPlayer genera los datos del nuevo jugador en caso de que no exista y lo añade a setPlayersData
  function createNewPlayer() {
    const newPlayer = {
      name: playerName,
      gamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0
    }
    setPlayersData(oldPlayersData => [...oldPlayersData, newPlayer])
  }

  //la funcion updatePlayer actualizará el estado playersData que se sincroniza con el localStorage
  //gracias al useEffect que hace que se mantenga actualizado el localStorage cada vez que cambie el playersData
  function updatePlayer(moveResult) {
    setPlayersData(oldPlayersData => oldPlayersData.map(player => {
       if (player.name === playerName) {
         return {
          name: playerName,
          gamesPlayed: player.gamesPlayed + 1,
          gamesWon: moveResult === "You win!" ? player.gamesWon + 1 : player.gamesWon,
          gamesLost: moveResult === "You lose!" ? player.gamesLost + 1 : player.gamesLost
         }
       } else {
          return player 
       }
    }))
  }

  return (
    <div className="App">
      {(start === "Home") && <Home
        toggleStart={toggleStart}
        playerName={playerName}
        setPlayerName={setPlayerName}
        currentPlayer={findCurrentPlayer()}
        createNewPlayer={createNewPlayer}
      />}
      {((start === "Main") || (start === "MainSpock")) && <Main
        toggleStart={toggleStart}
        currentPlayer={findCurrentPlayer()}
        updatePlayer={updatePlayer}
        isSpock={isSpock}
      />}
      {(start === "Ranking") && <Ranking
        toggleStart={toggleStart}
        playersData={playersData}
        isSpock={isSpock}
      />}
      </div>
  );
}