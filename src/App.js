import { React, useState } from 'react';
import Scoreboard from './Scoreboard';
import CardList from './CardList';

const App = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [selected, setSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id)
    //check if that card is in array of already selected cards
      //update current score/reset the game/maybe update best score
    //function to change order of cards - invoke when component mounts
  }

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardList cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
