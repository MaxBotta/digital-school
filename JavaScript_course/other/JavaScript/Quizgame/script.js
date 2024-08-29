

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
    }
]



//Hier startet das Spiel
newQuestion();


function newQuestion() {
    //Speichern der ersten Frage in einer Variablen
    let newQ = questions[0];

    //Speichern der Fragebox aus dem HTML in einer Variablen
    let questionBox = document.getElementById("question");

    //Text in der Fragebox ändern
    questionBox.innerText = newQ.question;

    //Speichern aller Antwortboxen in einer Variablen
    let answerBoxes = document.getElementsByClassName("answer");

    let answers = newQ.answers;

    //Wir gehen durch alle Fragen
    let index = 0;
    for(let a of answers) {
        answerBoxes[index].innerText = a.answer;
        index++;
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