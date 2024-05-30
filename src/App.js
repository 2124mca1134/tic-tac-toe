import React, { useState, useEffect } from 'react';
import Board from './Board';
import './App.css';

const App = () => {
    const [blueScore, setBlueScore] = useState(() => parseInt(localStorage.getItem('blueScore')) || 0);
    const [redScore, setRedScore] = useState(() => parseInt(localStorage.getItem('redScore')) || 0);

    useEffect(() => {
        localStorage.setItem('blueScore', blueScore);
    }, [blueScore]);

    useEffect(() => {
        localStorage.setItem('redScore', redScore);
    }, [redScore]);

    const handleWin = (winner) => {
        if (winner === 'blue') {
            setBlueScore(blueScore + 1);
        } else if (winner === 'red') {
            setRedScore(redScore + 1);
        }
    };

    return (
        <div className="app">
            <div className="scoreboard">
                <div className="score blue">Blue: {blueScore}</div>
                <div className="score red">Red: {redScore}</div>
            </div>
            <Board onWin={handleWin} />
        </div>
    );
};

export default App;

