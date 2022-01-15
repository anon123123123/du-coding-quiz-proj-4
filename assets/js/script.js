// Assign constants and global vars
const Q1 = {
    id: 1,
    question: "Question one",
    options: ["a1", "a1-2", "a1-3", "a1-4"],
    answer: function () {
        return this.options[0]
    }
}
const Q2 = {
    id: 2,
    question: "q2 test?",
    options: ["a2", "a2-2", "a2-3", "a2-4"],
    answer: function () {
        return this.options[0]
    }
}

const Q3 = {
    id: 3,
    question: "Third Question",
    options: ["a2", "a2-2", "a2-3", "a2-4"],
    answer: function () {
        return this.options[0]
    }
}

const Q4 = {
    id: 4,
    question: "Fourth Question",
    options: ["a2", "a2-2", "a2-3", "a2-4"],
    answer: function () {
        return this.options[0]
    }
}

const QUESTIONS = [Q1, Q2, Q3, Q4]

let time = 0
let qIndex = 0

// Update time to DOM
const updateTime = async () => {
    document.querySelector('#timer').textContent = `Time: ${time}`
}

// Main quiz start func 
const startQuiz = async () => {
    toggleHidden('#start-quiz')
    toggleHidden('#quiz-questions')
    // First add start with 0 index question obj
    addQuestions(QUESTIONS[qIndex])
    time += 75
    updateTime()
    // Timer
    const quizInterval = setInterval(function () {
        if (time > 0) {
            time--
            updateTime()
        } else {
            time = 0
            clearInterval(quizInterval)
            updateTime()
            toggleHidden('#start-quiz')
            toggleHidden('#quiz-questions')
            return
        }
    }, 1000)
}

// Toggles hidden fields func
const toggleHidden = async (select) => {
    document.querySelector(select).classList.toggle('hidden')
}
// Populate questions in form based on question object passed 
const addQuestions = async (questionObj) => {
    document.querySelector('#js-question').textContent = questionObj.question
    let inputs = document.querySelectorAll('.answers')
    let i = 0
    inputs.forEach(function (elem) {
        elem.value = questionObj.options[i]
        i++
    })
}

// Function to check answers
const answerFormHandler = async (e) => {
    const submitted = e.target.value
    const asked = QUESTIONS[qIndex]
    if (submitted === asked.answer() && qIndex < 3) {
        qIndex++
        showQuestionResult(true)
        addQuestions(QUESTIONS[qIndex])
    } else if (submitted === asked.answer() && qIndex === 3) {
        // This triggers if all questions answered 
        showQuestionResult(true)
        // To Do display score page
        alert("done with quiz tmp")

    } else if (time <= 3) {
        time = 0
        showQuestionResult(false)
        updateTime()
    } else {
        time -= 3
        showQuestionResult(false)
        updateTime()
    }
}
// Displays right or wrong func
const showQuestionResult = async (x) => {
    const resultsElem = document.querySelector('#results')
    if(resultsElem.classList.contains('hidden')) {
        toggleHidden('#results')
        setTimeout(function () {toggleHidden('#results')}, 1500)
    }
    if(x) {
        resultsElem.textContent = 'Correct!'
    } else {
        resultsElem.textContent = 'Incorrect!'
    }
}


// Event listeners
document.querySelector('#start-quiz').addEventListener('click', startQuiz)
let answerElems = document.querySelectorAll('.answers')
answerElems.forEach(function (elem) {
    elem.addEventListener('click', answerFormHandler)
})
