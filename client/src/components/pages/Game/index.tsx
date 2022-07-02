import React from 'react';

import Features from './Features';
import FightStage from './FightStage';
import Legend from './Legend';
import Mechanics from './Mechanics';

import './styles.scss';

const Game = () => {

  return (
    <div>
      <Legend />
      <Mechanics />
      <FightStage />
      <Features />
    </div>
  )
}

export default Game;