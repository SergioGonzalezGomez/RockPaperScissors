import React from 'react';
import Game from '../Game/Game';
import Header from '../Header/Header';
import GameSpock from '../GameSpock/GameSpock';

export default function Main(props) {
  return (
    <div>
      <Header currentPlayer={props.currentPlayer} toggleStart={props.toggleStart} isSpock={props.isSpock}/>
      {!props.isSpock && <Game currentPlayer={props.currentPlayer} updatePlayer={props.updatePlayer}/>}
      {props.isSpock && <GameSpock currentPlayer={props.currentPlayer} updatePlayer={props.updatePlayer}/>}
    </div>
  )
}
