import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Login from "./components/Login";
import LeaderBoard from "./components/LeaderBoard";

function App() {
    const [playingUsers, setPlayingUsers] = useState([]);
    const [gameEndCounter, setGameEndCounter] = useState(0);

    const updateScoreAtEnd = (id, newScore) => {
        const newPlayers = playingUsers.map((player, currentIndex) =>
            id !== player.id ? player : { ...player, score: [...player.score, newScore] }
        );
        setPlayingUsers((prevPlayingUsers) =>
            prevPlayingUsers.map((player) => (id !== player.id ? player : { ...player, score: [...player.score, newScore] }))
        );
        let allUsers = JSON.parse(localStorage.getItem("allUsers"));
        let newAllUsers = allUsers.map((player) => (id !== player.id ? player : { ...player, score: [...player.score, newScore] }));
        console.log("newAllUsers: ", newAllUsers);
        localStorage.setItem("allUsers", JSON.stringify(newAllUsers));
    };

    const logout = (id) => {
        setPlayingUsers((prevPlayingUsers) => prevPlayingUsers.filter((player) => player.id !== id));
        console.log("hi");
    };
    return (
        <>
            <header>
                <Login setPlayingUsers={setPlayingUsers} />
                <LeaderBoard gameEndCounter={gameEndCounter} />
            </header>
            <GameScreen playingUsers={playingUsers} updateScoreAtEnd={updateScoreAtEnd} logout={logout} setGameEndCounter={setGameEndCounter} />
        </>
    );
}

export default App;
