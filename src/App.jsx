import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";

function App() {
    const [playingUsers, setPlayingUsers] = useState([]);
    return (
        <>
            <GameScreen playingUsers={playingUsers} />
        </>
    );
}

export default App;
