import { useState } from "react";

export default function PersonalBoard(props) {
    const [gameValue, setGameValue] = useState(Math.floor(Math.random() * 99) + 1);
    const [score, SetScore] = useState(0);

    const addOne = () => {
        setGameValue((prevGameValue) => ++prevGameValue);
        SetScore((prevScore) => ++prevScore);
        props.changePlayer();
    };

    const subtractOne = () => {
        setGameValue((prevGameValue) => --prevGameValue);
        SetScore((prevScore) => ++prevScore);
        props.changePlayer();
    };

    const multiplyByTwo = () => {
        setGameValue((prevGameValue) => prevGameValue * 2);
        SetScore((prevScore) => ++prevScore);
        props.changePlayer();
    };

    const divideByTwo = () => {
        setGameValue((prevGameValue) => prevGameValue / 2);
        SetScore((prevScore) => ++prevScore);
        props.changePlayer();
    };

    return (
        <>
            <h2>player: {props.player.name}</h2>
            <div>{gameValue}</div>
            <div>steps: {score}</div>
            {props.activePlayer && (
                <div>
                    <button onClick={addOne}>+1</button>
                    <button onClick={subtractOne}>-1</button>
                    <button onClick={multiplyByTwo}>*2</button>
                    <button onClick={divideByTwo}>/2</button>
                </div>
            )}
        </>
    );
}
