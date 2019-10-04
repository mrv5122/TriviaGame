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

var wrongImages = [
    "./assets/images/wrong-answer.gif"
];
var rightImages = [
    ".assets/images/right-answer.gif"
];

//time for each question- 20 sec
var counter = 20;

//holds the place of the current question on quiz
var currentQuestion = 0;

//number of correct answers
var correctAnswers = 0;

//number of incorrect answers
var wrongAnswers = 0;

var timer;

//function to advance to the next question once time is up
function nextQuest() {
    var isQuestOver = (questions.length -1) === currentQuestion;
    if (isQuestOver) {
        console.log("Game over!")
        displayScore();
    }
    else {
    currentQuestion++;
    displayQuestion();
    }
}

//countdown timer
function timeUp() {
    clearInterval(timer);
    wrongAnswers++;
    // preloadImage("wrong");
    setTimeout(nextQuest, 3 *1000);
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
    counter = 20;
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
//advance question, regardless of whether right or wrong choice
$(document).on("click", ".choice", function(){

    clearInterval(timer);

    var answerSelected = $(this).attr("data-answer");
    var rightAnswer = questions[currentQuestion].rightAnswer;

    if (rightAnswer === answerSelected) {
        correctAnswers++;
        preloadImage("right");
        setTimeout(nextQuest, 3 *1000);
        console.log("wins:" + correctAnswers);
    } else {
        wrongAnswers++;
        console.log("losses: " + wrongAnswers);
        preloadImage("wrong");
        setTimeout(nextQuest, 3 *1000);
    }
    console.log("User Chose:" + answerSelected);
})
//show score at end
function displayScore() {
    var result = `
    <p>You got ${correctAnswers} question(s) right.</p>
    <p>You got ${wrongAnswers} question(s) wrong.</p>
    <p>Total score: ${correctAnswers}/${questions.length} question(s) correct</p>
    <button class="btn btn-primary" id="reset">Try Again</button>`;

    $("#game").html(result);
};
//code for reset button to restart game
$(document).on("click", "#reset", function() {
    counter = 20;
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timer = false;
    displayQuestion();
});

$("#play").click(function() {
    $("#play").remove();
    $("#time").html(timer);
    displayQuestion();
});

//display funny gif when right or wrong choice selected
// function displayImage(images) {
//     var random = Math.floor(Math.random() * images);
//     var randomImage = images[random];
//     return displayImage();
// }
function preloadImage(status) {
    var correctAnswer = questions[currentQuestion].rightAnswer;
    if (status === "right") {
        $("#game").html(`
        <p class="preload-image">Congrats! You chose the right answer!</p>
        <p class="preload-image">Correct answer: <b>${correctAnswer}</b></p>`)} else {
        $("#game").html(`
        <p class="preload-image">You just took an L</p>
        <p class="preload-image">Correct answer: <b>${correctAnswer}</b></p>`)}
};
