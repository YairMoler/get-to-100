import { useState } from "react";
import styles from "../css/login.module.css";

export default function Login({ setPlayingUsers }) {
    const [username, setUserName] = useState("");

    function addToAllUsers(username) {
        let users = JSON.parse(localStorage.getItem("allUsers"));
        let newUser = {
            name: username,
            score: [],
            id: new Date().getTime(),
        };
        users.push(newUser);
        localStorage.setItem("allUsers", JSON.stringify(users));
        return newUser;
    }

    function processUser() {
        let allUsers = JSON.parse(localStorage.getItem("allUsers"));
        let userIsNew = true;
        for (let i = 0; i < allUsers.length; i++) {
            if (username === allUsers[i].name) {
                setPlayingUsers((prevPlayingUsers) => [...prevPlayingUsers, allUsers[i]]);
                userIsNew = false;
                break;
            }
        }
        if (userIsNew) {
            const newUser = addToAllUsers(username);
            setPlayingUsers((prevPlayingUsers) => [...prevPlayingUsers, newUser]);
        }
    }

    return (
        <div className={styles.div}>
            <label htmlFor="username" className={styles.input}>
                username
            </label>
            <input
                className={styles.input}
                name="username"
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            <button onClick={processUser}> submit</button>
        </div>
    );
}
