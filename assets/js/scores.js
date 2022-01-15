const scoresSection = document.querySelector('#high-scores')
const olElem = document.createElement("ol")

const data = JSON.parse(localStorage.scores)
const sortedData = data.sort((a, b) => b[1] - a[1])

const addScores = async()=> {
    // let scores = await getScores()
    scoresSection.append(olElem)
    sortedData.forEach(element => {
        let userScore = `User: ${element[0]} Score: ${element[1]}`
        let liElem = document.createElement("li")
        olElem.append(liElem)
        console.log(element)
        liElem.appendChild(document.createTextNode(userScore));
        
    });


}

// const getScores = async()=> {
//     const data = JSON.parse(localStorage.scores)
//     const sortedData = data.sort((a, b) => b[1] - a[1])
//     return sortedData
// }


addScores()