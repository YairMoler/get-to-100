import { useState } from "react";

export default function PersonalBoard(props) {
    const [gameValue, setGameValue] = useState(Math.floor(Math.random() * 99) + 1);
    const [score, SetScore] = useState(0);

    const startNewGame = () => {
        setGameValue(Math.floor(Math.random() * 99) + 1);
        SetScore(0);
        setEndGame(false);
    };

    // const endGame

    const [endGame, setEndGame] = useState(false);
    console.log("endGame: ", endGame);

    const addOne = () => {
        setGameValue((prevGameValue) => prevGameValue + 1);
        SetScore((prevScore) => prevScore + 1);
        if (gameValue + 1 === 100) {
            console.log("hi");
            setEndGame(true);
            console.log("endGame: ", endGame);
            props.updateScoreAtEnd(props.id, score + 1);
        }
        props.changePlayer();
    };

    const subtractOne = () => {
        setGameValue((prevGameValue) => prevGameValue - 1);
        SetScore((prevScore) => prevScore + 1);
        if (gameValue - 1 === 100) {
            setEndGame(true);
            console.log("endGame: ", endGame);
            props.updateScoreAtEnd(props.id, score + 1);
        }
        props.changePlayer();
    };

    const multiplyByTwo = () => {
        setGameValue((prevGameValue) => prevGameValue * 2);
        SetScore((prevScore) => prevScore + 1);
        if (gameValue * 2 === 100) {
            setEndGame(true);
            console.log("endGame: ", endGame);
            props.updateScoreAtEnd(props.id, score + 1);
        }
        props.changePlayer();
    };

    const divideByTwo = () => {
        setGameValue((prevGameValue) => Math.floor(prevGameValue / 2));
        SetScore((prevScore) => prevScore + 1);
        if (gameValue / 2 === 100) {
            setEndGame(true);
            console.log("endGame: ", endGame);
            props.updateScoreAtEnd(props.id, score + 1);
        }
        props.changePlayer();
    };

    return (
        <>
            <h2>player: {props.player.name}</h2>
            <div>{gameValue}</div>
            <div>steps: {score}</div>
            {props.activePlayer && !endGame && (
                <div>
                    <button onClick={addOne}>+1</button>
                    <button onClick={subtractOne}>-1</button>
                    <button onClick={multiplyByTwo}>*2</button>
                    <button onClick={divideByTwo}>/2</button>
                </div>
            )}
            {endGame && (
                <div>
                    <h3>Do you want to play again?</h3>
                    <button onClick={startNewGame}>yes</button>
                    {/* <button onClick={logOut}>no</button> */}
                </div>
            )}
        </>
    );
}
