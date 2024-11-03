import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import Login from "./components/Login";

function App() {
   
   
    return(
    
        <>
        
        <Login />
        <GameScreen playingUsers={playingUsers} />
    </>
    );
}

export default App;
