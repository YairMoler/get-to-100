import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Login from "./components/Login";

function App() {
    const [playingUsers, setPlayingUsers] = useState([
        // { name: "a", score: [3, 4], id: 1 },
        // { name: "b", score: [4, 5], id: 2 },
    ]);

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
            <Login setPlayingUsers={setPlayingUsers} />
            <GameScreen playingUsers={playingUsers} updateScoreAtEnd={updateScoreAtEnd} logout={logout} />
        </>
    );
}

export default App;
