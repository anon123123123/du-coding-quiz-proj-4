// Assign constants and global vars
const Q1 = {
    id: 1,
    question: "q1 test?",
    options: ["a1","a1-2", "a1-3","a1-4"],
    answer: "a1"
}
const Q2 = {
    id: 2,
    question: "q2 test?",
    options: ["a2","a2-2", "a2-3","a2-4"],
    answer: "a2-4"
}

const QUESTIONS = [Q1,Q2]

let time = 0


// Update time to DOM
let updateTime = async () => {
    document.querySelector('#timer').textContent = `Time: ${time}`
}

// Main quiz start func 
let startQuiz = async () => {
    toggleHidden('#start-quiz')
    toggleHidden('#quiz-questions')
    time += 75
    updateTime()
    // Timer
    setInterval(function() {
        if(time > 0) {
            time--
            updateTime()
        } else {
            clearInterval()
            time = 0
            updateTime()
        }
    }, 1000)
}

// Toggles hidden fields func

let toggleHidden = async (select)=> {
    document.querySelector(select).classList.toggle('hidden')


}
// Event listeners

document.querySelector('#start-quiz').addEventListener('click', startQuiz)
// Populate question 


// Function to check answers