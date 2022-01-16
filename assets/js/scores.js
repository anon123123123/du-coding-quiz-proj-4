// Assign const / globals 
const scoresSection = document.querySelector('#high-scores')
const olElem = document.createElement("ol")
let sortedData;

// Adds scores to list in doc
const addScores = async()=> {
    scoresSection.append(olElem)
    sortedData.forEach(element => {
        let userScore = `User: ${element[0]} Score: ${element[1]}`
        let liElem = document.createElement("li")
        olElem.append(liElem)
        console.log(element)
        liElem.appendChild(document.createTextNode(userScore))
        
    });
}

// Check if high score exists if so sort data 
if(localStorage.scores) {
    const data = JSON.parse(localStorage.scores)
    sortedData = data.sort((a, b) => b[1] - a[1])
    addScores()
}

// Func to clear scores and refresh page
const clearScore = async ()=> {
    localStorage.removeItem('scores')
    location.reload()
}

// Event listener
document.querySelector('#clear-scores').addEventListener('click', clearScore)
