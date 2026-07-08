const quizData = [
    {
        question: "What is the function of the 24-pin ATX connector on a power supply?",
        a: "Provides power to the motherboard",
        b: "Provides power to the CPU",
        c: "Provides power to the graphics card",
        d: "Provides power to the hard drive",
        correct: "a",
    },
    {
        question: "What is the function of the EPS connector on a power supply?",
        a: "Provides power to the motherboard",
        b: "Provides power to the CPU",
        c: "Provides power to the graphics card",
        d: "Provides power to the hard drive",
        correct: "b",
    },
    {
        question: "Which of the following is a measure of the efficiency of a power supply?",
        a: "Watts per hour",
        b: "Voltage",
        c: "Amperage",
        d: "80 Plus certification",
        correct: "d",
    },
    {
        question: "What is the function of the PCIe power connector on a power supply?",
        a: "Provides power to the motherboard",
        b: "Provides power to the CPU",
        c: "Provides power to the graphics card",
        d: "Provides power to the hard drive",
        correct: "c",
    },
    

];

const quiz= document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}

function getSelected() {
    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected ()
    if(answer) {
        if(answer === quizData [currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }   
    }
});

export default powersupply;