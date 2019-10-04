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
var countDown = 20;

//holds the place of the current question on quiz
var currentQuestion = 0;

//number of correct answers
var correctAnswers = 0;

//number of incorrect answers
var wrongAnswers = 0;

var timer;

//displaying questions and options on html
function displayQuestion() {
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
 
    $("#timer").html("Time Remaining: " + countDown);
    $("#game").html("<h4>" + question + "</h4>")
};

function displayChoices() {
    var answer = "";
    for (let i=0; i < choices.length; i++) {
        answer += '<p class="choice" data-answer></p>';
    }

    return answer;
}

displayQuestion();

// window.onload = function () {
//     $("#play").on("click", startGame);
// };


// var countDown
// var intervalId;

// var clockRunning = false;

// var time = 1000 * 120;

// function startGame() {
//     if (!clockRunning) {
        
//         intervalId = setTimeout(countDown);
        
//         clockRunning = true;
       
//         //alert at 30 sec
//         setTimeout(thirtySeconds, 1000 * 90);

//         //alert at 1 min
//         setTimeout(oneMinute, 1000 * 60);

//         //alert user at end of time
//         setTimeout(timeUp, 1000 * 120);

//         //timeout functions defined
//         function thirtySeconds() {
//             $("#time-remaining").append("<h2>30 seconds remaining!</h2>");
//             console.log("30 seconds left")
//         }

//         function oneMinute() {
//             $("#time-remaining").append("<h2>1 minute remaining!</h2>");
//             console.log("1 minute left")
//         }

//         function timeUp() {
//             console.log("timer done");
//             $("#time-remaining").append("<h2>Time is up!</h2>");
//             alert("Time is up!");
//         }
//     }
// }
// //var holding the setInterval that runs timer

// //prevents clock from speeding up unnecessarily
// var clockRunning = false;



