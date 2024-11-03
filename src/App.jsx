import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";

function App() {
    const [playingUsers, setPlayingUsers] = useState([
        { name: "a", score: [3, 4] },
        { name: "b", score: [4, 5] },
    ]);

    const updateScore = (index) => {
        setPlayingUsers();
    };
    return (
        <>
            <GameScreen playingUsers={playingUsers} />
        </>
    );
}

export default App;
