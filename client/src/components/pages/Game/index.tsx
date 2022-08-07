import React from 'react';

import SpellsFactors from './SpellsFactors';
import FightStage from './FightStage';
import Legend from './Legend';
import Mechanics from './Mechanics';

import './styles.scss';

const Game = () => {

  return (
    <div>
      <Legend />
      <Mechanics />
      {/* <FightStage /> */}
      <SpellsFactors />
    </div>
  )
}

export default Game;