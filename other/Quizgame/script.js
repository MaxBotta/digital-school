

//Liste mit allen Fragen
let questions = [
    {
        question: "Wie legt man eine unveränderliche Variable an?",
        answers: [
            { answer: "const", isCorrect: true },
            { answer: "let", isCorrect: false },
            { answer: "var", isCorrect: false },
            { answer: "con", isCorrect: false }
        ]
    },
    {
        question: "Wofür steht HTML?",
        answers: [
            { answer: "Hyper Tag Markup Language", isCorrect: false },
            { answer: "Hypertext Markup Language", isCorrect: true },
            { answer: "Hypertext Machine Learning", isCorrect: false },
            { answer: "Help The Machine Lives", isCorrect: false }
        ]
    },
    {
        question: "Wie viel Prozent der Programmierer verwenden JavaScript?",
        answers: [
            { answer: "15%", isCorrect: false },
            { answer: "32%", isCorrect: false },
            { answer: "86%", isCorrect: false },
            { answer: "65%", isCorrect: true }
        ]
    },
    
]


//Hier startet das Spiel
newQuestion();





function newQuestion() {
    let randomNumber = randNumber(0, questions.length - 1);
    let randomQuestion = questions[randomNumber];

    let questionBox = document.getElementById("question");
    questionBox.innerText = randomQuestion.question;

    let answerBoxes = document.querySelectorAll(".answer");

    for(let i = 0; i < randomQuestion.answers.length; i++) {
        answerBoxes[i].innerText = randomQuestion.answers[i].answer;
    }


}



function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let isPlaying = false;
function playMusic() {
    var music = document.getElementById("music"); 
    if(isPlaying) {
        isPlaying = false;
        music.pause();
    } else {
        isPlaying = true;
        music.play();
    }
}