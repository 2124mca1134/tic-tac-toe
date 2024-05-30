import React, { useState } from 'react';
import './Board.css';

const Board = ({ onWin }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isBlueNext, setIsBlueNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = isBlueNext ? 'blue' : 'red';
        setSquares(newSquares);
        setIsBlueNext(!isBlueNext);
        const winner = calculateWinner(newSquares);
        if (winner) {
            onWin(winner);
        }
    };

    const renderSquare = (index) => (
        <button className={`square ${squares[index]}`} onClick={() => handleClick(index)}>
            {squares[index]}
        </button>
    );

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;
