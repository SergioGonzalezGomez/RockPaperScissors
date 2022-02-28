import React from 'react';
import './Home.css';

export default function Home(props) {

  const [errorMessage, setErrorMessage] = React.useState(false)

  function handleJoin() {
    if (validationName(props.playerName)) {
        if (props.currentPlayer === undefined) {
          props.createNewPlayer()
        }
        setErrorMessage(false)
        props.toggleStart("Main")
    } else {
        setErrorMessage(true)
    }
  }
 
  function validationName(name) {
    const re = /^[a-zA-Z0-9]+$/
    return re.test(String(name))
  }

  return (
    <div className="home-container">
      <h1 className="home-h1">Rock Paper Scissors!</h1>
      <img className="home-img" src="./images/home.png" alt="rock-paper-scissors"/>
      <h2 className="home-h2">Create new player</h2>
      <input 
      className="home-input" 
      placeholder="Enter your name" 
      value={props.playerName}
      onChange={(e) => props.setPlayerName(e.target.value)}   
      />
      <button className="home-button" onClick={handleJoin}>Join</button>
      {errorMessage && <p className="home-error">Your name only with letters and numbers, please!</p>}
    </div>
  )
}