import React from 'react';
import './GameSpock.css';

export default function GameSpock(props) {
    const [result, setResult] = React.useState("")
    const [message, setMessage] = React.useState("")
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
        const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let botResult = Math.floor(Math.random() * (5));
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
            (playerMove === "Rock" && (botMove === "Spock" || botMove === "Paper")) ||
            (playerMove === "Paper" && (botMove === "Scissors" || botMove === "Lizard")) ||
            (playerMove === "Scissors" && (botMove === "Rock" || botMove === "Spock")) ||
            (playerMove === "Lizard" && (botMove === "Rock" || botMove === "Scissors")) ||
            (playerMove === "Spock" && (botMove === "Lizard" || botMove === "Paper"))
            ) {
                return "You lose!"
        } else if (
            (playerMove === "Paper" && (botMove === "Rock" || botMove === "Spock")) ||
            (playerMove === "Rock" && (botMove === "Scissors" || botMove === "Lizard")) ||
            (playerMove === "Scissors" && (botMove === "Paper" || botMove === "Lizard")) ||
            (playerMove === "Lizard" && (botMove === "Paper" || botMove === "Spock")) ||
            (playerMove === "Spock" && (botMove === "Rock" || botMove === "Scissors"))
            ){
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
        <div className="gameSpock-container">
            <div className="playerSpock-data">
                <div className="playerSpock-data__div"><h3 className="playerSpock-data__h3">Games</h3><h3 className="playerSpock-data__h2">{props.currentPlayer.gamesPlayed}</h3></div>
                <div className="playerSpock-data__div"><h3 className="playerSpock-data__h3">Won</h3><h3 className="playerSpock-data__h2">{props.currentPlayer.gamesWon}</h3></div>
                <div className="playerSpock-data__div"><h3 className="playerSpock-data__h3">Lost</h3><h3 className="playerSpock-data__h2">{props.currentPlayer.gamesLost}</h3></div>
            </div>
            <div className="gameSpock-table">
                <div className="gameSpock-table__div" onClick={() => {processMove("Rock")}} style={styles}>
                    <img className="gameSpock-table__img" src="./images/rock.png" alt="Rock" />
                </div>
                <div className="gameSpock-table__div" onClick={() => {processMove("Paper")}} style={styles}>
                    <img className="gameSpock-table__img" src="./images/paper.png" alt="Paper" />
                </div>
                <div className="gameSpock-table__div" onClick={() => {processMove("Scissors")}} style={styles}>
                    <img className="gameSpock-table__img" src="./images/scissors.png" alt="Scissors" />
                </div>
                <div className="gameSpock-table__div" onClick={() => {processMove("Lizard")}} style={styles}>
                    <img className="gameSpock-table__img" src="./images/lizard.png" alt="Lizard" />
                </div>
                <div className="gameSpock-table__div" onClick={() => {processMove("Spock")}} style={styles}>
                    <img className="gameSpock-table__img" src="./images/spock.png" alt="Spock" />
                </div>
            </div>
            <div className="gameSpock-result">
                <h3 className="gameSpock-result__h3" > {result} </h3>
                <h3 className="gameSpock-message__h3" > {message} </h3>
            </div>
        </div>
    )
}