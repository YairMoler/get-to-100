import { useState } from "react"


export default function Login({setPlayingUsers}){
    
    const [username, setUserName] = useState("");
    
    
    const allUsers = []
    if (localStorage.getItem("allUsers")===null){
        localStorage.setItem("allUsers", JSON.stringify(allUsers))
    }
    
    function addToAllUsers (username){
        let users = JSON.parse(localStorage.getItem("allUsers"))
        let newUser = {
            name: username,
            score: []
        }
        users.push(newUser)
        localStorage.setItem("allUsers", JSON.stringify(users))
        return newUser
    }


    function processUser(){
        let allUsers = JSON.parse(localStorage.getItem("allUsers"))
        let userIsNew = true
        for (let i = 0; i< allUsers.length; i++){
            if (username === allUsers[i].name){
                setPlayingUsers((prevPlayingUsers)=> [...prevPlayingUsers, allUsers[i]])
                userIsNew = false;
                break
            }
        }
        if (userIsNew){
            const newUser = addToAllUsers(username);
            setPlayingUsers((prevPlayingUsers) => [...prevPlayingUsers, newUser]);
            }
        }
    

    return(
    <div> Username: 
            <input name="username" 
                    value={username} 
                    onChange={(e)=>{setUserName(e.target.value)}}/>
            <button onClick={processUser}> submit</button>
    </div>
    );

}
