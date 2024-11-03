import { useState } from "react";

export default function GameScreen(props) {
    const [activePlayer, setActivePlayer] = useState();
    const changePlayer = () => setActivePlayer((prevActivePlayer) => (prevActivePlayer === props.playingUsers.length - 1 ? 0 : prevActivePlayer++));
}
