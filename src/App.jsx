import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer , setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer=='X'?'O':'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player name={'Player 1'} isActive={activePlayer=='X'} symbol={'X'}/>
            <Player name={'Player 2'} isActive={activePlayer=='O'} symbol={'O'}/>
        </ol>
        <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
      </div>
    </main>
  );
}

export default App;
