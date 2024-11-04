import { useState } from "react"

export default function LeaderBoard({gameEndCounter}){
// to do: what happens if less than 
    let allUsers=JSON.parse(localStorage.getItem("allUsers"));
    let userScores =[]
    for (let i = 0; i<allUsers.length; i++){

        let scoreArray = allUsers[i].score
        let devidable = true
        let length = scoreArray.length
        if(length != 0){
        let totalScore = 0;
        scoreArray.forEach(x => {totalScore += x;});
        let averagedTotalScore = Math.round(totalScore/length)
       
        let userScore = {
            name: allUsers[i].name,
            score: averagedTotalScore,
        }
        userScores.push(userScore)}
    }
    userScores.sort((a, b) => a.score - b.score)  
    let topThreeUsers = userScores.slice(0, 3)
  

    return (
        <div>
            <h2>Leaderboard</h2>
            <p>

            {topThreeUsers[0] && (
                    <>
                        <em>1st place:</em> 
                        Player: <strong>{topThreeUsers[0].name}{' '}</strong>
                        Score :<strong>{topThreeUsers[0].score}</strong>
                    </>
                )}
                <br />
                {topThreeUsers[1] && (
                    <>
                        <em>2nd place:</em> 
                        Player: <strong>{topThreeUsers[1].name}{' '}</strong>
                        Score :<strong>{topThreeUsers[1].score}</strong>
                    </>
                )}
                <br />
                {topThreeUsers[2] && (
                    <>
                        <em>3rd place:</em> 
                        Player: <strong>{topThreeUsers[2].name}{' '}</strong>
                        Score :<strong>{topThreeUsers[2].score}</strong>
                    </>
                )}
            </p>
           
        </div>
    );
}

