import React from 'react';
import GameSpock from '../GameSpock/GameSpock';
import HeaderSpock from '../HeaderSpock/HeaderSpock';

export default function MainSpock(props) {
  return (
    <div>
      <HeaderSpock currentPlayer={props.currentPlayer} toggleStart={props.toggleStart}/>
      <GameSpock currentPlayer={props.currentPlayer} updatePlayer={props.updatePlayer}/>
    </div>
  )
}