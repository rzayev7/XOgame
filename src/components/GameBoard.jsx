import React, { useState } from 'react'
const initialGameBoard = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
]
export default function GameBoard({onSelectSquare,activePlayerSymbol}) {
    const [gameBoard , setGameBoard] = useState(initialGameBoard);
    const handleSelectSquare = (rowIndex , colIndex) =>{
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    }
  return (
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=>(
            <ol key={rowIndex}>
                {row.map((col,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>{
                            handleSelectSquare(rowIndex,colIndex);
                        }}>{col}</button>
                    </li>
                ))}
            </ol>
        ))}
    </ol>
)
}
