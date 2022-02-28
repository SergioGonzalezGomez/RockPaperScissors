import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
        <p className="header-p">Hi {props.currentPlayer.name}</p>
        <div className="header-spockDiv" onClick={() => {props.toggleStart("MainSpock")}}><img className="header-spockImg" src="./images/spockbutton.png" alt="spockbutton"/></div>
        <div className="header-rankingDiv" onClick={() => {props.toggleStart("Ranking")}}><img className="header-rankingImg" src="./images/rank.png" alt="exit"/></div>
        <div className="header-exitButtonDiv" onClick={() => {props.toggleStart("Home")}}><img className="header-exitButtonImg" src="./images/exit.png" alt="exit"/></div>
    </header>
  )
}