import React from 'react';
import './HeaderSpock.css';

export default function HeaderSpock(props) {
  return (
    <header className="headerSpock">
        <p className="headerSpock-p">Hi {props.currentPlayer.name}</p>
        <div className="headerSpock-spockDiv" onClick={() => {props.toggleStart("Main")}}><img className="header-spockImg" src="./images/paper.png" alt="paperbutton"/></div>
        <div className="headerSpock-rankingDiv" onClick={() => {props.toggleStart("Ranking")}}><img className="header-rankingImg" src="./images/rank.png" alt="exit"/></div>
        <div className="headerSpock-exitButtonDiv" onClick={() => {props.toggleStart("Home")}}><img className="header-exitButtonImg" src="./images/exit.png" alt="exit"/></div>
    </header>
  )
}

