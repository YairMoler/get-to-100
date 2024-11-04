import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Login from "./components/Login";

function App() {
    const [playingUsers, setPlayingUsers] = useState([
        // { name: "a", score: [3, 4] },
        // { name: "b", score: [4, 5] },
    ]);

    const updateScore = (index, newScore) => {
        const newPlayers = playingUsers.map((player, currentIndex) =>
            index !== currentIndex ? player : { ...player, score: [...player.score, newScore] }
        );
        setPlayingUsers((prevPlayingUsers) =>
            prevPlayingUsers.map((player, currentIndex) => (index !== currentIndex ? player : { ...player, score: [...player.score, newScore] }))
        );
        localStorage.setItem("allUsers", JSON.stringify(newPlayers));
    };

    return (
        <>
            <Login setPlayingUsers={setPlayingUsers} />
            <GameScreen playingUsers={playingUsers} updateScore={updateScore} />
        </>
    );
}

export default App;
