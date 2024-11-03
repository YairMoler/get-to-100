import { useState } from "react";
import PersonalBoard from "./PersonalBoard";

export default function GameScreen(props) {
    const [activePlayer, setActivePlayer] = useState();
    const changePlayer = () => setActivePlayer((prevActivePlayer) => (prevActivePlayer === props.playingUsers.length - 1 ? 0 : prevActivePlayer++));

    return (
        <>
            {props.playingUsers.map((player, index) => (
                <PersonalBoard player={player} activePlayer={index === activePlayer ? true : false} key={index} changePlayer={changePlayer} />
            ))}
        </>
    );
}
