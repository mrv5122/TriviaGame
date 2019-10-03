//oject variable to hold questions for game
var questions = [
    {
        question: "What is the Capital of Canada?",
        choices: ["Quebec", "Montreal", "Toronto", "Ottawa"],
        rightAnswer: choices[3],
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Arles", "Limoges", "Avignon"],
        rightAnswer: choices[0],
    },
    {
        question: "What is the capital of Peru?",
        choices: ["Pisco", "Tacna", "Lima", "Cusco"],
        rightAnswer: choices[2],
    },
    {
        question: "What is the capital of China?",
        choices: ["Beijing", "Shanghai", "Hong Kong", "Xi'an"],
        rightAnswer: choices[0],
    },
    {
        question: "What is the capital of Russia?",
        choices: ["Saint Petersburg", "Moscow", "Kazan", "Sochi"],
        rightAnswer: choices[1],
    },
    {
        question: "What is the capital of Lithuania?",
        choices: ["Riga", "Vilnius", "Palanga", "Trakai"],
        rightAnswer: choices[1],
    },
];

console.log(question);

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



