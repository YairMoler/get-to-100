import { useState } from "react";

export default function PersonalBoard(props) {
    const [gameValue, setGameValue] = useState(Math.floor(Math.random() * 100));
    const [score, SetScore] = useState(0);

    const addOne = () => {
        setGameValue((prevGameValue) => prevGameValue++);
        SetScore((preScore) => preScore++);
        props.changePlayer();
    };

    return (
        <>
            <h2>player: {props.playerName}</h2>
            <div>{gameValue}</div>
            <div>steps: {score}</div>
            <div>
                <button>+1</button>
                <button>-1</button>
                <button>*2</button>
                <button>/2</button>
            </div>
        </>
    );
}
