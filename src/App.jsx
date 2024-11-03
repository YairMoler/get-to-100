import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Login from "./components/Login";

function App() {
    const [playingUsers, setPlayingUsers] = useState([]);

   
   
    return(
    
        <>
        
        <Login setPlayingUsers={setPlayingUsers}/>
        <GameScreen playingUsers={playingUsers} />
    </>
    );
}

export default App;
