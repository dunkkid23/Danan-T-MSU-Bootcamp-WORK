// GLOBAL VARIABLES
var scoreCorrect = 0;
var scoreIncorrect = 0;
var score = 0;
var currentQ = 0;
var timeleft = 45;

// QUESTIONS/ANSWER ARRAY
var quizQuestions = [{
    question: "What does DOM stand for?",
    answers: ["Dainty Object Model", "Document Object Model", "Designer Oblong Mask", "Document Opioid Model"],
    correctAnswer: "Document Object Model"
}, {
    question: "What form is the result of querySelectorAll?",
    answers: ["String", "Boolean", "Number", "Array"],
    correctAnswer: "Array"
}, {
    question: "Where in an HTML document do you link an external style sheet?",
    answers: ["Footer", "Body", "Head", "Garbage"],
    correctAnswer: "Head"
}, {
    question: "What is the name of the framework containing CSS & JavaScript-based design templates?",
    answers: ["Bootstrap", "JQuery", "Node", "Altavista"],
    correctAnswer: "Bootstrap"
}, {
    question: "What does HTML stand for?",
    answers: ["Hyperthread Makeup License", "Human-Tested Mineral Lovers", "Hypertext Markup Language", "Handsy Trucker Milks Ladies"],
    correctAnswer: "Hypertext Markup Language"
}];

// EVENT LISTENER WHEN YOU HIT THE BEGIN BUTTON
// MOVES TO THE QUESTION DIV AND SETS TIMER, ALSO ENDS TIMER
// UPON TIMER HITTING 0 OR YOU FINISHING QUIZ
$("#startBtn").click(function () {
    $("#begin").addClass("hide");
    $("#questionDiv").removeClass("hide");
    $("#countdown").removeClass("hide");
    $("#currentScore").text("Score: " + score);
    populateQuiz();
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $("#resultText").text("You've run out of time!");
            $("#countdown").text("");
            $("#questionDiv").addClass("hide");
            $("#resultScreen").removeClass("hide");
            $("#countdown").addClass("hide");
        } else if (currentQ >= quizQuestions.length) {
            clearInterval(downloadTimer);
        } else {
            $("#countdown").text(timeleft + " seconds remaining");
        }
        timeleft -= 1;
    }, 1000);
});

// THIS POPULATES THE QUIZ WITH THE CORRECT ANSWERS FOR EACH QUESTION
// UPON COMPLETION, IT WILL HIDE EVERYTHING BUT THE RESULT PAGE
function populateQuiz() {
    if (currentQ < quizQuestions.length) {
        $("#questionField").text(quizQuestions[currentQ].question);
        $("#a").text(quizQuestions[currentQ].answers[0]);
        $("#b").text(quizQuestions[currentQ].answers[1]);
        $("#c").text(quizQuestions[currentQ].answers[2]);
        $("#d").text(quizQuestions[currentQ].answers[3]);
    } else if (currentQ >= quizQuestions.length) {
        $("#resultText").text("You've completed the quiz!");
        $("#questionDiv").addClass("hide");
        $("#resultScreen").removeClass("hide");
        $("#countdown").addClass("hide");
    }
}

// UPON CLICKING AN ANSWER BUTTON, IT WILL CHECK IF CORRECT OR INCORRECT
// WILL NOTIFY YOU VIA AN ALERT, IF INCORRECT WILL SUBTRACT TIME/SCORE
// CORRECT ANSWERS WILL GAIN POINTS, BOTH WILL DYNAMICALLY UPDATE SCORE
$(".answer").click(function () {
    $("#currentScore").text("Score: " + score);
    if ($(this).text() === quizQuestions[currentQ].correctAnswer) {
        alert("Correct!");
        scoreCorrect++;
        updateScore();
    } else {
        alert("Incorrect!");
        scoreIncorrect++;
        timeleft -= 5;
        updateScore();
    }
    currentQ++;
    populateQuiz();
});

// FUNCTION FOR DYNAMICALLY UPDATING SCORE ON TOP NAVBAR
function updateScore() {
    score = (scoreCorrect * 5) - (scoreIncorrect * 3);
    $("#currentScore").text("Score: " + score);
}

// SAVES YOUR INITIALS TO LOCAL STORAGE FROM THE TEXT BOX ON RESULTS PAGE
function setScore() {
    var initials = $("#initialText").val();
    if (initials === "") {
            // IF NO INITIALS ARE ENTERED, WILL GIVE ERROR ALERT WHEN HITTING SUBMIT
        alert("Please enter your initials, idiot!");
    } else if (initials !== "") {
            // VARIABLES FOR SAVING/PULLING INITIALS/SCORE FROM LOCAL STORAGE
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            score: score,
            initials: initials
        };
        highscores.push(newScore);
            // SAVES INITIALS/SCORE INTO LOCAL STORAGE USING JSON
        localStorage.setItem("highscores", JSON.stringify(highscores));
        $("#resultScreen").addClass("hide");
        $("#highScoreDiv").removeClass("hide");
        highscores.sort(function (a, b) {
            return b.score - a.score
        })
            // CREATES LIST ITEMS FOR EACH SUBMISSION SAVED IN LOCAL STORAGE
            // AND APPENDS THEM INTO THE DIV ON THE HIGH SCORE PAGE
        for (var i = 0; i < highscores.length; i++) {
            var newNameLi = $("<li></li>");
            newNameLi.text(highscores[i].initials + ": " + highscores[i].score + " points");
            $("#highscore-initials").append(newNameLi);
        }
    }
}

// RUNS THE SETSCORE FUNCTION UPON CLICKING THE INITIALS SUBMIT BUTTON
$("#initialSubmit").click(function () {
    setScore();
});

// RESETS EVERYTHING AND REVERTS BACK TO THE BEGINNING PAGE TO RERUN THE QUIZ
$("#restart").click(function () {
    $("#highScoreDiv").addClass("hide");
    $("#begin").removeClass("hide");
    timeleft = 45;
    currentQ = 0;
    score = 0;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    updateScore();
});

// CLEARS OUT THE LOCAL STORAGE SO YOU CAN RESET THE LEADERBOARD
$("#reset").click(function () {
    localStorage.clear();
    $("#highscore-initials").html("");
    $("#highscore-score").html("");
});