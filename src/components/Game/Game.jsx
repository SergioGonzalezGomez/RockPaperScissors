import React from 'react';
import './Game.css';

export default function Game(props) {
    const [result, setResult] = React.useState("")
    const [message, setMessage] = React.useState("Result")
    const [lastBotMove, setLastBotMove] = React.useState("")
    const [isClicked, setIsClicked] = React.useState(false)

//La función processMove recibe como parámetro la elección del jugador y llama a calculateBotMove
//A su vez determina quién es el ganador y construye el mensaje
//Con el estado isClicked hago que no se pueda clickar mientras se procesa la jugada en curso
//Tarda 1 segundo en aparecer el resultado y la jugada del bot con el setTimeout

    function processMove(move) {
        if (!isClicked) {
            setIsClicked(true);
            setResult(`You: ${move} - Bot: ...`);
            setMessage("");
            const botMove = calculateBotMove();  
            setLastBotMove(botMove);
            const moveResult = calculateResult(move, botMove);
            setTimeout(() => {
                setResult(`You: ${move} - Bot: ${botMove}`);
                setMessage(moveResult);
                props.updatePlayer(moveResult);
                setIsClicked(false);
            }, 1000)
        } 
    }

// calculateBotMove calcula la jugada del bot (utilizando una llamada recursiva para no repetir la jugada anterior)

    function calculateBotMove() {
        const options = ["Rock", "Paper", "Scissors"];
        let botResult = Math.floor(Math.random() * (3));
        if (lastBotMove === options[botResult]) {
            return calculateBotMove();
        } else {
            return options[botResult];
        }
    }

    function calculateResult(playerMove, botMove) {
        if (playerMove === botMove) {
            return "It's a Tie!"
        } else if (
            (playerMove === "Rock" && botMove === "Paper") ||
            (playerMove === "Paper" && botMove === "Scissors") ||
            (playerMove === "Scissors" && botMove === "Rock")) {
                return "You lose!"
        } else if (
            (playerMove === "Paper" && botMove === "Rock") ||
            (playerMove === "Rock" && botMove === "Scissors") ||
            (playerMove === "Scissors" && botMove === "Paper")) {
                return "You win!"
        } else {
            return "undefined result"
        }
    }

    //La variable styles se utiliza para dar estilos a los botones de juego en funcion del estado isClicked

    let styles
    if (isClicked) {
        styles = {backgroundColor: "transparent", opacity: "0.5"}
    } else {
        styles = {backgroundColor: "whitesmoke", cursor: "pointer", opacity: "1"}
    }

    return (
        <div className="game-container">
            <div className="player-data">
                <div className="player-data__div">
                    <h3 className="player-data__h3">Games</h3>
                    <h3 className="player-data__h2">{props.currentPlayer.gamesPlayed}</h3>
                </div>
                <div className="player-data__div">
                    <h3 className="player-data__h3">Won</h3>
                    <h3 className="player-data__h2">{props.currentPlayer.gamesWon}</h3>
                </div>
                <div className="player-data__div">
                    <h3 className="player-data__h3">Lost</h3>
                    <h3 className="player-data__h2">{props.currentPlayer.gamesLost}</h3>
                </div>
            </div>
            <div className="game-table">
                <div className="game-table__div" onClick={() => {processMove("Rock")}} style={styles}>
                    <img className="game-table__img" src="./images/rock.png" alt="Rock" />
                </div>
                <div className="game-table__div" onClick={() => {processMove("Paper")}} style={styles}>
                    <img className="game-table__img" src="./images/paper.png" alt="Paper" />
                </div>
                <div className="game-table__div" onClick={() => {processMove("Scissors")}} style={styles}>
                    <img className="game-table__img" src="./images/scissors.png" alt="Scissors" />
                </div>
            </div>
            <div className="game-result">
                <h3 className="game-result__h3" > {result} </h3>
                <h3 className="game-message__h3" > {message} </h3>
            </div>
        </div>
    )
}