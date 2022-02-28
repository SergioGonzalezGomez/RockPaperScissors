import React from 'react';
import Game from '../Game/Game';
import Header from '../Header/Header';

export default function Main(props) {
  return (
    <div>
      <Header currentPlayer={props.currentPlayer} toggleStart={props.toggleStart}/>
      <Game currentPlayer={props.currentPlayer} updatePlayer={props.updatePlayer}/>
    </div>
  )
}