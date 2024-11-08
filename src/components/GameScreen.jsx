import { useState } from "react";
import PersonalBoard from "./PersonalBoard";
import LeaderBoard from "./LeaderBoard";
import styles from "../css/gameScreen.module.css";

export default function GameScreen(props) {
    const [activePlayer, setActivePlayer] = useState(0);
    const changePlayer = () => setActivePlayer((prevActivePlayer) => (prevActivePlayer === props.playingUsers.length - 1 ? 0 : prevActivePlayer + 1));

    const stopPlaying = (id, index) => {
        setActivePlayer((prevActivePlayer) => (index < prevActivePlayer ? prevActivePlayer - 1 : prevActivePlayer));
        props.logout(id);
        console.log("setActivePlayer: ", activePlayer);
    };

    return (
        <div className={styles.div}>
            {props.playingUsers.map((player, index) => (
                <PersonalBoard
                    player={player}
                    activePlayer={index === activePlayer ? true : false}
                    key={player.id}
                    changePlayer={changePlayer}
                    updateScoreAtEnd={props.updateScoreAtEnd}
                    stopPlaying={stopPlaying}
                    id={player.id}
                    index={index}
                    setGameEndCounter={props.setGameEndCounter}
                />
            ))}
        </div>
    );
}
