import { useState } from "react"

const allUsers = []
if (localStorage.getItem("allUsers")===null){
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
}



export default function Login({setPlayingUsers}){

    const [username, setUserName] = useState("");
    
    function addToAllUsers (username){
        let users = JSON.parse(localStorage.getItem("allUsers"))
        let newUser = {
            name: username,
            score: []
        }
        users.push(newUser)
        localStorage.setItem("allUsers", JSON.stringify(users))
    }

    function processUser(){
        console.log("asdfsa")
        let userIsNew = true
        for (let i = 1; i< allUsers.length; i++){
            if (username === allUsers[i].name){
                
                setPlayingUsers((prevPlayingUsers)=> [...prevPlayingUsers, allUsers[i]])
                userIsNew = false;
                break
            }
        }
        if (userIsNew){
            addToAllUsers (username);
            setPlayingUsers((prevPlayingUsers)=>{[...prevPlayingUsers, allUsers[-1]]})
        }
    }

    return(
    <div> Username: 
            <input name="username" 
                    value={username} 
                    onChange={(e)=>{setUserName(e.target.value)}}
            />
            <button onClick={processUser}> submit</button>
    </div>
    );

}

