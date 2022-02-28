import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <p className="header-p">Hi {props.currentPlayer.name}</p>
      {!props.isSpock && <div className="header-spockDiv" onClick={() => {props.toggleStart("MainSpock")}}>
          <img className="header-spockImg" src="./images/spockbutton.png" alt="spockbutton"/>
      </div>}
      {props.isSpock && <div className="header-spockDiv" onClick={() => {props.toggleStart("Main")}}>
          <img className="header-spockImg" src="./images/paper.png" alt="paperbutton"/>
      </div>}
      <div className="header-rankingDiv" onClick={() => {props.toggleStart("Ranking")}}>
          <img className="header-rankingImg" src="./images/rank.png" alt="ranking"/>
      </div>
      <div className="header-exitButtonDiv" onClick={() => {props.toggleStart("Home")}}>
          <img className="header-exitButtonImg" src="./images/exit.png" alt="exit"/>
      </div>
    </header>
  )
}