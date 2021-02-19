const quizData = [
    {
        question: 'What is the best programming language for web development?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'Php',
        correct: 'b'
    },
    {
        question: 'What is the best programming language for AI?',
        a: 'JavaScript',
        b: 'Java',
        c: 'Python',
        d: 'C#',
        correct: 'c'
    },
    {
        question: 'What is the best programming language for ML?',
        a: 'C#',
        b: 'Python',
        c: 'Java',
        d: 'C++',
        correct: 'b'
    },
    {
        question: 'What is the best programming language for game development?',
        a: 'C++',
        b: 'Python',
        c: 'JavaScript',
        d: 'C#',
        correct: 'a'
    },
    {
        question: 'What is the best programming language for Data Science?',
        a: 'Java',
        b: 'R',
        c: 'C',
        d: 'Python',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 class="result">You answered correctly 
            at ${score}/${quizData.length} questions!</h2>
            <button id="restart"><a href="index.html">Restart</a></button>`
        }
    } else {
        alert('Select the answer!')
    }
});

