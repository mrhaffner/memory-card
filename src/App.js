import { React, useState, useEffect } from 'react';
import Scoreboard from './Components/Scoreboard';
import CardList from './Components/CardList';

const App = () => {
  const [cards, setCards] = useState([1,2,3,4,5,6,7,8]);
  const [selected, setSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (e) => {
    const id = e.target.id;
    if (selected.length === 8) {
      setSelected([]);
    } else {
      setSelected((prevState) => ([...prevState, id]));
    };
    if (selected.includes(id)) {
      setCurrentScore(0);
      setSelected([]);
    } else {
      setCurrentScore(currentScore + 1);
    };
  };

  useEffect(() => {
    if (bestScore < currentScore) setBestScore(currentScore);
    setCards(shuffleCards(cards));
  }, [setBestScore, bestScore, currentScore, setCards, cards])

  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardList cards={cards} handleClick={handleClick} />
    </div>
  );
};

export default App;
