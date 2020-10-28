import React from 'react';

const Scoreboard = (props) => {
// current score
// best score
    const { currentScore, bestScore } = props;
  return (
    <div>
        <h3>Current Score: {currentScore}</h3>
        <h3>Best Score: {bestScore}</h3>
    </div>
  );
}

export default Scoreboard;