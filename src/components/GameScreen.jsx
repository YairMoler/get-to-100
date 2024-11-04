import { useState } from "react";
import PersonalBoard from "./PersonalBoard";
import LeaderBoard from "./LeaderBoard";

export default function GameScreen(props) {
    const [activePlayer, setActivePlayer] = useState(0);
    const changePlayer = () => setActivePlayer((prevActivePlayer) => (prevActivePlayer === props.playingUsers.length - 1 ? 0 : ++prevActivePlayer));
    const [gameEndCounter, setGameEndCounter] = useState(0);


    return (
        <>
            {props.playingUsers.map((player, index) => (
                <PersonalBoard
                    player={player}
                    activePlayer={index === activePlayer ? true : false}
                    key={index}
                    changePlayer={changePlayer}
                    updateScore={props.updateScore}
                    index={index}
                    setGameEndCounter={setGameEndCounter}
                />

               
            )
            )}
            <LeaderBoard  gameEndCounter={gameEndCounter} />
        </>
    );
}
