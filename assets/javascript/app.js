//oject variable to hold questions for game
var questions = [
    {
        question: "What is the Capital of Canada?",
        choices: ["Quebec", "Montreal", "Toronto", "Ottawa"],
        rightAnswer: "Ottawa",
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Arles", "Limoges", "Avignon"],
        rightAnswer: "Paris",
    },
    {
        question: "What is the capital of Peru?",
        choices: ["Pisco", "Tacna", "Lima", "Cusco"],
        rightAnswer: "Lima",
    },
    {
        question: "What is the capital of China?",
        choices: ["Beijing", "Shanghai", "Hong Kong", "Xi'an"],
        rightAnswer: "Beijing",
    },
    {
        question: "What is the capital of Russia?",
        choices: ["Saint Petersburg", "Moscow", "Kazan", "Sochi"],
        rightAnswer: "Moscow",
    },
    {
        question: "What is the capital of Lithuania?",
        choices: ["Riga", "Vilnius", "Palanga", "Trakai"],
        rightAnswer: "Vilnius",
    },
];

//time for each question- 20 sec
var counter = 30;

//holds the place of the current question on quiz
var currentQuestion = 0;

//number of correct answers
var correctAnswers = 0;

//number of incorrect answers
var wrongAnswers = 0;

var timer;

//function to advance to the next question
function nextQuest() {
    currentQuestion++;
    displayQuestion();
}

//countdown timer
function timeUp() {
    clearInterval(timer);
    wrongAnswers++;
    nextQuest();
}

function countDown() {
    counter--;
    $("#timer").html("Time Remaining: " + counter);
    if (counter === 0) {
        timeUp();
    }
}



//displaying questions and options on html
function displayQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);
    
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
 
    $("#timer").html("Time Remaining: " + counter);
    $("#game").html(`<h4> ${question}</h4> 
    <p class='choice' data-answer='${choices}'>${displayChoices(choices)}</p>`);

    console.log(choices);
};

function displayChoices(choices) {
    var result = "";

    for (var i = 0; i < choices.length; i++) {
        result += `<p class='choice' data-answer='${choices[i]}'> ${choices[i]}</p>`;
    }

    return result;
}

displayQuestion();





